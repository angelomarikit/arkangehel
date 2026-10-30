import { Link } from 'react-router-dom';
import { ChurchLogo } from '../components/ChurchLogo';
import { ContactDetails } from '../components/ContactDetails';
import { PageBanner } from '../components/PageBanner';
import { SectionHeading } from '../components/SectionHeading';
import { contact } from '../content/contact';

export function ContactPage() {
  return (
    <>
      <PageBanner
        title="Contact & connect"
        subtitle="Visit us in Biñan, Laguna, call our Smart line, or message us on Facebook."
      />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Connect"
              title="We would love to hear from you"
              description="For directions, schedules, prayer requests, or ministry questions, reach out using the details below."
            />
            <div className="mt-10 rounded-2xl border border-navy/10 bg-pure p-8 shadow-sm">
              <ContactDetails variant="dark" />
            </div>
            <p className="mt-8 text-sm leading-relaxed text-navy/65">
              See also our{' '}
              <Link to="/gallery" className="font-medium text-royal hover:text-gold">
                photo galleries
              </Link>{' '}
              for recent missions and fellowship.
            </p>
          </div>

          <div className="theme-section-deep flex flex-col items-center justify-center overflow-hidden rounded-2xl p-10 text-center shadow-xl sm:p-14">
            <ChurchLogo variant="light" size="hero" showText={false} className="justify-center" />
            <p className="mt-8 font-display text-2xl text-ivory">{contact.legalName}</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory/75">{contact.addressOneLine}</p>
            <a
              href={`tel:${contact.phoneTel}`}
              className="mt-6 rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-navy hover:bg-gold/90"
            >
              Call {contact.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
