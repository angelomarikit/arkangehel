import { Link } from 'react-router-dom';
import { CollectionCard } from '../components/CollectionCard';
import { InfoCards } from '../components/InfoCards';
import { LazyImage } from '../components/LazyImage';
import { PageBanner } from '../components/PageBanner';
import { PageStats } from '../components/PageStats';
import { SectionHeading } from '../components/SectionHeading';
import { VisionMissionSection } from '../components/VisionMissionSection';
import { ORGANIZATION_TAGLINE } from '../content/visionMission';
import { liturgicalCollections, missionCollections } from '../lib/ministries';
import { siteMeta } from '../lib/collections';
import { siteStats } from '../lib/pageStats';

export function MissionsPage() {
  const missions = missionCollections().filter((c) => c.count > 0);
  const liturgical = liturgicalCollections().filter((c) => c.count > 0);
  const stats = siteStats();
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
  const heroStrip = missions.flatMap((c) => c.images.filter((i) => i.orientation === 'landscape').slice(0, 1)).slice(0, 3);

  return (
    <>
      <PageBanner
        title="Missions & celebrations"
        subtitle={`${ORGANIZATION_TAGLINE} — mission albums, banner outreaches, liturgical seasons, and celebrations.`}
        image={bannerImg}
      />
      <PageStats
        stats={[
          { value: String(missions.length), label: 'Mission albums' },
          { value: String(liturgical.length), label: 'Seasonal sets' },
          { value: String(stats.missions), label: 'Mission folders' },
          { value: String(stats.photos), label: 'Archive photos' },
        ]}
      />

      <div className="mx-auto max-w-6xl space-y-16 px-4 py-14 sm:px-6 sm:py-20">
        <VisionMissionSection compact showTagline={false} />

        <div>
          <SectionHeading
            eyebrow="Mission"
            title="On the road & in fellowship"
            description="Folder names such as Banner Mission Lupang Banal, Centro Patos Mission, and Holyweek Mission 2026 shape these galleries."
          />
          <div className="mt-10">
            <InfoCards
              items={[
                {
                  title: 'Banner & center missions',
                  body: 'Large landscape sets suited for hero banners and mission recap albums.',
                },
                {
                  title: 'Anniversaries & thanksgiving',
                  body: 'Celebrations including Power of Christ 9th Anniversary and Thanks Giving 2026.',
                },
                {
                  title: 'Seasonal observances',
                  body: 'Holy Week, Good Friday, 7 Last Words, and Christmas Spiritual Celebration collections.',
                },
              ]}
            />
          </div>
          {heroStrip.length > 0 && (
            <div className="mt-12 grid gap-3 md:grid-cols-3">
              {heroStrip.map((img) => (
                <div key={img.src} className="overflow-hidden rounded-xl shadow-lg ring-1 ring-navy/5">
                  <LazyImage src={img.medium} thumb={img.thumb} alt="" className="aspect-[16/10]" />
                </div>
              ))}
            </div>
          )}
        </div>

        <section>
          <SectionHeading
            eyebrow="Collections"
            title="Outreach & mission albums"
            description="Open any album for fullscreen navigation and progressive loading."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {missions.map((c, i) => (
              <CollectionCard key={c.slug} collection={c} index={i} />
            ))}
          </div>
          {!missions.length && (
            <p className="mt-8 text-center text-navy/60">No mission collections found in the archive index.</p>
          )}
        </section>

        {liturgical.length > 0 && (
          <section>
            <SectionHeading
              eyebrow="Liturgical season"
              title="Holy week & feast day albums"
              description="Seasonal folders preserved as separate galleries."
            />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {liturgical.map((c, i) => (
                <CollectionCard key={c.slug} collection={c} index={i} />
              ))}
            </div>
          </section>
        )}

        <p className="text-center text-sm text-navy/70">
          Youth and herbal outreach albums live under{' '}
          <Link to="/healing" className="font-semibold text-royal hover:text-gold">
            Healing
          </Link>
          .
        </p>
      </div>
    </>
  );
}
