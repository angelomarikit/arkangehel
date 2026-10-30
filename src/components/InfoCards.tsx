type Card = {
  title: string;
  body: string;
};

type InfoCardsProps = {
  items: Card[];
};

export function InfoCards({ items }: InfoCardsProps) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <article
          key={item.title}
          className="rounded-xl border border-navy/8 bg-pure p-6 shadow-sm ring-1 ring-navy/5"
        >
          <div className="mb-3 h-1 w-10 rounded-full bg-gold" />
          <h3 className="font-display text-xl font-semibold text-navy">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-navy/70">{item.body}</p>
        </article>
      ))}
    </div>
  );
}
