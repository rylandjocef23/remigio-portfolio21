import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Container from './Container';
import { navLinks } from '../data/site';

const desktopLink = ({ isActive }) =>
  `relative py-1 font-semibold transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:rounded after:bg-brand after:transition-transform hover:text-white hover:after:scale-x-100 ${
    isActive ? 'text-white after:scale-x-100' : 'text-mist after:scale-x-0'
  }`;

const mobileLink = ({ isActive }) =>
  `block rounded-lg px-3 py-3 text-lg font-semibold ${
    isActive ? 'bg-violet-400/15 text-white' : 'text-mist hover:bg-white/5 hover:text-white'
  }`;

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef(null);
  const { pathname } = useLocation();

  // Close the phone menu after navigating.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Escape closes the menu and returns focus to the button.
  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-400/15 bg-night/70 backdrop-blur-md">
      <Container className="flex h-17 items-center justify-between">
        <Link to="/" className="text-gradient font-display text-2xl font-extrabold" aria-label="Ry Remigio, home">
          Ry
        </Link>

        <nav aria-label="Main" className="hidden gap-7 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={desktopLink}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          ref={menuButton}
          type="button"
          className="grid size-11 place-items-center rounded-lg text-slate-100 hover:bg-white/10 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </Container>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-slate-400/15 bg-night/95 md:hidden">
          <Container className="flex flex-col gap-1 py-3">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.to === '/'} className={mobileLink}>
                {link.label}
              </NavLink>
            ))}
          </Container>
        </nav>
      )}
    </header>
  );
}
