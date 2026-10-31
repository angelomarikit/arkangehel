import { LOGO_SRC, LOGO_SRC_HD, SITE_NAME } from '../lib/brand';

type ChurchLogoProps = {
  className?: string;
  variant?: 'light' | 'dark';
  showText?: boolean;
  size?: 'header' | 'hero' | 'feature';
  /** Large crest on photo hero — medallion frame for contrast */
  presentation?: 'default' | 'banner';
};

const logoSizes = {
  header: 'h-14 w-14 sm:h-16 sm:w-16',
  hero: 'h-40 w-40 sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-64 lg:w-64',
  heroBanner: 'h-44 w-44 sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-[17.5rem] lg:w-[17.5rem]',
  feature: 'h-24 w-24 sm:h-28 sm:w-28',
};

/** Official crest only — no site text overlay; white backdrop removed in `npm run logo`. */
export function ChurchLogo({
  className = '',
  variant = 'dark',
  showText = true,
  size = 'header',
  presentation = 'default',
}: ChurchLogoProps) {
  const text = variant === 'light' ? 'text-ivory' : 'text-navy';
  const isHero = size === 'hero';
  const isBanner = isHero && presentation === 'banner';
  const src = isHero ? LOGO_SRC_HD : LOGO_SRC;

  const img = (
    <img
      src={src}
      alt={SITE_NAME}
      width={1024}
      height={1024}
      decoding={isHero ? 'sync' : 'async'}
      fetchPriority={isHero ? 'high' : undefined}
      className={`${isBanner ? logoSizes.heroBanner : logoSizes[size]} shrink-0 object-contain ${
        isBanner
          ? 'drop-shadow-[0_8px_32px_rgba(0,0,0,0.55)]'
          : isHero
            ? 'drop-shadow-[0_6px_28px_rgba(0,0,0,0.45)]'
            : 'drop-shadow-[0_2px_12px_rgba(0,0,0,0.25)]'
      }`}
    />
  );

  return (
    <div className={`flex items-center gap-3 sm:gap-4 ${className}`}>
      {isBanner ? <div className="hero-logo-badge">{img}</div> : img}
      {showText && size === 'header' && (
        <div className="max-w-[11rem] leading-tight sm:max-w-none">
          <p className={`font-display text-sm font-semibold tracking-wide sm:text-base ${text}`}>{SITE_NAME}</p>
        </div>
      )}
    </div>
  );
}
