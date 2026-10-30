import { Link } from 'react-router-dom';
import { CollectionCard } from '../components/CollectionCard';
import { InfoCards } from '../components/InfoCards';
import { LazyImage } from '../components/LazyImage';
import { PageBanner } from '../components/PageBanner';
import { PageStats } from '../components/PageStats';
import { SectionHeading } from '../components/SectionHeading';
import { outreachCollections } from '../lib/ministries';
import { siteMeta } from '../lib/collections';
import { siteStats } from '../lib/pageStats';

export function MinistriesPage() {
  const items = outreachCollections().filter((c) => c.count > 0);
  const stats = siteStats();
  const preview = items.flatMap((c) => c.images.slice(0, 1)).slice(0, 4);

  return (
    <>
      <PageBanner
        title="Ministries & outreach"
        subtitle="Youth, herbal medicine, mediums of God, and related albums — named from our actual photo folders."
        image={siteMeta.aboutImage}
      />
      <PageStats
        stats={[
          { value: String(items.length), label: 'Ministry albums' },
          { value: String(stats.outreach), label: 'Outreach sets' },
          { value: String(stats.photos), label: 'Total photos' },
          { value: 'Live', label: 'From archives' },
        ]}
      />

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <SectionHeading
          eyebrow="Serve"
          title="Programs in our photographs"
          description="Each card links to a full collection with masonry layout, lightbox viewing, and mobile swipe."
        />
        <div className="mt-10">
          <InfoCards
            items={[
              {
                title: 'Kabataan Lingkod ng Diyos',
                body: 'Youth service and formation — explore the dedicated album for every photograph.',
              },
              {
                title: 'Herbal medicine',
                body: 'Outreach albums document herbal medicine activities from our community folders.',
              },
              {
                title: 'Mediums of God',
                body: 'A distinct collection from our archives, presented with the same respectful gallery treatment.',
              },
            ]}
          />
        </div>

        {preview.length > 0 && (
          <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4">
            {preview.map((img) => (
              <div key={img.src} className="overflow-hidden rounded-lg shadow-md ring-1 ring-navy/5">
                <LazyImage src={img.medium} thumb={img.thumb} alt="" className="aspect-[4/3]" />
              </div>
            ))}
          </div>
        )}

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((c, i) => (
            <CollectionCard key={c.slug} collection={c} index={i} />
          ))}
        </div>
        {!items.length && (
          <p className="mt-8 rounded-xl border border-dashed border-navy/15 bg-pure p-10 text-center text-navy/60">
            No ministry collections indexed yet. Add folders and run <code className="text-sm">npm run sync</code>.
          </p>
        )}

        <p className="mt-14 text-center text-sm text-navy/70">
          Liturgical and banner missions are on the{' '}
          <Link to="/missions" className="font-semibold text-royal hover:text-gold">
            Missions & celebrations
          </Link>{' '}
          page.
        </p>
      </div>
    </>
  );
}
