import { motion } from 'framer-motion';
import { registrationDocument, registrationSection } from '../content/registration';

function DocumentIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-8 w-8"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
      />
    </svg>
  );
}

function ShieldCheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-7 w-7"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
      />
    </svg>
  );
}

export function RegistrationSection() {
  return (
    <section
      className="theme-panel-light relative border-y-2 border-gold/40"
      aria-labelledby="registration-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="grid gap-8 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-navy text-gold-light shadow-md ring-2 ring-gold/30"
          >
            <ShieldCheckIcon />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
              {registrationSection.eyebrow}
            </p>
            <h2 id="registration-heading" className="font-display mt-2 text-2xl font-semibold text-navy sm:text-3xl">
              {registrationSection.title}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-navy/75 sm:text-base">
              {registrationSection.summary}
            </p>
            <ul className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
              {registrationSection.bullets.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-navy/80">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:text-right"
          >
            <a
              href={registrationDocument.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-xl border-2 border-gold/50 bg-pure px-5 py-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-gold hover:shadow-md sm:w-auto lg:min-w-[15rem]"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold/15 text-royal">
                <DocumentIcon />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-semibold uppercase tracking-wider text-gold-deep">
                  View document
                </span>
                <span className="mt-0.5 block text-sm font-semibold leading-snug text-navy group-hover:text-royal">
                  {registrationDocument.fileLabel}
                </span>
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
