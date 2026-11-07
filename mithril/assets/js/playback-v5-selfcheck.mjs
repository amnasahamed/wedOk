import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';

// Exercise the actual readable handoff functions without a browser/media decoder.
const source = fs.readFileSync(new URL('./app-playback-v4.js', import.meta.url), 'utf8');
const start = source.indexOf('function _0x937988(){');
const end = source.indexOf('\n_0x5ded19[', start);
assert.ok(start > 0 && end > start, 'Readable handoff functions found');
const functions = source.slice(start, end);

function harness({ rvfc = true, heroReject = false, openerReject = false, duration = 5.17 } = {}) {
  let time = 0, next = 1, renders = 0;
  const timers = new Map();
  const timer = (fn, delay = 0) => { const id = next++; timers.set(id, { fn, due:time + delay }); return id; };
  const advance = ms => {
    const stop = time + ms;
    while (true) {
      const first = [...timers].filter(([,t]) => t.due <= stop).sort((a,b) => a[1].due-b[1].due)[0];
      if (!first) break;
      time = first[1].due; timers.delete(first[0]); first[1].fn();
    }
    time = stop;
  };
  const element = () => ({ style:{}, removed:false, classList:{add(){},remove(){}}, remove(){this.removed=true;} });
  const cover = element(), poster = element(), stage = element(), musicWrap = element();
  const sections = element();
  Object.defineProperty(sections,'innerHTML',{set(){renders++;}});
  const media = reject => ({
    ...element(), paused:true, currentTime:0, frames:[], events:new Map(),
    play(){ this.paused=false; return reject ? Promise.reject(new Error('blocked')) : Promise.resolve(); },
    pause(){this.paused=true;},
    addEventListener(type,fn,opts){const list=this.events.get(type)||[];list.push({fn,once:opts?.once});this.events.set(type,list);},
    emit(type){const list=this.events.get(type)||[];this.events.set(type,list.filter(x=>!x.once));list.forEach(x=>x.fn());},
    requestVideoFrameCallback:rvfc ? function(fn){this.frames.push(fn);} : undefined
  });
  const opening = media(openerReject), hero=media(heroReject), music=media(false);
  opening.duration=duration;
  const nodes={'#heroPoster':poster,'#heroStage':stage,'#musicWrap':musicWrap,'#sections':sections,'#coverText':element()};
  const box = {
    _0x1327c7:opening,_0x349281:hero,_0x45c345:music,_0x5ded19:cover,
    _0x3b52e9:false,_0x475dcf:false,
    _0x5e3735:id=>nodes[id],_0x42de47:()=>[],
    _0x410c79:{sections:['one']},_0x48d3b9:{one:()=>'<section></section>'},
    _0x753205(){},_0x3a1cef(){},
    window:{scrollTo(){}},document:{documentElement:{style:{overflow:'hidden'}}},
    setTimeout:timer,clearTimeout:id=>timers.delete(id),requestAnimationFrame:fn=>timer(fn,16)
  };
  vm.createContext(box);vm.runInContext(functions,box,{timeout:1000});
  return {box,opening,hero,cover,poster,advance,renders:()=>renders};
}

{
  const h=harness();h.box._0x148824();await Promise.resolve();
  assert.equal(h.hero.currentTime,0);assert.equal(h.hero.paused,true,'Opener click does not advance hero');
  h.box._0x937988();assert.notEqual(h.cover.style.opacity,'0','Cover holds while awaiting decoded frame');
  h.hero.frames.shift()();assert.equal(h.cover.style.opacity,'0');
  h.box._0x937988();h.advance(2000);assert.equal(h.renders(),1,'Repeated end/error events render once');
  assert.equal(h.box.document.documentElement.style.overflow,'');
  console.log('PASS decoded-frame handoff, repeated events, scroll unlock, no hero reset');
}
{
  const h=harness({rvfc:false});h.box._0x937988();h.hero.emit('playing');
  h.advance(31);assert.notEqual(h.cover.style.opacity,'0');h.advance(1);assert.equal(h.cover.style.opacity,'0');
  console.log('PASS playing plus double-rAF fallback');
}
{
  const h=harness({heroReject:true});h.box._0x937988();await Promise.resolve();
  assert.equal(h.cover.style.opacity,'0');assert.equal(h.poster.style.opacity,'1');assert.equal(h.hero.style.opacity,'0');
  h.advance(1000);assert.equal(h.box.document.documentElement.style.overflow,'');
  console.log('PASS rejected hero displays matching poster and unlocks');
}
{
  const h=harness();h.box._0x937988();h.advance(1800);
  assert.equal(h.poster.style.opacity,'1');assert.equal(h.hero.style.opacity,'0');
  h.hero.emit('playing');h.hero.frames.forEach(fn=>fn());
  assert.equal(h.poster.style.opacity,'0');assert.equal(h.hero.style.opacity,'1');assert.equal(h.renders(),1);
  console.log('PASS stalled hero poster fallback then late decoded-frame recovery');
}
for (const duration of [5.17,NaN]) {
  const h=harness({duration});h.box._0x148824();await Promise.resolve();
  h.advance(16000);assert.equal(h.renders(),1);assert.equal(h.cover.removed,true);
  assert.equal(h.box.document.documentElement.style.overflow,'');
}
console.log('PASS stalled opener watchdog, known and unknown duration');
{
  const h=harness({openerReject:true});h.box._0x148824();await Promise.resolve();
  h.advance(3000);assert.equal(h.renders(),1);assert.equal(h.cover.removed,true);
  console.log('PASS rejected opener proceeds to usable hero fallback');
}
