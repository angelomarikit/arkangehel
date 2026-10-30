import type { GalleryImage } from '../types/gallery';

type PageBannerProps = {
  title: string;
  subtitle?: string;
  image?: GalleryImage | null;
};

export function PageBanner({ title, subtitle, image }: PageBannerProps) {
  const bg = image?.medium ?? image?.src;

  return (
    <section className="relative isolate min-h-[min(42vh,420px)] overflow-hidden bg-navy">
      {bg && (
        <img
          src={bg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-35"
          loading="eager"
          decoding="async"
        />
      )}
      <div className="theme-banner-overlay absolute inset-0" aria-hidden />
      <div className="theme-blend-art theme-blend-art-soft absolute inset-0" aria-hidden />
      <div className="theme-banner-glow absolute inset-0 mix-blend-soft-light" aria-hidden />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgb(250 248 242) 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
        aria-hidden
      />
      <div className="relative z-10 mx-auto flex min-h-[min(42vh,420px)] max-w-6xl flex-col justify-center px-4 py-14 sm:px-6 sm:py-16">
        <p className="text-gold-glow text-xs font-bold uppercase tracking-[0.28em] text-gold-light">
          Centro Tinig ng Arkanghel
        </p>
        <h1 className="font-display mt-3 max-w-3xl text-4xl font-semibold text-ivory sm:text-5xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ivory/85">{subtitle}</p>}
      </div>
    </section>
  );
}
