import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dest = path.join(root, 'public', 'og.png');
fs.mkdirSync(path.join(root, 'public'), { recursive: true });
const read = (name) => {
  const p = path.join(root, 'scripts', name);
  return fs.existsSync(p) ? fs.readFileSync(p, 'utf8').trim() : '';
};
let b64 = read('og.png.b64');
if (!b64) {
  b64 = '';
  for (let i = 0; i < 8; i++) b64 += read('og.png.b64.' + i);
}
if (b64) {
  fs.writeFileSync(dest, Buffer.from(b64, 'base64'));
  console.log('wrote', dest, fs.statSync(dest).size);
} else if (fs.existsSync(dest)) {
  console.log('kept existing', dest, fs.statSync(dest).size);
} else {
  console.warn('no og.png source; public/og.png not written');
}

const heroesDir = path.join(root, 'scripts', 'heroes');
if (fs.existsSync(heroesDir)) {
  const blogDir = path.join(root, 'public', 'blog');
  fs.mkdirSync(blogDir, { recursive: true });
  const names = fs.readdirSync(heroesDir);
  const done = new Set();
  for (const name of names) {
    if (!name.endsWith('.jpg.b64')) continue;
    const outName = name.slice(0, -'.b64'.length);
    const outPath = path.join(blogDir, outName);
    const heroB64 = fs.readFileSync(path.join(heroesDir, name), 'utf8').trim();
    const buf = Buffer.from(heroB64, 'base64');
    if (buf.length < 3 || buf[0] !== 0xff || buf[1] !== 0xd8) {
      console.warn('skip invalid whole sidecar', name);
      continue;
    }
    fs.writeFileSync(outPath, buf);
    console.log('wrote', outPath, fs.statSync(outPath).size);
    done.add(outName);
  }
  const partRe = /^(.+\.jpg)\.b64\.(\d+)$/;
  const groups = new Map();
  for (const name of names) {
    const m = name.match(partRe);
    if (!m) continue;
    const outName = m[1];
    if (done.has(outName)) continue;
    if (!groups.has(outName)) groups.set(outName, []);
    groups.get(outName).push([Number(m[2]), name]);
  }
  for (const [outName, parts] of groups) {
    parts.sort((a, b) => a[0] - b[0]);
    if (!parts.length || parts[0][0] !== 0) continue;
    let consecutive = true;
    for (let i = 0; i < parts.length; i++) {
      if (parts[i][0] !== i) { consecutive = false; break; }
    }
    if (!consecutive) continue;
    let heroB64 = '';
    for (const [, name] of parts) {
      heroB64 += fs.readFileSync(path.join(heroesDir, name), 'utf8').trim();
    }
    const buf = Buffer.from(heroB64, 'base64');
    if (buf.length < 3 || buf[0] !== 0xff || buf[1] !== 0xd8) continue;
    if (buf[buf.length - 2] !== 0xff || buf[buf.length - 1] !== 0xd9) {
      console.warn('skip incomplete JPEG parts', outName, parts.length);
      continue;
    }
    const outPath = path.join(blogDir, outName);
    fs.writeFileSync(outPath, buf);
    console.log('wrote', outPath, fs.statSync(outPath).size);
  }
}
