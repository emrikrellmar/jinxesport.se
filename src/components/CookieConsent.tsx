import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

type ConsentState = 'granted' | 'denied' | 'unset';

const GA_ID = (import.meta.env as any).VITE_GA_ID || (import.meta.env as any).VITE_GA_MEASUREMENT_ID || '';

function setConsentInDL(defaults: { ad: ConsentState; analytics: ConsentState }) {
  // Ensure dataLayer exists and set default consent state (Consent Mode)
  (window as any).dataLayer = (window as any).dataLayer || [];
  (window as any).dataLayer.push && (window as any).dataLayer.push({
    event: 'consent-default',
    ad_storage: defaults.ad,
    analytics_storage: defaults.analytics,
  });
}

function loadGtag(measurementId: string) {
  if (!measurementId) return;
  if ((window as any).gtagLoaded) return;

  // create script tag
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(s);

  // setup gtag stub
  (window as any).dataLayer = (window as any).dataLayer || [];
  function gtag() {
    (window as any).dataLayer.push(arguments);
  }
  (window as any).gtag = gtag;

  s.onload = () => {
    (window as any).gtag('js', new Date());
    (window as any).gtag('config', measurementId, { anonymize_ip: true });
    (window as any).gtagLoaded = true;
  };
}

const COOKIE_KEY = 'jinx_cookie_consent_v1';

const CookieConsent = () => {
  const [consent, setConsent] = useState<ConsentState>(() => {
    try {
      const raw = localStorage.getItem(COOKIE_KEY);
      if (!raw) return 'unset';
      const parsed = JSON.parse(raw);
      return parsed?.analytics === 'granted' ? 'granted' : parsed?.analytics === 'denied' ? 'denied' : 'unset';
    } catch (e) {
      return 'unset';
    }
  });

  useEffect(() => {
    // set Consent Mode defaults to denied until user decides
    setConsentInDL({ ad: 'denied', analytics: 'denied' });

    // If user already granted, load gtag and update consent accordingly
    if (consent === 'granted' && GA_ID) {
      // notify consent granted to GTM/gtag
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({ event: 'consent-update', ad_storage: 'granted', analytics_storage: 'granted' });
      loadGtag(GA_ID);
    }
  }, [consent]);

  const acceptAll = () => {
    localStorage.setItem(COOKIE_KEY, JSON.stringify({ ad: 'granted', analytics: 'granted' }));
    setConsent('granted');
  };

  const rejectAll = () => {
    localStorage.setItem(COOKIE_KEY, JSON.stringify({ ad: 'denied', analytics: 'denied' }));
    setConsent('denied');
    // push explicit denied state
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({ event: 'consent-update', ad_storage: 'denied', analytics_storage: 'denied' });
  };

  if (consent !== 'unset') return null;

  return (
    <div className="fixed inset-x-6 bottom-6 z-50 rounded-2xl border border-white/10 bg-carbon/95 p-6 shadow-lg md:inset-x-12">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <div className="text-sm font-semibold">Vi använder cookies</div>
          <p className="text-sm text-white/60">Vi använder cookies och liknande tekniker för att förbättra din upplevelse, analysera trafik och visa relevanta annonser. Du kan acceptera eller neka samtycke för analyser och annonspixlar.</p>
          <p className="text-sm text-white/60">Läs mer i vår <Link to="/cookies" className="text-fuchsia">Cookies Policy</Link> eller i vår <Link to="/gdpr" className="text-fuchsia">Privacy Policy</Link>.</p>
        </div>

        <div className="flex shrink-0 items-center gap-3 pt-3 md:pt-0">
          <button onClick={rejectAll} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">Neka</button>
          <Link to="/cookies" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">Hantera</Link>
          <button onClick={acceptAll} className="rounded-full bg-fuchsia px-4 py-2 text-sm font-semibold text-void">Acceptera alla</button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
