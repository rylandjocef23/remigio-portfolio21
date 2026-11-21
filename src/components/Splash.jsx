import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// The intro only plays when someone first lands on the home page (not on a reload or a deep link).
function shouldSkip(pathname) {
  if (typeof window === 'undefined') return false;
  const navigation = window.performance?.getEntriesByType?.('navigation')[0];
  return navigation?.type === 'reload' || pathname !== '/';
}

export default function Splash({ onLeave }) {
  const { pathname } = useLocation();
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(() => shouldSkip(pathname));

  useEffect(() => {
    if (gone) {
      onLeave?.();
      return undefined;
    }

    const hold = prefersReducedMotion() ? 800 : 2300;
    document.body.style.overflow = 'hidden';

    const leave = setTimeout(() => {
      setLeaving(true);
      onLeave?.();
    }, hold);
    const remove = setTimeout(() => {
      setGone(true);
      document.body.style.overflow = '';
    }, hold + 700);

    return () => {
      clearTimeout(leave);
      clearTimeout(remove);
      document.body.style.overflow = '';
    };
  }, [gone, onLeave]);

  if (gone) return null;

  return (
    <div
      className={`fixed inset-0 z-[1000] grid place-items-center bg-night transition-[opacity,visibility] duration-700 ${
        leaving ? 'invisible opacity-0' : ''
      }`}
      aria-hidden="true"
    >
      <div className="absolute size-[70vmin] rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.32),rgba(103,232,249,0.10)_45%,transparent_70%)]" />

      <div className="relative flex flex-col items-center gap-5">
        <div className="relative grid size-32 place-items-center">
          <svg viewBox="0 0 120 120" className="absolute inset-0 size-full -rotate-90">
            <defs>
              <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#67e8f9" />
                <stop offset="0.55" stopColor="#a78bfa" />
                <stop offset="1" stopColor="#f0abfc" />
              </linearGradient>
            </defs>
            <circle cx="60" cy="60" r="54" className="fill-none stroke-slate-400/20 stroke-3" />
            <circle
              cx="60"
              cy="60"
              r="54"
              className="fill-none stroke-3 [stroke-dasharray:339.3] [stroke-dashoffset:339.3] [stroke-linecap:round] [stroke:url(#logoGrad)] motion-safe:animate-draw motion-reduce:[stroke-dashoffset:0]"
            />
          </svg>
          <span
            className="text-gradient font-display text-5xl font-extrabold tracking-tight motion-safe:animate-pop"
            style={{ animationDelay: '800ms' }}
          >
            Ry
          </span>
        </div>

        <p
          className="font-display font-medium tracking-wide text-mist motion-safe:animate-rise"
          style={{ animationDelay: '1200ms' }}
        >
          Ryland Jocef Remigio
        </p>
      </div>
    </div>
  );
}
