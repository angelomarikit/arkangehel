import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OG_W = 1200;
const OG_H = 630;

const logoSources = [
  path.join(root, 'src', 'assets', 'logo.png'),
  path.join(root, 'src', 'assets', 'logo-source.jpg'),
  path.join(root, 'logo.jpg'),
  path.join(root, 'src', 'assets', 'logo.jpg'),
];

async function logoWithAlpha(inputPath) {
  const { data, info } = await sharp(inputPath).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const pixels = Buffer.from(data);

  const isBackground = (r, g, b) => {
    const l = 0.299 * r + 0.587 * g + 0.114 * b;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const chroma = max - min;
    if (l >= 248) return true;
    if (l >= 222 && chroma < 42) return true;
    if (min >= 210 && max >= 228 && chroma < 30) return true;
    return false;
  };

  for (let i = 0; i < pixels.length; i += channels) {
    const r = pixels[i];
    const g = pixels[i + 1];
    const b = pixels[i + 2];
    if (isBackground(r, g, b)) pixels[i + 3] = 0;
  }

  return sharp(pixels, { raw: { width, height, channels: 4 } }).png().toBuffer();
}

const logoInput = logoSources.find((p) => fs.existsSync(p));
if (!logoInput) {
  console.error('No logo file found for OG image generation.');
  process.exit(1);
}

const logoPng =
  logoInput.endsWith('.png') ? await sharp(logoInput).png().toBuffer() : await logoWithAlpha(logoInput);

const logoSized = await sharp(logoPng)
  .resize({ height: 460, fit: 'inside', withoutEnlargement: false })
  .toBuffer();

const meta = await sharp(logoSized).metadata();
const logoW = meta.width ?? 400;
const logoH = meta.height ?? 400;
const left = Math.round((OG_W - logoW) / 2);
const top = Math.round((OG_H - logoH) / 2 - 12);

const backgroundSvg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${OG_W}" height="${OG_H}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#142C47"/>
      <stop offset="55%" stop-color="#174D83"/>
      <stop offset="100%" stop-color="#142C47"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="42%" r="55%">
      <stop offset="0%" stop-color="#B58A35" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#B58A35" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${OG_W}" height="${OG_H}" fill="url(#bg)"/>
  <rect width="${OG_W}" height="${OG_H}" fill="url(#glow)"/>
  <text x="600" y="580" text-anchor="middle" fill="#FAF8F2" fill-opacity="0.85"
    font-family="Georgia, serif" font-size="24" letter-spacing="0.1em">CENTRO TINIG NG ARKANGHEL INC</text>
</svg>`);

const outJpg = path.join(root, 'public', 'og-image.jpg');
const outPng = path.join(root, 'public', 'og-image.png');

await sharp(backgroundSvg)
  .composite([{ input: logoSized, left, top }])
  .jpeg({ quality: 90, mozjpeg: true })
  .toFile(outJpg);

await sharp(backgroundSvg)
  .composite([{ input: logoSized, left, top }])
  .png({ compressionLevel: 9 })
  .toFile(outPng);

console.log('Wrote public/og-image.jpg and public/og-image.png (1200×630)');
