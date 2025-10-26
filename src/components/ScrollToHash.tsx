import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (!hash) return;

    const id = hash.replace('#', '');
    const el = document.getElementById(id);
    if (!el) return;

    // small timeout to allow page/layout to settle
    setTimeout(() => {
      try {
        // make focusable for accessibility then focus
        const prevTab = el.getAttribute('tabindex');
        el.setAttribute('tabindex', '-1');
        (el as HTMLElement).focus({ preventScroll: true });
        (el as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'center' });

        // add brief highlight except for FAQ (keep FAQ background plain)
        if (id !== 'faq') {
          el.classList.add('highlight-flash');
          setTimeout(() => {
            el.classList.remove('highlight-flash');
            if (prevTab === null) el.removeAttribute('tabindex');
            else el.setAttribute('tabindex', prevTab);
          }, 1800);
        } else {
          // restore tabindex when not adding highlight
          if (prevTab === null) el.removeAttribute('tabindex');
          else el.setAttribute('tabindex', prevTab);
        }
      } catch (e) {
        // ignore
      }
    }, 60);
  }, [location.hash]);

  return null;
}
