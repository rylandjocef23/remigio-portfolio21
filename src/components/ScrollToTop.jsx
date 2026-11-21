import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Start every new page at the top (unless the link points at a #section).
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
}
