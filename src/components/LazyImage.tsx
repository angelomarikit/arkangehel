import { useState } from 'react';

type LazyImageProps = {
  src: string;
  thumb?: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  objectFit?: 'cover' | 'contain';
  onLoad?: () => void;
  sizes?: string;
};

export function LazyImage({
  src,
  thumb,
  alt,
  className = '',
  imgClassName = '',
  objectFit = 'cover',
  onLoad,
  sizes,
}: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const initial = thumb ?? src;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!loaded && !error && <div className="image-reveal absolute inset-0" aria-hidden />}
      {!error ? (
        <img
          src={loaded ? src : initial}
          alt={alt}
          loading="lazy"
          decoding="async"
          sizes={sizes}
          className={`h-full w-full transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-90'} ${
            objectFit === 'cover' ? 'object-cover' : 'object-contain'
          } ${imgClassName}`}
          onLoad={() => {
            if (!loaded && initial !== src) {
              const full = new Image();
              full.src = src;
              full.onload = () => {
                setLoaded(true);
                onLoad?.();
              };
              return;
            }
            setLoaded(true);
            onLoad?.();
          }}
          onError={() => setError(true)}
        />
      ) : (
        <div className="flex h-full min-h-[8rem] items-center justify-center bg-navy/5 text-sm text-navy/50">
          Image unavailable
        </div>
      )}
    </div>
  );
}
