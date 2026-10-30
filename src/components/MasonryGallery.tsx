import type { GalleryImage } from '../types/gallery';
import { LazyImage } from './LazyImage';

type MasonryGalleryProps = {
  images: GalleryImage[];
  onSelect: (index: number) => void;
};

export function MasonryGallery({ images, onSelect }: MasonryGalleryProps) {
  return (
    <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
      {images.map((img, i) => {
        const tall = img.orientation === 'portrait';
        return (
          <button
            key={img.src}
            type="button"
            className={`group mb-4 block w-full break-inside-avoid overflow-hidden rounded-lg bg-navy/5 shadow-sm ring-1 ring-navy/5 transition hover:-translate-y-0.5 hover:shadow-lg hover:ring-gold/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
              tall ? '' : ''
            }`}
            onClick={() => onSelect(i)}
          >
            <LazyImage
              src={img.medium}
              thumb={img.thumb}
              alt=""
              className={tall ? 'aspect-[3/4]' : img.orientation === 'landscape' ? 'aspect-[4/3]' : 'aspect-square'}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <span className="sr-only">Open photograph {i + 1}</span>
          </button>
        );
      })}
    </div>
  );
}
