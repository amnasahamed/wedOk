import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

// Validate local media references in each template's configuration.
const root = path.resolve(import.meta.dirname, '..');
const names = ['amber', 'bahaar', 'bloom', 'exotic', 'mithril', 'olive', 'ruby', 'zareen'];
let failures = 0;
for (const name of names) {
  const base = path.join(root, name);
  const file = ['assets/js/config.js', 'src/config.js'].map(p => path.join(base, p)).find(p => fs.existsSync(p));
  if (!file) continue;
  const sandbox = {window: {}};
  vm.createContext(sandbox);
  try {
    const source = fs.readFileSync(file, 'utf8').replace(/export const (\w+)\s*=/g, 'window.$1 =');
    vm.runInContext(source, sandbox, {timeout: 1000});
  } catch (error) {
    console.log(`${name}: configuration could not be evaluated: ${error.message}`);
    failures++;
    continue;
  }
  const refs = new Set();
  function walk(value) {
    if (typeof value === 'string' && /\.(webp|png|jpe?g|avif|mp4|webm|mp3|wav)(?:[?#].*)?$/i.test(value) && !/^(https?:|data:|blob:)/.test(value)) refs.add(value);
    else if (value && typeof value === 'object') Object.values(value).forEach(walk);
  }
  walk(sandbox.window);
  const missing = [...refs].filter(ref => !fs.existsSync(path.resolve(base, ref.split(/[?#]/)[0])));
  failures += missing.length;
  console.log(`${name}: ${refs.size} configured local media references; ${missing.length} missing`);
  missing.forEach(ref => console.log(`  MISSING ${ref}`));
  const staticFiles = [path.join(base, 'index.html')];
  const cssDir = path.join(base, 'assets/css');
  if (fs.existsSync(cssDir)) staticFiles.push(...fs.readdirSync(cssDir).filter(p => p.endsWith('.css')).map(p => path.join(cssDir, p)));
  for (const source of staticFiles) {
    const text = fs.readFileSync(source, 'utf8');
    const pattern = source.endsWith('.css') ? /url\(\s*["']?([^\s"')]+)["']?\s*\)/g : /(?:src|href|poster)=["']([^"']+)["']/g;
    for (const match of text.matchAll(pattern)) {
      const ref = match[1];
      if (/^(?:[a-z]+:|\/\/|#|\/)/i.test(ref)) continue;
      const clean = decodeURIComponent(ref.split(/[?#]/)[0]);
      if (clean.startsWith('#')) continue;
      if (clean && !fs.existsSync(path.resolve(path.dirname(source), clean))) {
        console.log(`  MISSING STATIC ${path.relative(root, source)} → ${ref}`);
        failures++;
      }
    }
  }
}
process.exitCode = failures ? 1 : 0;
