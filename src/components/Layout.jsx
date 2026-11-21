import { useCallback, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Aurora from './Aurora';
import Footer from './Footer';
import Header from './Header';
import ScrollToTop from './ScrollToTop';
import Splash from './Splash';

// The shell shared by every page: skip link, background, header, footer.
export default function Layout() {
  // Page animations wait until the intro logo starts to fade out.
  const [ready, setReady] = useState(false);
  const handleLeave = useCallback(() => setReady(true), []);

  return (
    <div className="flex min-h-svh flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[1100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:font-semibold focus:text-night"
      >
        Skip to main content
      </a>

      <ScrollToTop />
      <Splash onLeave={handleLeave} />
      <Aurora />
      <Header />

      <main id="main" tabIndex={-1} className="flex-1 outline-none">
        <Outlet context={{ ready }} />
      </main>

      <Footer />
    </div>
  );
}
