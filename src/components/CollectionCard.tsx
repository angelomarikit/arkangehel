import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Collection } from '../types/gallery';
import { LazyImage } from './LazyImage';

type CollectionCardProps = {
  collection: Collection;
  index?: number;
};

export function CollectionCard({ collection, index = 0 }: CollectionCardProps) {
  const cover = collection.cover;

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.05, duration: 0.45 }}
      className="group overflow-hidden rounded-xl bg-pure shadow-md ring-1 ring-navy/5 transition hover:shadow-xl"
    >
      <Link to={`/gallery/${collection.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden">
          {cover ? (
            <>
              <LazyImage
                src={cover.thumb}
                thumb={cover.thumb}
                alt=""
                className="h-full transition duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/75 via-gold/15 to-gold-light/10" />
            </>
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-ivory to-navy/5 p-6 text-center">
              <div className="h-10 w-10 rounded-full border border-gold/40" />
              <p className="text-sm text-navy/60">No photographs yet</p>
            </div>
          )}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <h3 className="font-display text-2xl font-semibold text-pure">{collection.title}</h3>
            <p className="mt-1 text-sm text-ivory/85">
              {collection.count} {collection.count === 1 ? 'photograph' : 'photographs'}
            </p>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
