import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dest = path.join(root, 'public', 'og.png');
const b64path = path.join(root, 'scripts', 'og.png.b64');
fs.mkdirSync(path.join(root, 'public'), { recursive: true });
if (fs.existsSync(b64path)) {
  const b64 = fs.readFileSync(b64path, 'utf8').trim();
  fs.writeFileSync(dest, Buffer.from(b64, 'base64'));
  console.log('wrote', dest, fs.statSync(dest).size);
} else if (fs.existsSync(dest)) {
  console.log('kept existing', dest, fs.statSync(dest).size);
} else {
  console.warn('scripts/og.png.b64 missing; public/og.png not written');
}
