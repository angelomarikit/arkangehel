import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ChurchLogo } from './ChurchLogo';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/ministries', label: 'Ministries' },
  { to: '/missions', label: 'Missions' },
  { to: '/community', label: 'Community' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/5 bg-ivory/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6">
        <Link to="/" onClick={() => setOpen(false)} className="shrink-0">
          <ChurchLogo showText={false} />
        </Link>

        <nav className="hidden items-center gap-5 lg:flex xl:gap-6" aria-label="Main">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-[13px] font-medium tracking-wide transition xl:text-sm ${
                  isActive ? 'text-royal' : 'text-navy/70 hover:text-royal'
                }`
              }
              end={l.to === '/'}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-navy/10 lg:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="text-xl text-navy">{open ? '×' : '☰'}</span>
        </button>
      </div>

      {open && (
        <nav className="border-t border-navy/5 px-4 py-4 lg:hidden" aria-label="Mobile">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === '/'}
                  className="block rounded-md px-2 py-2.5 text-base font-medium text-navy hover:bg-navy/5"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
