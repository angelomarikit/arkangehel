import raw from '../data/collections.json';
import type { Collection, CollectionsData, GalleryImage } from '../types/gallery';

export const galleryData = raw as CollectionsData;

export const collections: Collection[] = galleryData.collections;

export const siteMeta = galleryData.siteMeta;

export function getCollection(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}

export function ministryCollections(): Collection[] {
  const keys = ['herbal', 'kabataan', 'mediums', 'mission', 'gampanin', 'holyweek', 'christmas'];
  return collections.filter((c) => keys.some((k) => c.slug.includes(k)));
}

export function pickHighlightPhotos(limit = 9): GalleryImage[] {
  const chosen: GalleryImage[] = [];
  const seen = new Set<string>();

  for (const slug of siteMeta.highlightSlugs) {
    const col = getCollection(slug);
    if (!col) continue;
    for (const img of col.images.slice(0, 2)) {
      if (seen.has(img.src)) continue;
      seen.add(img.src);
      chosen.push(img);
      if (chosen.length >= limit) return chosen;
    }
  }

  for (const col of collections) {
    for (const img of col.images) {
      if (seen.has(img.src)) continue;
      seen.add(img.src);
      chosen.push(img);
      if (chosen.length >= limit) return chosen;
    }
  }

  return chosen;
}
