import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sources = [
  path.join(root, 'src', 'assets', 'logo-source.jpg'),
  path.join(root, 'logo.jpg'),
  path.join(root, 'src', 'assets', 'logo.jpg'),
];
const input = sources.find((p) => fs.existsSync(p));
const output = path.join(root, 'src', 'assets', 'logo.png');

if (!input) {
  console.error('No logo.jpg found at project root or src/assets/');
  process.exit(1);
}

const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;
const pixels = Buffer.from(data);

const isBackground = (r, g, b) => {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  if (min >= 210 && max >= 228 && max - min < 30) return true;
  if (r >= 245 && g >= 245 && b >= 245) return true;
  return false;
};

for (let i = 0; i < pixels.length; i += channels) {
  const r = pixels[i];
  const g = pixels[i + 1];
  const b = pixels[i + 2];
  if (isBackground(r, g, b)) {
    pixels[i + 3] = 0;
  }
}

await sharp(pixels, { raw: { width, height, channels: 4 } }).png({ compressionLevel: 9 }).toFile(output);
console.log(`Processed ${path.relative(root, input)} → src/assets/logo.png`);
