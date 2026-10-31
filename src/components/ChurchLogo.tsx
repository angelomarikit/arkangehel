import { LOGO_SRC, SITE_NAME } from '../lib/brand';

type ChurchLogoProps = {
  className?: string;
  variant?: 'light' | 'dark';
  showText?: boolean;
  size?: 'header' | 'hero' | 'feature';
};

const logoHeights = {
  header: 'h-12 sm:h-14',
  hero: 'h-24 sm:h-32 md:h-36',
  feature: 'h-20 sm:h-24',
};

/** Official crest from public/logo.jpg */
export function ChurchLogo({
  className = '',
  variant = 'dark',
  showText = true,
  size = 'header',
}: ChurchLogoProps) {
  const text = variant === 'light' ? 'text-ivory' : 'text-navy';
  return (
    <div className={`flex items-center gap-3 sm:gap-4 ${className}`}>
      <img
        src={LOGO_SRC}
        alt={SITE_NAME}
        className={`${logoHeights[size]} w-auto max-w-[min(220px,42vw)] object-contain object-left drop-shadow-sm`}
      />
      {showText && size === 'header' && (
        <div className="max-w-[11rem] leading-tight sm:max-w-none">
          <p className={`font-display text-sm font-semibold tracking-wide sm:text-base ${text}`}>{SITE_NAME}</p>
        </div>
      )}
    </div>
  );
}
