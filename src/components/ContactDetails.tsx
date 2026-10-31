import { contact } from '../content/contact';
import { MessagingChannels } from './MessagingChannels';

type ContactDetailsProps = {
  variant?: 'light' | 'dark';
  className?: string;
};

export function ContactDetails({ variant = 'dark', className = '' }: ContactDetailsProps) {
  const label = variant === 'light' ? 'text-gold-light' : 'text-gold-deep';
  const text = variant === 'light' ? 'text-ivory/85' : 'text-navy/80';
  const heading = variant === 'light' ? 'text-ivory' : 'text-navy';
  const socialBtn =
    variant === 'light'
      ? 'border-ivory/20 bg-ivory/10'
      : 'border-navy/10 bg-pure';

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

      <div className="mt-5">
        <MessagingChannels variant={variant} />
      </div>

      <p className={`mt-5 text-xs font-semibold uppercase tracking-widest ${label}`}>Facebook</p>
      <a
        href={contact.facebookUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`group mt-3 flex h-12 w-12 items-center justify-center rounded-full border shadow-sm transition hover:-translate-y-0.5 hover:border-gold/50 hover:shadow-md ${socialBtn}`}
        aria-label={`Follow ${contact.facebookName} on Facebook`}
        title={contact.facebookName}
      >
        <img src="/icons/facebook.svg" alt="" className="h-6 w-6 object-contain" />
      </a>
    </address>
  );
}
