import { Link } from 'react-router-dom';
import { ChurchLogo } from '../components/ChurchLogo';
import { PageBanner } from '../components/PageBanner';
import { SectionHeading } from '../components/SectionHeading';
import { SITE_NAME } from '../lib/brand';

export function ContactPage() {
  return (
    <>
      <PageBanner
        title="Contact & connect"
        subtitle="Reach out through your usual parish and community channels — we welcome inquiries about fellowship and mission."
      />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Connect"
              title="We would love to hear from you"
              description="This site showcases our authentic archives. For schedules, directions, or ministry questions, please contact the organization directly through established community lines."
            />
            <ul className="mt-10 space-y-6 text-navy/80">
              <li className="rounded-xl border border-navy/10 bg-pure p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-widest text-gold">Organization</p>
                <p className="mt-2 font-display text-2xl text-navy">{SITE_NAME}</p>
              </li>
              <li className="rounded-xl border border-navy/10 bg-pure p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-widest text-gold">Visit</p>
                <p className="mt-2 leading-relaxed">
                  Join us during announced gatherings, missions, and celebrations documented in our{' '}
                  <Link to="/gallery" className="font-medium text-royal hover:text-gold">
                    photo galleries
                  </Link>
                  .
                </p>
              </li>
              <li className="rounded-xl border border-navy/10 bg-pure p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-widest text-gold">Share photos</p>
                <p className="mt-2 leading-relaxed">
                  To contribute new albums, add folders to the project archive and rebuild the site so collections
                  stay in sync with our folders.
                </p>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-navy via-royal to-navy p-10 text-center shadow-xl sm:p-14">
            <ChurchLogo variant="light" size="hero" showText={false} className="justify-center" />
            <p className="mt-8 font-display text-2xl text-ivory">Peace · Service · Unity</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory/75">
              Official crest of {SITE_NAME}. Thank you for visiting our community online.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
