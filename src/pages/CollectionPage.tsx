import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Lightbox } from '../components/Lightbox';
import { MasonryGallery } from '../components/MasonryGallery';
import { SectionHeading } from '../components/SectionHeading';
import { getCollection } from '../lib/collections';

export function CollectionPage() {
  const { slug } = useParams<{ slug: string }>();
  const collection = slug ? getCollection(slug) : undefined;
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const images = useMemo(() => collection?.images ?? [], [collection]);

  if (!collection) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="font-display text-4xl text-navy">Collection not found</h1>
        <Link to="/gallery" className="mt-6 inline-block text-royal hover:text-gold">
          ← Back to gallery
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <Link to="/gallery" className="text-sm font-medium text-royal hover:text-gold">
        ← All collections
      </Link>

      <div className="mt-6">
        <SectionHeading
          title={collection.title}
          description={
            collection.count
              ? `${collection.count} photographs`
              : 'This collection has no photographs yet.'
          }
        />
      </div>

      {collection.count === 0 ? (
        <div className="mt-16 rounded-2xl border border-dashed border-navy/15 bg-pure p-16 text-center">
          <p className="font-display text-2xl text-navy/80">Empty collection</p>
          <p className="mt-2 text-navy/55">Add images to this folder and rebuild to update the gallery.</p>
        </div>
      ) : (
        <div className="mt-12">
          <MasonryGallery images={images} onSelect={setLightboxIndex} />
        </div>
      )}

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          index={lightboxIndex}
          collectionTitle={collection.title}
          onClose={() => setLightboxIndex(null)}
          onChange={setLightboxIndex}
        />
      )}
    </div>
  );
}
