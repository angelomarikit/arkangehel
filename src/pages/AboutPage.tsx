import { Link } from 'react-router-dom';
import { ChurchLogo } from '../components/ChurchLogo';
import { InfoCards } from '../components/InfoCards';
import { LazyImage } from '../components/LazyImage';
import { PageBanner } from '../components/PageBanner';
import { PageStats } from '../components/PageStats';
import { SectionHeading } from '../components/SectionHeading';
import { collections, siteMeta } from '../lib/collections';
import { SITE_NAME } from '../lib/brand';
import { siteStats } from '../lib/pageStats';

export function AboutPage() {
  const aboutImg = siteMeta.aboutImage;
  const stats = siteStats();

  return (
    <>
      <PageBanner
        title="About us"
        subtitle="Faith, fellowship, and service — shared honestly through our own photographs and archives."
        image={aboutImg}
      />
      <PageStats
        stats={[
          { value: String(stats.albums), label: 'Albums' },
          { value: String(stats.photos), label: 'Photographs' },
          { value: String(stats.missions), label: 'Mission sets' },
          { value: String(stats.outreach), label: 'Outreach sets' },
        ]}
      />

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="flex flex-col items-center gap-6 rounded-2xl border border-gold/25 bg-gradient-to-br from-pure to-ivory p-8 text-center sm:p-10">
          <ChurchLogo size="feature" showText={false} />
          <p className="max-w-2xl text-lg leading-relaxed text-navy/80">
            {SITE_NAME} welcomes you online with the same care we bring to mission, prayer, and community
            life. Every gallery image comes from folders our organization supplied — never stock or AI
            placeholders.
          </p>
        </div>

        <div className="mt-16 grid items-start gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Our story"
              title="Who we are"
              description={`${collections.length} photo albums document missions, liturgical seasons, youth programs, herbal outreach, and fellowship.`}
            />
            <p className="text-lg leading-relaxed text-navy/75">
              Collection titles follow folder names from our shared archives. We describe albums by those
              names and do not assign specific events to individual photos unless the folder name implies it.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                to="/gallery"
                className="rounded-full bg-royal px-5 py-2.5 text-sm font-semibold text-ivory hover:bg-navy"
              >
                Browse gallery
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-navy/15 px-5 py-2.5 text-sm font-semibold text-navy hover:border-gold"
              >
                Contact us
              </Link>
            </div>
          </div>
          {aboutImg ? (
            <LazyImage
              src={aboutImg.medium}
              thumb={aboutImg.thumb}
              alt=""
              className="aspect-[4/5] rounded-2xl shadow-xl ring-1 ring-navy/10"
            />
          ) : (
            <div className="flex aspect-[4/5] items-center justify-center rounded-2xl border border-dashed border-gold/40 bg-pure p-8">
              <p className="font-display text-2xl text-navy">Peace · Service · Unity</p>
            </div>
          )}
        </div>

        <div className="mt-20">
          <SectionHeading eyebrow="Values" title="What guides our community" />
          <div className="mt-10">
            <InfoCards
              items={[
                {
                  title: 'Authentic witness',
                  body: 'We show real people and real gatherings from our own cameras and albums.',
                },
                {
                  title: 'Respectful presentation',
                  body: 'Portraits and landscapes keep natural proportions — faces and subjects are not cropped harshly.',
                },
                {
                  title: 'Mission & service',
                  body: 'Outreach, youth, herbal medicine, and mission folders reflect hands-on work in the community.',
                },
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
}
