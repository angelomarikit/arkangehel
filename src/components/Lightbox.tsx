import { useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { GalleryImage } from '../types/gallery';

type LightboxProps = {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onChange: (index: number) => void;
  collectionTitle: string;
};

export function Lightbox({ images, index, onClose, onChange, collectionTitle }: LightboxProps) {
  const current = images[index];

  const go = useCallback(
    (delta: number) => {
      if (!images.length) return;
      onChange((index + delta + images.length) % images.length);
    },
    [images.length, index, onChange],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [go, onClose]);

  useEffect(() => {
    let startX = 0;
    const onTouchStart = (e: TouchEvent) => {
      startX = e.touches[0]?.clientX ?? 0;
    };
    const onTouchEnd = (e: TouchEvent) => {
      const endX = e.changedTouches[0]?.clientX ?? 0;
      const dx = endX - startX;
      if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
    };
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchend', onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [go]);

  if (!current) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex flex-col bg-navy/95 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        role="dialog"
        aria-modal="true"
        aria-label={`${collectionTitle} photograph ${index + 1} of ${images.length}`}
      >
        <div className="flex items-center justify-between px-4 py-3 text-ivory/90 sm:px-6">
          <p className="text-sm font-medium tracking-wide">
            {collectionTitle} · {index + 1} / {images.length}
          </p>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-ivory/20 px-4 py-1.5 text-sm transition hover:border-gold hover:text-gold"
          >
            Close
          </button>
        </div>

        <div className="relative flex flex-1 items-center justify-center px-2 pb-4 sm:px-8">
          <button
            type="button"
            className="absolute left-2 z-10 hidden h-12 w-12 items-center justify-center rounded-full border border-ivory/20 text-2xl text-ivory transition hover:border-gold hover:text-gold sm:flex md:left-6"
            onClick={() => go(-1)}
            aria-label="Previous photograph"
          >
            ‹
          </button>

          <motion.img
            key={current.src}
            src={current.src}
            alt=""
            className="max-h-[78vh] max-w-full object-contain shadow-2xl"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            draggable={false}
          />

          <button
            type="button"
            className="absolute right-2 z-10 hidden h-12 w-12 items-center justify-center rounded-full border border-ivory/20 text-2xl text-ivory transition hover:border-gold hover:text-gold sm:flex md:right-6"
            onClick={() => go(1)}
            aria-label="Next photograph"
          >
            ›
          </button>
        </div>

        <p className="pb-4 text-center text-xs text-ivory/50">Swipe or use arrow keys to navigate</p>
      </motion.div>
    </AnimatePresence>
  );
}
