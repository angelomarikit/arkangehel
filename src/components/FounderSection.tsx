import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { founder } from '../content/founder';
import { SectionHeading } from './SectionHeading';

export function FounderSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20" aria-labelledby="founder-heading">
      <SectionHeading eyebrow="Leadership" title="Our founder" />

      <div className="mt-12 grid items-center gap-10 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-14">
        <motion.figure
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto w-full max-w-sm lg:mx-0"
        >
          <div className="overflow-hidden rounded-2xl border-2 border-gold/40 bg-pure shadow-lg ring-1 ring-navy/5">
            <img
              src={founder.photoSrc}
              alt={founder.photoAlt}
              className="aspect-[3/4] w-full object-cover object-[center_15%]"
              loading="lazy"
              decoding="async"
            />
          </div>
          <figcaption className="mt-4 text-center lg:text-left">
            <p className="font-display text-xl font-semibold leading-snug text-navy sm:text-2xl">{founder.name}</p>
            <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-gold-deep">
              {founder.role}
            </p>
            <p className="mt-0.5 text-sm text-navy/65">{founder.organization}</p>
          </figcaption>
        </motion.figure>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.06 }}
        >
          <h3 id="founder-heading" className="sr-only">
            {founder.name}
          </h3>
          <div className="space-y-4 text-base leading-relaxed text-navy/80">
            {founder.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
          <blockquote className="mt-8 border-l-4 border-gold/70 pl-5">
            <p className="font-display text-lg italic leading-relaxed text-navy">
              &ldquo;{founder.quote}&rdquo;
            </p>
          </blockquote>
          <p className="mt-8">
            <Link
              to="/healing"
              className="inline-flex items-center gap-2 text-sm font-semibold text-royal transition hover:text-gold"
            >
              Explore CTNA healing modalities →
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
