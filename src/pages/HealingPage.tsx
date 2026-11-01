import { Link } from 'react-router-dom';
import { CollectionCard } from '../components/CollectionCard';
import { PageBanner } from '../components/PageBanner';
import { SectionHeading } from '../components/SectionHeading';
import {
  healingModalities,
  healingPageIntro,
  otherServicesBrief,
  spiritualServices,
} from '../content/healing';
import { ORGANIZATION_TAGLINE } from '../content/visionMission';
import { collections, siteMeta } from '../lib/collections';

export function HealingPage() {
  const healingAlbums = collections.filter(
    (c) => c.count > 0 && ['herbal', 'mediums'].some((k) => c.slug.includes(k)),
  );

  return (
    <>
      <PageBanner
        title="Healing"
        subtitle={`${ORGANIZATION_TAGLINE} — ${healingPageIntro.ministryLine}`}
        image={siteMeta.aboutImage}
      />

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <header className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">CTNA</p>
          <h2 className="font-display mt-2 text-3xl font-semibold text-navy sm:text-4xl">
            {healingPageIntro.heading}
          </h2>
          <p className="mt-3 font-display text-lg font-semibold text-royal">{healingPageIntro.organization}</p>
          <p className="mt-2 text-base leading-relaxed text-navy/75">{healingPageIntro.ministryLine}</p>
          <p className="mt-4 text-sm leading-relaxed text-navy/65">{healingPageIntro.faithNote}</p>
        </header>

        <div className="mt-14">
          <SectionHeading title={healingPageIntro.servicesSection} />
        </div>

        <ol className="mt-10 grid gap-5 lg:grid-cols-2">
          {healingModalities.map((item) => (
            <li
              key={item.n}
              className="flex gap-4 rounded-xl border border-navy/8 bg-pure p-6 shadow-sm ring-1 ring-navy/5 transition hover:border-gold/35"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-gold/20 font-display text-lg font-semibold text-gold-deep">
                {item.n}
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-lg font-semibold leading-snug text-navy">
                  {item.title}
                  {item.term ? (
                    <span className="font-sans text-base font-medium text-navy/70"> ({item.term})</span>
                  ) : null}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/75">{item.description}</p>
              </div>
            </li>
          ))}
        </ol>

        <section className="mt-20">
          <SectionHeading eyebrow="Also offered" title="Other services" />
          <ul className="mt-8 flex flex-wrap gap-2">
            {otherServicesBrief.map((service) => (
              <li
                key={service}
                className="rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-sm font-medium text-navy"
              >
                {service}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-20">
          <SectionHeading
            eyebrow="Spiritual care"
            title="Other spiritual services"
            description="Ceremonies and blessings rooted in prayer and faith."
          />
          <div className="mt-10 space-y-4">
            {spiritualServices.map((service, i) => (
              <article
                key={service.title}
                className="rounded-xl border border-navy/8 bg-ivory px-6 py-5 sm:flex sm:gap-6 sm:py-6"
              >
                <span className="font-display text-2xl font-semibold text-gold/80 sm:w-8">{i + 1}.</span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-navy">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/75 sm:text-base">{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {healingAlbums.length > 0 && (
          <section className="mt-20">
            <SectionHeading
              eyebrow="Gallery"
              title="Healing & wellness in our archives"
              description="Photographs from herbal medicine and related folders — authentic albums from our community."
            />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {healingAlbums.map((c, i) => (
                <CollectionCard key={c.slug} collection={c} index={i} />
              ))}
            </div>
          </section>
        )}

        <p className="mt-16 text-center text-sm text-navy/70">
          Questions or appointments?{' '}
          <Link to="/contact" className="font-semibold text-royal hover:text-gold">
            Contact us
          </Link>{' '}
          — Biñan, Laguna.
        </p>
      </div>
    </>
  );
}
