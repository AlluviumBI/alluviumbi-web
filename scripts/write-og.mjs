import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const b64 = fs.readFileSync(path.join(root, 'scripts', 'og.png.b64'), 'utf8').trim();
const dest = path.join(root, 'public', 'og.png');
fs.mkdirSync(path.join(root, 'public'), { recursive: true });
fs.writeFileSync(dest, Buffer.from(b64, 'base64'));
console.log('wrote', dest, fs.statSync(dest).size);
