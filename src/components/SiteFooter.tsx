import { ChurchLogo } from './ChurchLogo';

export function SiteFooter() {
  return (
    <footer className="border-t border-navy/10 bg-navy text-ivory/90">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-start md:justify-between">
        <ChurchLogo variant="light" showText={false} size="feature" />
        <div className="max-w-md text-sm leading-relaxed text-ivory/70">
          <p>
            A welcoming community of faith — sharing mission, fellowship, and service through authentic
            moments captured in our own photographs.
          </p>
        </div>
      </div>
      <div className="border-t border-ivory/10 py-4 text-center text-xs text-ivory/50">
        © {new Date().getFullYear()} Centro Tinig ng Arkanghel
      </div>
    </footer>
  );
}
