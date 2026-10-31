import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const collectionsRoot = path.join(root, 'public', 'collections');
const thumbsRoot = path.join(root, 'public', 'optimized');
const outFile = path.join(root, 'src', 'data', 'collections.json');

const sourcesPath = path.join(root, 'scripts', 'collection-sources.json');
const titleBySlug = new Map();
if (fs.existsSync(sourcesPath)) {
  for (const row of JSON.parse(fs.readFileSync(sourcesPath, 'utf8'))) {
    titleBySlug.set(row.slug, row.title);
  }
}

const titleFromSlug = (slug) =>
  titleBySlug.get(slug) ??
  slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

const IMAGE_EXT = new Set(['.jpg', '.jpeg', '.png', '.webp']);

const publicSrc = (slug, file) =>
  `/collections/${slug}/${file.split(/[/\\]/).map(encodeURIComponent).join('/')}`;

function pickCover(images) {
  const landscape = images.filter((i) => i.width > i.height * 1.05);
  const pool = landscape.length ? landscape : images;
  return pool.sort((a, b) => b.width * b.height - a.width * a.height)[0];
}

async function ensureThumb(relPath, width) {
  const src = path.join(root, 'public', relPath.replace(/^\//, ''));
  const base = relPath.replace(/^\/collections\//, '').replace(/\.[^.]+$/, '');
  const destRel = `/optimized/${base}-w${width}.webp`;
  const dest = path.join(root, 'public', destRel.replace(/^\//, ''));

  fs.mkdirSync(path.dirname(dest), { recursive: true });
  if (!fs.existsSync(dest)) {
    await sharp(src)
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(dest);
  }
  return destRel;
}

const slugs = fs.readdirSync(collectionsRoot, { withFileTypes: true }).filter((d) => d.isDirectory());

const collections = [];
let heroCandidate = null;

for (const dir of slugs) {
  const slug = dir.name;
  const folder = path.join(collectionsRoot, slug);
  const files = fs
    .readdirSync(folder)
    .filter((f) => IMAGE_EXT.has(path.extname(f).toLowerCase()))
    .sort((a, b) => a.localeCompare(b));

  const images = [];
  for (const file of files) {
    const full = path.join(folder, file);
    const meta = await sharp(full).metadata();
    const width = meta.width ?? 0;
    const height = meta.height ?? 0;
    const stat = fs.statSync(full);

    const entry = {
      file,
      src: publicSrc(slug, file),
      width,
      height,
      orientation: width > height ? 'landscape' : width < height ? 'portrait' : 'square',
      bytes: stat.size,
    };

    try {
      entry.thumb = await ensureThumb(entry.src, 480);
      entry.medium = await ensureThumb(entry.src, 1200);
    } catch (e) {
      console.warn('Thumb skip:', entry.src, e.message);
      entry.thumb = entry.src;
      entry.medium = entry.src;
    }

    images.push(entry);
  }

  if (!images.length) {
    collections.push({
      slug,
      title: titleFromSlug(slug),
      count: 0,
      cover: null,
      images: [],
    });
    continue;
  }

  const cover = pickCover(images);
  const col = {
    slug,
    title: titleFromSlug(slug),
    count: images.length,
    cover: {
      src: cover.src,
      thumb: cover.thumb,
      width: cover.width,
      height: cover.height,
    },
    images,
  };
  collections.push(col);

  for (const img of images) {
    if (img.orientation !== 'landscape' || img.width < 1200) continue;
    const score = img.width * img.height;
    if (!heroCandidate || score > heroCandidate.score) {
      heroCandidate = { ...img, score, collectionSlug: slug };
    }
  }
}

collections.sort((a, b) => a.title.localeCompare(b.title));

const banner = collections.find((c) => c.slug.includes('banner'));
const hero = banner?.images.find((i) => i.orientation === 'landscape' && i.width >= 1536) ?? heroCandidate;

const siteMeta = {
  hero: hero
    ? {
        src: hero.src,
        medium: hero.medium,
        thumb: hero.thumb,
        width: hero.width,
        height: hero.height,
        collectionSlug: banner?.slug ?? hero.collectionSlug,
      }
    : null,
  aboutImage: collections.find((c) => c.slug.includes('thanks-giving'))?.images[0] ??
    collections.find((c) => c.count > 0)?.images[0] ??
    null,
  highlightSlugs: [
    'banner-mission-lupang-banal',
    'christmas-spiritual-celebration',
    'holyweek-mission-2026',
    'holyweek-mission',
    'canada-mission',
    'house-and-car-blessings',
    'ctna-center',
    'power-of-christ-9th-anniversary',
    'kabataan-lingkod-ng-diyos',
    'centro-patos-mission',
  ].filter((s) => collections.some((c) => c.slug === s)),
  generatedAt: new Date().toISOString(),
};

fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(
  outFile,
  JSON.stringify({ collections, siteMeta }, null, 2),
  'utf8',
);
console.log(`Wrote ${collections.length} collections (${collections.reduce((n, c) => n + c.count, 0)} photos)`);
