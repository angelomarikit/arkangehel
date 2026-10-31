import { contact } from '../content/contact';

type MessagingChannelsProps = {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md';
};

export function MessagingChannels({ variant = 'dark', size = 'md' }: MessagingChannelsProps) {
  const label = variant === 'light' ? 'text-gold-light' : 'text-gold-deep';
  const sub = variant === 'light' ? 'text-ivory/75' : 'text-navy/70';
  const linkText = variant === 'light' ? 'text-ivory hover:text-gold-light' : 'text-royal hover:text-gold-deep';
  const btnSize = size === 'sm' ? 'h-10 w-10' : 'h-12 w-12';
  const iconSize = size === 'sm' ? 'h-5 w-5' : 'h-6 w-6';

  return (
    <div>
      <p className={`text-xs font-semibold uppercase tracking-widest ${label}`}>Mobile</p>
      <p className={`mt-2 text-sm ${sub}`}>
        <a href={`tel:${contact.phoneTel}`} className={`text-base font-semibold ${linkText}`}>
          {contact.phoneDisplay}
        </a>
      </p>

      <p className={`mt-5 text-xs font-semibold uppercase tracking-widest ${label}`}>
        Viber · WhatsApp · Telegram
      </p>
      <ul className="mt-3 flex flex-wrap gap-3">
        {contact.messaging.map((app) => (
          <li key={app.id}>
            <a
              href={app.href}
              target={app.id === 'viber' ? undefined : '_blank'}
              rel={app.id === 'viber' ? undefined : 'noopener noreferrer'}
              className={`group flex ${btnSize} items-center justify-center rounded-full border border-navy/10 bg-pure shadow-sm transition hover:-translate-y-0.5 hover:border-gold/50 hover:shadow-md ${variant === 'light' ? 'border-ivory/20 bg-ivory/10' : ''}`}
              aria-label={`Message us on ${app.name}`}
              title={app.name}
            >
              <img src={app.icon} alt="" className={`${iconSize} object-contain`} />
              <span className="sr-only">{app.name}</span>
            </a>
          </li>
        ))}
      </ul>
      <p className={`mt-2 text-xs ${sub}`}>Tap an icon to chat on {contact.messaging.map((m) => m.name).join(', ')}.</p>
    </div>
  );
}
