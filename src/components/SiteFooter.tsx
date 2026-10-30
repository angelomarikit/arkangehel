import { Link } from 'react-router-dom';
import { ContactDetails } from './ContactDetails';
import { ChurchLogo } from './ChurchLogo';
import { contact } from '../content/contact';

export function SiteFooter() {
  return (
    <footer className="theme-footer border-t border-ivory/5 text-ivory/90">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[auto_1fr_1fr] md:gap-12">
        <div>
          <ChurchLogo variant="light" showText={false} size="feature" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/65">
            Holistic Healing Grace — prayer, wellness, and compassionate care in Christ.
          </p>
        </div>

        <ContactDetails variant="light" />

        <div className="text-sm text-ivory/70">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold">Quick links</p>
          <ul className="mt-4 space-y-2">
            <li>
              <Link to="/about" className="hover:text-gold">
                About us
              </Link>
            </li>
            <li>
              <Link to="/healing" className="hover:text-gold">
                Healing
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gold">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-gold">
                Gallery
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ivory/10 py-4 text-center text-xs text-ivory/50">
        © {new Date().getFullYear()} {contact.legalName}
      </div>
    </footer>
  );
}
