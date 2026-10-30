import { Link } from 'react-router-dom';
import { ChurchLogo } from '../components/ChurchLogo';
import { LazyImage } from '../components/LazyImage';
import { PageBanner } from '../components/PageBanner';
import { PageStats } from '../components/PageStats';
import { SectionHeading } from '../components/SectionHeading';
import { ContactDetails } from '../components/ContactDetails';
import { VisionMissionSection } from '../components/VisionMissionSection';
import { contact } from '../content/contact';
import { ORGANIZATION_TAGLINE } from '../content/visionMission';
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
        subtitle={`${ORGANIZATION_TAGLINE} — a compassionate center of holistic healing, prayer, and wellness in Christ.`}
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
        <div className="theme-panel-light flex flex-col items-center gap-6 rounded-2xl p-8 text-center sm:p-10">
          <ChurchLogo size="feature" showText={false} />
          <p className="font-display text-2xl text-navy sm:text-3xl">{ORGANIZATION_TAGLINE}</p>
          <p className="max-w-2xl text-lg leading-relaxed text-navy/80">
            {SITE_NAME} welcomes you in faith, service, and love — offering prayer, spiritual support, and
            holistic care while giving all glory to God, the true source of healing.
          </p>
        </div>

        <VisionMissionSection />

        <div className="mt-20 rounded-2xl border border-navy/10 bg-pure p-8 shadow-sm sm:p-10">
          <SectionHeading eyebrow="About us" title="Visit & contact" />
          <div className="mt-8">
            <ContactDetails variant="dark" />
          </div>
          <p className="mt-6 text-sm text-navy/60">
            Registered as {contact.legalName}. Details also appear in the site footer on every page.
          </p>
        </div>

        <div className="mt-20 grid items-start gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Our story"
              title="Community in photographs"
              description={`${collections.length} photo albums document missions, liturgical seasons, youth programs, herbal outreach, and fellowship.`}
            />
            <p className="text-lg leading-relaxed text-navy/75">
              Gallery titles follow folder names from our shared archives. We describe albums by those names
              and do not assign specific events to individual photos unless the folder name implies it.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                to="/healing"
                className="rounded-full bg-royal px-5 py-2.5 text-sm font-semibold text-ivory hover:bg-navy"
              >
                Healing
              </Link>
              <Link
                to="/gallery"
                className="rounded-full border border-navy/15 px-5 py-2.5 text-sm font-semibold text-navy hover:border-gold"
              >
                Browse gallery
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
      </div>
    </>
  );
}
