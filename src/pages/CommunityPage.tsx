import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChurchLogo } from '../components/ChurchLogo';
import { InfoCards } from '../components/InfoCards';
import { LazyImage } from '../components/LazyImage';
import { PageBanner } from '../components/PageBanner';
import { PageStats } from '../components/PageStats';
import { SectionHeading } from '../components/SectionHeading';
import { pickHighlightPhotos, siteMeta } from '../lib/collections';
import { siteStats } from '../lib/pageStats';

export function CommunityPage() {
  const highlights = pickHighlightPhotos(12);
  const stats = siteStats();

  return (
    <>
      <PageBanner
        title="Our community"
        subtitle="Portrait and landscape moments from across every album — one family in faith and service."
        image={siteMeta.aboutImage}
      />
      <PageStats
        stats={[
          { value: String(stats.albums), label: 'Albums' },
          { value: String(highlights.length), label: 'Highlights' },
          { value: String(stats.photos), label: 'Photographs' },
          { value: '100%', label: 'Our archives' },
        ]}
      />

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="theme-section-deep flex flex-col items-center gap-6 rounded-2xl px-6 py-12 text-center sm:px-12">
          <ChurchLogo variant="light" size="feature" showText={false} />
          <p className="max-w-2xl text-lg leading-relaxed text-ivory/85">
            These photographs are drawn from missions, celebrations, and weekly fellowship — presented in an
            asymmetric grid that respects each image&apos;s orientation.
          </p>
          <Link
            to="/gallery"
            className="rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-navy hover:bg-gold/90"
          >
            Open full gallery
          </Link>
        </div>

        <div className="mt-16">
          <InfoCards
            items={[
              {
                title: 'Fellowship',
                body: 'Gatherings and shared meals appear throughout thanksgiving and mission albums.',
              },
              {
                title: 'Intergenerational',
                body: 'Youth, families, and elders appear across portrait and landscape frames alike.',
              },
              {
                title: 'Documented locally',
                body: 'Every file lives in our project collections — optimized copies never replace originals.',
              },
            ]}
          />
        </div>

        <div className="mt-20">
          <SectionHeading
            eyebrow="Highlights"
            title="Life together in photographs"
            description="Tap any collection in the gallery for lightbox viewing with swipe and keyboard controls."
            align="center"
          />
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4 auto-rows-[150px] md:auto-rows-[190px]">
            {highlights.map((img, i) => {
              const spans =
                i % 7 === 0
                  ? 'md:col-span-2 md:row-span-2'
                  : i % 5 === 0
                    ? 'md:row-span-2'
                    : '';
              return (
                <motion.div
                  key={img.src}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  className={`overflow-hidden rounded-lg bg-navy/10 shadow-md ring-1 ring-navy/5 ${spans}`}
                >
                  <LazyImage src={img.medium} thumb={img.thumb} alt="" className="h-full min-h-[150px]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
