import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChurchLogo } from '../components/ChurchLogo';
import { CollectionCard } from '../components/CollectionCard';
import { LazyImage } from '../components/LazyImage';
import { SectionHeading } from '../components/SectionHeading';
import { HERO_MINISTRY_LINE } from '../content/visionMission';
import { SITE_NAME } from '../lib/brand';
import { collections, pickHighlightPhotos, siteMeta } from '../lib/collections';

const quickLinks = [
  { to: '/about', title: 'About us', blurb: 'Who we are and how we share our story through real photography.' },
  { to: '/healing', title: 'Healing', blurb: 'CTNA healing modalities and spiritual services.' },
  { to: '/missions', title: 'Missions', blurb: 'Mission trips, banner events, and liturgical seasons.' },
  { to: '/community', title: 'Community', blurb: 'Fellowship highlights from across our galleries.' },
  { to: '/gallery', title: 'Gallery', blurb: 'Full-screen viewing with every collection.' },
  { to: '/contact', title: 'Contact', blurb: 'Connect with Centro Tinig ng Arkanghel Inc.' },
];

export function HomePage() {
  const hero = siteMeta.hero;
  const featured = collections.filter((c) => c.count > 0).slice(0, 3);
  const preview = pickHighlightPhotos(4);

  return (
    <>
      <section className="relative min-h-[78vh] overflow-hidden bg-navy">
        {hero ? (
          <>
            <div className="hero-ken-burns absolute inset-0 h-full w-full overflow-hidden">
              <LazyImage
                src={hero.medium}
                thumb={hero.thumb}
                alt=""
                className="h-full w-full"
                imgClassName="object-cover"
              />
            </div>
            <div className="theme-hero-overlay absolute inset-0" />
            <div className="theme-blend-art theme-blend-art-hero absolute inset-0" aria-hidden />
            <div className="theme-banner-glow absolute inset-0 mix-blend-soft-light opacity-80" />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-light-glow via-ivory to-sky/25" />
        )}

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:py-28">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            className={`flex flex-col items-start ${hero ? '' : 'lg:items-center'}`}
          >
            <ChurchLogo variant={hero ? 'light' : 'dark'} size="hero" showText={false} />
          </motion.div>

          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-gold-glow max-w-2xl text-[1.24rem] font-bold uppercase leading-snug tracking-[0.1em] text-gold-light sm:text-2xl sm:tracking-[0.14em] md:text-[1.75rem]"
            >
              {HERO_MINISTRY_LINE}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.06 }}
              className={`font-display mt-4 text-3xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl ${
                hero ? 'text-ivory' : 'text-navy'
              }`}
            >
              {SITE_NAME}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
              className={`mt-5 max-w-xl text-lg leading-relaxed ${hero ? 'text-ivory/85' : 'text-navy/75'}`}
            >
            A compassionate center of holistic healing, prayer, and wellness — serving as humble instruments
              of God&apos;s grace.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              to="/about"
              className="rounded-full bg-gold px-7 py-3 text-sm font-semibold tracking-wide text-navy transition hover:bg-gold/90"
            >
              Vision &amp; mission
            </Link>
            <Link
              to="/gallery"
              className={`rounded-full border px-7 py-3 text-sm font-semibold tracking-wide transition ${
                hero
                  ? 'border-ivory/40 text-ivory hover:border-gold hover:text-gold'
                  : 'border-navy/20 text-navy hover:border-royal'
              }`}
            >
              View gallery
            </Link>
          </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeading
          eyebrow="Explore"
          title="Seven pages, one community"
          description="Navigate healing, missions, community highlights, the full gallery, and contact."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {quickLinks.map((item, i) => (
            <motion.div
              key={item.to}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
            >
              <Link
                to={item.to}
                className="group block h-full rounded-xl border border-navy/8 bg-pure p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-md"
              >
                <h3 className="font-display text-xl font-semibold text-navy group-hover:text-royal">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/65">{item.blurb}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-gold">Learn more →</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="theme-panel-light py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading eyebrow="Featured" title="Recent collections" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {featured.map((c, i) => (
              <CollectionCard key={c.slug} collection={c} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="theme-section-deep py-16 text-ivory sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            light
            align="center"
            eyebrow="Preview"
            title="From our archives"
            description="A glimpse of community life — see more on the Community page."
          />
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
            {preview.map((img) => (
              <div key={img.src} className="overflow-hidden rounded-lg ring-1 ring-ivory/10">
                <LazyImage src={img.medium} thumb={img.thumb} alt="" className="aspect-[4/3]" />
              </div>
            ))}
          </div>
          <p className="mt-8 text-center">
            <Link to="/community" className="text-sm font-semibold text-gold hover:text-ivory">
              View community highlights →
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
