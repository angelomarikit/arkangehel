export type PhotoOrientation = 'landscape' | 'portrait' | 'square';

export interface GalleryImage {
  file: string;
  src: string;
  thumb: string;
  medium: string;
  width: number;
  height: number;
  orientation: PhotoOrientation;
  bytes: number;
}

export interface CollectionCover {
  src: string;
  thumb: string;
  width: number;
  height: number;
}

export interface Collection {
  slug: string;
  title: string;
  count: number;
  cover: CollectionCover | null;
  images: GalleryImage[];
}

export interface SiteMeta {
  hero: {
    src: string;
    medium: string;
    thumb: string;
    width: number;
    height: number;
    collectionSlug: string;
  } | null;
  aboutImage: GalleryImage | null;
  highlightSlugs: string[];
  generatedAt: string;
}

export interface CollectionsData {
  collections: Collection[];
  siteMeta: SiteMeta;
}
