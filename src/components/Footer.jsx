import Container from './Container';
import { site, socialLinks } from '../data/site';

const linkClass = 'font-semibold text-slate-100 underline-offset-4 hover:text-cyan-300 hover:underline';

export default function Footer() {
  return (
    <footer className="border-t border-slate-400/15 py-8 text-center text-mist">
      <Container>
        <ul className="mb-5 flex flex-wrap justify-center gap-x-6 gap-y-2">
          <li>
            <a href={`mailto:${site.email}`} className={linkClass}>
              Email
            </a>
          </li>
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                {link.label}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>

        <p>
          &copy; {new Date().getFullYear()} {site.name} ({site.nickname}). All rights reserved.
        </p>
        <p className="mt-1 text-sm">Built with React, Vite and Tailwind CSS</p>
      </Container>
    </footer>
  );
}
