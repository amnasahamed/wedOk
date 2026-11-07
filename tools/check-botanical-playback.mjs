/* No-dependency regression checks for the final Bloom/Bahaar/Exotic files.
 * Exercises actual recovery/listener code with small DOM/media doubles.
 * Browser screenshots and decoded-frame behavior remain separate QA evidence.
 */
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
const root = new URL('../', import.meta.url);
const read = path => readFileSync(new URL(path, root), 'utf8');
const run = (source, context) => vm.runInNewContext(source, context, { timeout: 2000 });
function extractFunction(source, name) {
  const start = source.indexOf(`function ${name}(`);
  assert(start >= 0, `Missing function ${name}`);
  let depth = 0, quote = '', escaped = false;
  for (let i = source.indexOf('{', start); i < source.length; i++) {
    const ch = source[i];
    if (quote) { if (escaped) escaped = false; else if (ch === '\\') escaped = true; else if (ch === quote) quote = ''; continue; }
    if (ch === '"' || ch === "'" || ch === '`') { quote = ch; continue; }
    if (ch === '{') depth++;
    if (ch === '}' && --depth === 0) return source.slice(start, i + 1);
  }
  throw Error(`Unclosed function ${name}`);
}
function node() {
  const events = {}, attributes = {}, classes = new Set();
  return { events, attributes, hidden: false, style: {},
    classList: { add: (...x) => x.forEach(v => classes.add(v)), remove: (...x) => x.forEach(v => classes.delete(v)), contains: x => classes.has(x) },
    setAttribute: (k, v) => { attributes[k] = v; }, addEventListener: (k, f) => { events[k] = f; }, append() {} };
}

// Bloom: use the actual duration expression and watchdog callback, not a copy.
const bloom = read('bloom/assets/js/app.js');
assert(!bloom.includes('>=4.6'));
const duration = bloom.match(/Math\.max\(0,\(_0x1a916e\.duration\|\|5\.166667\)-0\.08\)/)?.[0];
const watchdog = bloom.match(/setTimeout\((\(\)=>\{if\(_0x1a916e\.error\|\|_0x1a916e\.ended\)_0x2344db\(\);\}),15000\)/)?.[1];
assert(duration && watchdog, 'Bloom duration/watchdog source changed; re-audit test anchors');
let finished = 0;
const bv = { duration: 5.166667, currentTime: 2, ended: false, error: null };
const bc = { _0x1a916e: bv, _0x2344db: () => finished++ };
assert.equal(run(duration, bc), 5.086667);
const checkBloom = run(watchdog, bc);
checkBloom(); bv.currentTime = 4.6; checkBloom();
assert.equal(finished, 0, 'Buffering/progress must not trigger wall-clock finish');
bv.ended = true; checkBloom(); assert.equal(finished, 1);
bv.ended = false; bv.error = {}; checkBloom(); assert.equal(finished, 2);
bv.duration = 9; assert.equal(run(duration, bc), 8.92, 'Threshold follows actual duration');
const cover = node(); run(read('bloom/assets/js/v5-opening-guard.js'), { document: { querySelector: () => cover } });
let prevented = 0;
for (const key of ['Enter', ' ']) cover.events.keydown({ key, preventDefault: () => prevented++ });
assert.equal(prevented, 2);
assert.match(read('bloom/assets/css/v5-opening-qa.css'), /#cover\.opening #skip\s*\{[^}]*visibility:visible/);
console.log('PASS Bloom duration, buffering/ended/error watchdog, keyboard and persistent Skip');

// Bahaar: run the complete production guard across real progress/failure states.
function bahaarScenario(media) {
  const gate = node(), title = node(), body = node(), html = node(), top = node(), cue = node(), app = node();
  const video = Object.assign(node(), { currentTime: 0, paused: false, ended: false, error: null, pause() { this.paused = true; } }, media);
  const timers = [], skip = node();
  const map = { '#opening-gate': gate, '.hero__video': video, '.hero__content': title, '.scroll-cue': cue, '#top': top, '#app': app };
  run(read('bahaar/src/v5-opening-guard.js'), { document: { body, documentElement: html, querySelector: s => map[s], createElement: () => skip }, setTimeout: (fn, ms) => timers.push({ fn, ms }), MutationObserver: class { observe() {} } });
  gate.events.click(); gate.events.click(); assert.equal(timers.length, 2, 'Repeated tap must not duplicate recovery timers');
  const tick = ms => timers.find(x => x.ms === ms).fn();
  return { video, title, body, skip, tick };
}
let b = bahaarScenario({ currentTime: 2 }); b.tick(2500); assert(!b.title.classList.contains('is-visible'));
b.title.classList.add('is-visible'); b.video.ended = true; b.video.events.ended(); b.tick(8000); assert(b.skip.hidden);
b = bahaarScenario({ paused: true }); b.tick(2500); assert(b.title.classList.contains('is-visible'));
b = bahaarScenario({ error: {} }); b.tick(2500); assert(b.title.classList.contains('is-visible'));
for (const currentTime of [0, 2]) {
  b = bahaarScenario({ currentTime, paused: false }); b.tick(2500); assert(!b.title.classList.contains('is-visible'));
  b.tick(8000); assert(!b.skip.hidden, 'Unresolved play or mid-film stall must expose Skip');
  b.skip.events.click(); assert(b.video.paused && b.skip.hidden && b.title.classList.contains('is-visible'));
}
const bahaar = read('bahaar/src/app-v3.js');
const names = bahaar.match(/\(\)=>\{if\(!video\|\|video\.error\|\|video\.ended\|\|video\.currentTime>=Number\(_0x4354a3\.experience\.namesAppearAtSeconds\|\|0\)\)showNames\(\);\}/)?.[0];
assert(names, 'Missing progress-guarded names callback');
let namesShown = 0; const nv = { currentTime: 2, error: null, ended: false };
const show = run(names, { video: nv, _0x4354a3: { experience: { namesAppearAtSeconds: 3.8 } }, showNames: () => namesShown++ });
show(); assert.equal(namesShown, 0); nv.currentTime = 3.8; show(); assert.equal(namesShown, 1);
console.log('PASS Bahaar progress, no-progress/buffer Skip, failed play/error, repeat taps and names timing');

// Bahaar: execute the real scratch initializer, excluding unrelated anti-debug code.
const scratch = read('bahaar/src/lib/scratch-v5.js');
const sp = scratch.slice(0, scratch.indexOf('const _0xaa6ff5='));
const sd = scratch.slice(scratch.indexOf('function _0x175d('), scratch.indexOf('export function initializeScratchCard'));
const si = scratch.slice(scratch.indexOf('export function initializeScratchCard'), scratch.indexOf('function _0x43658e(')).replace('export function', 'function');
const sa = extractFunction(scratch, '_0x3b10');
const canvas = node(), rect = { width: 300, height: 260, left: 0, top: 0 };
const ctx = new Proxy({ createLinearGradient: () => ({ addColorStop() {} }), getImageData: () => ({ data: new Uint8ClampedArray(48) }) }, { get: (o, k) => o[k] || (() => {}) });
Object.assign(canvas, { getContext: () => ctx, getBoundingClientRect: () => rect });
let reveals = 0;
run(sp + sd + si + sa + ';initializeScratchCard({canvas,container,onReveal});', { canvas, container: { getBoundingClientRect: () => rect }, onReveal: () => reveals++, window: { devicePixelRatio: 1, addEventListener() {} }, document: { documentElement: {} }, getComputedStyle: () => ({ getPropertyValue: () => '' }) });
assert.equal(canvas.attributes.role, 'button'); assert.equal(canvas.attributes.tabindex, '0');
for (const key of ['Enter', ' ']) canvas.events.keydown({ key, preventDefault() {} });
assert.equal(reveals, 1); assert.equal(canvas.style.opacity, '0'); assert.equal(canvas.style.pointerEvents, 'none');
assert.equal(canvas.attributes['aria-disabled'], 'true'); assert.equal(canvas.tabIndex, -1);
for (const event of ['pointerdown', 'pointermove', 'touchstart', 'touchmove']) assert(canvas.events[event]);
assert.match(bahaar, /scratch-v5\.js\?v=5\.2/);
console.log('PASS Bahaar actual scratch Enter/Space, one reveal, disabled completed foil, retained pointer/touch');

// Exotic: execute the actual click/ended/error bindings with its real decoder.
const exotic = read('exotic/assets/js/app.js');
assert(exotic.includes('_0x4bd3d8.load();'));
assert(!exotic.includes("_0x4bd3d8[_0x4fd7be(0x174)]()['then']"), 'Startup must not asynchronously play/pause/reset');
const ep = exotic.slice(0, exotic.indexOf(',(function(){')) + ');';
const ed = extractFunction(exotic, '_0x2294'), ea = extractFunction(exotic, '_0x24be');
const bindingStart = exotic.indexOf("_0x192d35(_0x4fd7be(0x155)+'rd')");
const bindings = exotic.slice(bindingStart, exotic.indexOf('function _0x2a3dca(', bindingStart));
assert(bindingStart >= 0 && bindings.includes("'ended'"));
const finish = extractFunction(exotic, '_0x3a0a33');
assert.match(finish, /if\(_0x2d3b6e\)return;_0x2d3b6e=!!\[\]/);
async function exoticScenario(fail = false) {
  const card = node(), video = node(), audio = node(); let plays = 0, transitions = 0;
  video.paused = false;
  video.play = () => { plays++; return fail ? Promise.reject(Error('play rejected')) : Promise.resolve(); };
  audio.play = () => Promise.resolve();
  // Preserve the actual finish latch; rendering is outside this isolated state check.
  const latch = finish.match(/if\(_0x2d3b6e\)return;_0x2d3b6e=!!\[\]/)[0];
  const context = { _0x192d35: () => card, _0x4bd3d8: video, _0x49a96d: audio, transitioned: () => transitions++ };
  run(ep + ed + ea + `;const _0x4fd7be=_0x2294;let _0x52aff1=false,_0x2d3b6e=false;function _0x3a0a33(){${latch};transitioned();}` + bindings, context);
  video.events.error(); assert.equal(transitions, 0, 'Pre-tap error must not open');
  card.events.click(); card.events.click(); await Promise.resolve(); await Promise.resolve();
  assert.equal(plays, 1, 'Repeated playing tap must not restart film');
  if (!fail) { assert.equal(transitions, 0); video.events.ended(); video.events.error(); video.events.ended(); }
  assert.equal(transitions, 1, 'Ended/error/failed play must transition once');
}
await exoticScenario(); await exoticScenario(true);
assert.match(read('exotic/assets/css/v5-opening-qa.css'), /\.rs-cover-out\s*\{[^}]*transform:none!important[^}]*filter:none!important/);
console.log('PASS Exotic actual tap/ended/error listeners, rejected play, one transition, native load and fade-only exit');
{
  const source=read('exotic/assets/js/v3-atmosphere.js');
  const start=source.indexOf("const cover = document.querySelector('#coverCard');");
  const end=source.indexOf("document.querySelectorAll('.t049 section",start);
  const events={},classes=new Set(),attrs={};let cue=null,clicks=0;
  const card={querySelector:()=>cue,setAttribute:(k,v)=>attrs[k]=v,append:e=>cue=e,
    classList:{add:k=>classes.add(k)},addEventListener:(type,fn,options)=>events[type]={fn,options},
    click:()=>{clicks++;events.click.fn();}};
  run(source.slice(start,end),{document:{querySelector:()=>card,createElement:()=>({setAttribute(){}})}});
  assert.equal(attrs['aria-label'],'Open wedding invitation');
  assert.equal(events.click.options.once,true);
  events.keydown.fn({key:'Enter',preventDefault(){}});
  assert.equal(clicks,1);assert.ok(classes.has('v5-opening-active'));
  events.keydown.fn({key:' ',preventDefault(){}});
  assert.equal(clicks,2);assert.ok(classes.has('v5-opening-active'));
  assert.match(read('exotic/assets/css/v5-opening-qa.css'),/\.v5-opening-active \.v3-opening-cue\s*\{[^}]*opacity:0/);
}
console.log('PASS Exotic opening prompt dismisses on click and keyboard activation');
console.log('All botanical playback checks passed. Browser/device visual QA is recorded in V5_BLOOM_BAHAAR_EXOTIC_QA.md.');
