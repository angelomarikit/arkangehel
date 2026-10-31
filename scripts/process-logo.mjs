import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const candidatePaths = [
  path.join(root, 'logo.jpg'),
  path.join(root, 'src', 'assets', 'logo.jpg'),
  path.join(root, 'src', 'assets', 'logo-source.jpg'),
];
const output = path.join(root, 'src', 'assets', 'logo.png');
const outputPublic = path.join(root, 'public', 'logo.png');

/** Flat white / off-white JPEG backdrop — only pixels connected to the image edge. */
function isBackground(r, g, b) {
  const l = 0.299 * r + 0.587 * g + 0.114 * b;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const chroma = max - min;
  if (l >= 248) return true;
  if (l >= 222 && chroma < 42) return true;
  if (min >= 210 && max >= 228 && chroma < 30) return true;
  return false;
}

function removeEdgeConnectedBackground(pixels, width, height, channels) {
  const size = width * height;
  const bg = new Uint8Array(size);
  const queue = [];

  const idx = (x, y) => y * width + x;
  const pushIfBg = (x, y) => {
    const i = idx(x, y);
    if (bg[i]) return;
    const p = i * channels;
    if (!isBackground(pixels[p], pixels[p + 1], pixels[p + 2])) return;
    bg[i] = 1;
    queue.push(i);
  };

  for (let x = 0; x < width; x++) {
    pushIfBg(x, 0);
    pushIfBg(x, height - 1);
  }
  for (let y = 0; y < height; y++) {
    pushIfBg(0, y);
    pushIfBg(width - 1, y);
  }

  while (queue.length) {
    const i = queue.pop();
    const x = i % width;
    const y = (i - x) / width;
    if (x > 0) pushIfBg(x - 1, y);
    if (x < width - 1) pushIfBg(x + 1, y);
    if (y > 0) pushIfBg(x, y - 1);
    if (y < height - 1) pushIfBg(x, y + 1);
  }

  for (let i = 0; i < size; i++) {
    if (bg[i]) pixels[i * channels + 3] = 0;
  }
}

async function logoWithAlpha(inputPath) {
  const { data, info } = await sharp(inputPath).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const pixels = Buffer.from(data);

  removeEdgeConnectedBackground(pixels, width, height, channels);

  return sharp(pixels, { raw: { width, height, channels: 4 } });
}

const existing = candidatePaths.filter((p) => fs.existsSync(p));
if (!existing.length) {
  console.error('No logo.jpg found at project root or src/assets/');
  process.exit(1);
}

let input = existing[0];
let bestWidth = 0;
for (const p of existing) {
  const meta = await sharp(p).metadata();
  const w = meta.width ?? 0;
  if (w > bestWidth) {
    bestWidth = w;
    input = p;
  }
}

const pngOptions = { compressionLevel: 6, effort: 10 };
const processed = await logoWithAlpha(input);

await processed.clone().png(pngOptions).toFile(output);
await processed.clone().png(pngOptions).toFile(outputPublic);

const meta = await sharp(output).metadata();
console.log(
  `Processed ${path.relative(root, input)} → logo.png (${meta.width}×${meta.height}, transparent background)`,
);
