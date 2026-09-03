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
