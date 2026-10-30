import { PageBanner } from '../components/PageBanner';
import { CollectionCard } from '../components/CollectionCard';
import { SectionHeading } from '../components/SectionHeading';
import { collections, siteMeta } from '../lib/collections';

export function GalleryIndexPage() {
  const total = collections.reduce((n, c) => n + c.count, 0);
  const bannerImg = siteMeta.hero
    ? {
        medium: siteMeta.hero.medium,
        thumb: siteMeta.hero.thumb,
        src: siteMeta.hero.src,
        file: '',
        width: siteMeta.hero.width,
        height: siteMeta.hero.height,
        orientation: 'landscape' as const,
        bytes: 0,
      }
    : null;

  return (
    <>
      <PageBanner
        title="Photo gallery"
        subtitle={`${collections.length} collections · ${total} photographs · masonry grids and fullscreen lightbox`}
        image={bannerImg}
      />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeading
          eyebrow="Collections"
          title="Every folder, one album"
          description="Select a collection to open its dedicated page with swipe-friendly navigation."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((c, i) => (
            <CollectionCard key={c.slug} collection={c} index={i} />
          ))}
        </div>
      </div>
    </>
  );
}
