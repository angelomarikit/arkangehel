import { contact } from '../content/contact';

type ContactDetailsProps = {
  variant?: 'light' | 'dark';
  className?: string;
};

export function ContactDetails({ variant = 'dark', className = '' }: ContactDetailsProps) {
  const label = variant === 'light' ? 'text-gold-light' : 'text-gold-deep';
  const text = variant === 'light' ? 'text-ivory/85' : 'text-navy/80';
  const link = variant === 'light' ? 'text-ivory hover:text-gold' : 'text-royal hover:text-gold';
  const heading = variant === 'light' ? 'text-ivory' : 'text-navy';

  return (
    <address className={`not-italic ${className}`}>
      <p className={`text-xs font-semibold uppercase tracking-widest ${label}`}>About us</p>
      <p className={`mt-2 font-display text-lg font-semibold ${heading}`}>{contact.legalName}</p>

      <p className={`mt-5 text-xs font-semibold uppercase tracking-widest ${label}`}>Address</p>
      <p className={`mt-2 text-sm leading-relaxed ${text}`}>
        {contact.addressLines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </p>

      <p className={`mt-5 text-xs font-semibold uppercase tracking-widest ${label}`}>CP</p>
      <p className={`mt-2 text-sm ${text}`}>
        {contact.phoneLabel}:{' '}
        <a href={`tel:${contact.phoneTel}`} className={`font-semibold underline-offset-2 hover:underline ${link}`}>
          {contact.phoneDisplay}
        </a>
      </p>

      <p className={`mt-5 text-xs font-semibold uppercase tracking-widest ${label}`}>Facebook</p>
      <p className={`mt-2 text-sm ${text}`}>
        <a
          href={contact.facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`font-semibold underline-offset-2 hover:underline ${link}`}
        >
          {contact.facebookName}
        </a>
      </p>
    </address>
  );
}
