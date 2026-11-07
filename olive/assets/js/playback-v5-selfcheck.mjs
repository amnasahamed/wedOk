import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const source=fs.readFileSync(new URL('./app-playback-v5.js',import.meta.url),'utf8');
const original=fs.readFileSync(new URL('./app.js',import.meta.url),'utf8');
const decoder={};vm.createContext(decoder);
const marker='(_0x23f5,0xe075f)', end=source.indexOf(marker)+marker.length;
vm.runInContext(source.slice(source.indexOf('function _0x23f5'))+source.slice(0,end)+');',decoder,{timeout:1000});
const finish=source.slice(source.indexOf('function _0x3bc726(){'),source.indexOf('const _0xcdf4b6='));
const opening=source.slice(source.indexOf('function _0x2cae06(){'),source.indexOf('}_0x4b4283[_0x45ed12',source.indexOf('function _0x2cae06(){'))+1);
const handlers=source.slice(source.indexOf('}_0x4b4283[_0x45ed12',source.indexOf('function _0x2cae06(){'))+1,source.indexOf('const _0x1add87='));
function harness(reject=false){
 let time=0, musicPlays=0, plays=0;
 const timers=[];
 const advance=ms=>{const until=time+ms;while(true){timers.sort((a,b)=>a.at-b.at);if(!timers[0]||timers[0].at>until)break;const t=timers.shift();time=t.at;t.fn();}time=until;};
 const el=()=>({hidden:true,removed:false,classes:new Set(),events:{},classList:{add(...keys){keys.forEach(k=>this.owner.classes.add(k));},remove(...keys){keys.forEach(k=>this.owner.classes.delete(k));}},addEventListener(k,fn){this.events[k]=fn;},remove(){this.removed=true;}});
 const nodes=[el(),el(),el(),el(),el(),el()];nodes.forEach(n=>n.classList.owner=n);
 const [cover,video,button,html,body,skip]=nodes;html.classes.add('locked');
 video.currentTime=0;video.play=()=>{plays++;return reject?Promise.reject(new Error('blocked')):Promise.resolve();};
 const box={_0x45ed12:decoder._0x2b8f,_0x21f0c9:false,_0x40cb76:false,_0x57c1fc:cover,_0x4b4283:video,_0x297457:button,_0x90b2cd:()=>musicPlays++,_0x2188ba:()=>skip,document:{documentElement:html,body},window:{scrollTo(){}},setTimeout:(fn,delay)=>timers.push({fn,at:time+delay})};
 vm.createContext(box);vm.runInContext(finish+opening+handlers,box,{timeout:1000});
 return {box,cover,video,button,html,body,skip,advance,plays:()=>plays,musicPlays:()=>musicPlays};
}
{
 const h=harness();h.video.currentTime=.6;h.box._0x2cae06();h.box._0x2cae06();
 assert.equal(h.video.currentTime,0);assert.equal(h.plays(),1);assert.equal(h.musicPlays(),1);
 h.video.events.ended();h.advance(2000);assert.ok(h.cover.removed);assert.ok(h.body.classes.has('go'));assert.ok(!h.html.classes.has('locked'));assert.equal(h.button.hidden,false);
 h.advance(9000);assert.ok(h.cover.removed);console.log('PASS normal opening starts at zero, repeated tap ignored, end unlocks');
}
{
 const h=harness();h.box._0x2cae06();h.advance(10000);assert.ok(h.cover.removed);assert.ok(!h.html.classes.has('locked'));console.log('PASS stalled opening watchdog unlocks');
}
{
 const h=harness(true);h.box._0x2cae06();await Promise.resolve();h.advance(2000);assert.ok(h.cover.removed);assert.ok(h.body.classes.has('go'));console.log('PASS rejected playback opens usable page');
}
{
 const h=harness();let stopped=false;h.skip.events.click({stopPropagation(){stopped=true;}});h.advance(2000);assert.ok(stopped);assert.ok(h.cover.removed);assert.equal(h.plays(),0);console.log('PASS Skip bypasses video and unlocks');
}
{
 const h=harness();h.cover.events.keydown({key:'Enter'});assert.equal(h.plays(),1);h.video.currentTime=5.1;h.video.events.timeupdate();h.advance(2000);assert.ok(h.cover.removed);console.log('PASS keyboard activation and time threshold');
}
assert.ok(original.includes('0.6'),'Original opener preserved');
const css=fs.readFileSync(new URL('../css/opening-v5.css',import.meta.url),'utf8');
assert.ok(css.includes('#cover.whiten .cover-veil { opacity: 0; }'));
assert.ok(css.includes('translate(-50%, -50%) !important'));
console.log('PASS preserved original, stationary stage and suppressed cream flash');
