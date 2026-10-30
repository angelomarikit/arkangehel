import { useState } from 'react';
import {
  content,
  ORGANIZATION_TAGLINE,
  scriptures,
  type VisionLanguage,
} from '../content/visionMission';

type VisionMissionSectionProps = {
  showTagline?: boolean;
  compact?: boolean;
};

export function VisionMissionSection({ showTagline = true, compact = false }: VisionMissionSectionProps) {
  const [lang, setLang] = useState<VisionLanguage>('en');
  const copy = content[lang];

  return (
    <section className={compact ? '' : 'mt-20'} aria-labelledby="vision-mission-heading">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          {showTagline && (
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">{ORGANIZATION_TAGLINE}</p>
          )}
          <h2
            id="vision-mission-heading"
            className="font-display mt-2 text-3xl font-semibold text-navy sm:text-4xl"
          >
            Vision &amp; Mission
          </h2>
          <div className="gold-rule mt-3" />
        </div>
        <div
          className="inline-flex rounded-full border border-navy/10 bg-pure p-1 shadow-sm"
          role="tablist"
          aria-label="Language"
        >
          {(['en', 'tl'] as const).map((code) => (
            <button
              key={code}
              type="button"
              role="tab"
              aria-selected={lang === code}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                lang === code ? 'bg-royal text-ivory' : 'text-navy/70 hover:text-royal'
              }`}
              onClick={() => setLang(code)}
            >
              {code === 'en' ? 'English' : 'Tagalog'}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl border border-navy/8 bg-pure p-7 shadow-sm ring-1 ring-navy/5 sm:p-8">
          <h3 className="font-display text-xl font-semibold text-royal">{copy.visionLabel}</h3>
          <p className="mt-4 text-base leading-relaxed text-navy/80">{copy.vision}</p>
        </article>
        <article className="rounded-2xl border border-navy/8 bg-pure p-7 shadow-sm ring-1 ring-navy/5 sm:p-8">
          <h3 className="font-display text-xl font-semibold text-royal">{copy.missionLabel}</h3>
          <p className="mt-4 text-base leading-relaxed text-navy/80">{copy.mission}</p>
        </article>
      </div>

      <blockquote className="mt-8 rounded-2xl border-l-4 border-gold bg-gradient-to-r from-gold/10 to-transparent px-6 py-6 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold">{copy.coreBeliefLabel}</p>
        <p className="mt-3 font-display text-lg leading-relaxed text-navy sm:text-xl">{copy.coreBelief}</p>
      </blockquote>

      <div className="mt-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-navy/50">{copy.scriptureLabel}</p>
        <ul className="mt-4 space-y-4">
          {scriptures.map((s) => (
            <li
              key={s.ref}
              className="rounded-xl border border-navy/8 bg-ivory px-5 py-4 text-sm leading-relaxed text-navy/80 sm:text-base"
            >
              <span className="font-semibold text-royal">
                {lang === 'en' ? s.refEn : s.ref}
              </span>
              <span className="mt-1 block italic">{s.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
