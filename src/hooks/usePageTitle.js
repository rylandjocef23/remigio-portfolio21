import { useEffect } from 'react';

const BASE_TITLE = 'Ry Remigio | Portfolio';

// Gives each route its own document title, e.g. "About | Ry Remigio".
export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | Ry Remigio` : BASE_TITLE;
  }, [title]);
}
