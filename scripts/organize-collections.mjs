import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const collectionsRoot = path.join(root, 'public', 'collections');

const slugify = (name) =>
  name
    .toLowerCase()
    .trim()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const titleCase = (name) => {
  const trimmed = name.trim();
  if (trimmed === trimmed.toUpperCase() && trimmed.length > 3) {
    return trimmed
      .split(/\s+/)
      .map((w) => w.charAt(0) + w.slice(1).toLowerCase())
      .join(' ');
  }
  return trimmed
    .split(/\s+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(' ');
};

if (!fs.existsSync(collectionsRoot)) {
  fs.mkdirSync(collectionsRoot, { recursive: true });
}

const IMAGE_EXT = new Set(['.jpg', '.jpeg', '.png', '.webp']);

const entries = fs.readdirSync(root, { withFileTypes: true });
const moved = [];

for (const entry of entries) {
  if (!entry.isDirectory()) continue;
  const name = entry.name;
  if (['node_modules', 'public', 'src', 'scripts', 'dist', '.git'].includes(name)) continue;

  const slug = slugify(name);
  const dest = path.join(collectionsRoot, slug);
  const src = path.join(root, name);

  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  for (const file of fs.readdirSync(src)) {
    const ext = path.extname(file).toLowerCase();
    if (!IMAGE_EXT.has(ext)) continue;

    const baseWithoutDup = file.replace(/ \(\d+\)(?=\.[^.]+$)/, '');
    const destPath = path.join(dest, baseWithoutDup);
    const srcPath = path.join(src, file);

    if (fs.existsSync(destPath)) {
      if (fs.existsSync(srcPath)) fs.unlinkSync(srcPath);
      continue;
    }
    fs.renameSync(srcPath, destPath);
  }

  const remaining = fs.readdirSync(src).filter((f) => IMAGE_EXT.has(path.extname(f).toLowerCase()));
  if (remaining.length === 0) {
    fs.rmdirSync(src);
  }

  moved.push({ from: name, slug, title: titleCase(name) });
}

const manifestPath = path.join(root, 'scripts', 'collection-sources.json');
if (moved.length) {
  const existing = fs.existsSync(manifestPath)
    ? JSON.parse(fs.readFileSync(manifestPath, 'utf8'))
    : [];
  const bySlug = new Map(existing.map((row) => [row.slug, row]));
  for (const row of moved) bySlug.set(row.slug, row);
  fs.writeFileSync(manifestPath, JSON.stringify([...bySlug.values()], null, 2), 'utf8');
}
console.log(`Organized ${moved.length} collections into public/collections/`);
