type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';
  const titleColor = light ? 'text-ivory' : 'text-navy';
  const descColor = light ? 'text-ivory/75' : 'text-navy/70';

  return (
    <div className={`flex flex-col gap-3 ${alignClass}`}>
      {eyebrow && (
        <p
          className={`text-xs font-bold uppercase tracking-[0.25em] ${light ? 'text-gold-light' : 'text-gold-deep'}`}
        >
          {eyebrow}
        </p>
      )}
      <h2 className={`font-display text-4xl font-semibold leading-tight sm:text-5xl ${titleColor}`}>
        {title}
      </h2>
      <div className={`gold-rule ${align === 'center' ? 'mx-auto' : ''}`} />
      {description && <p className={`max-w-2xl text-lg leading-relaxed ${descColor}`}>{description}</p>}
    </div>
  );
}
