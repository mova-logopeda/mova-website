import React, { useEffect, useState } from 'react';
import './CookieBanner.css';

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);
  const [calendlyConsent, setCalendlyConsent] = useState(false);
  const [analyticsConsent, setAnalyticsConsent] = useState(false);

  useEffect(() => {
    const existingConsent = localStorage.getItem('cookieConsent');
    if (!existingConsent) {
      setVisible(true);
    } else {
      const consent = JSON.parse(existingConsent);
      setCalendlyConsent(consent.calendly);
      setAnalyticsConsent(consent.analytics);
      if (consent.analytics) loadGoogleAnalytics();
    }
  }, []);

 const loadGoogleAnalytics = () => {
  if (!window.gtagInitialized) {
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-K9QBFSDRSN';
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag; 

    gtag('js', new Date());
    gtag('config', 'G-K9QBFSDRSN');
    window.gtagInitialized = true;
  }
};

  const saveConsent = () => {
    const consent = {
      calendly: calendlyConsent,
      analytics: analyticsConsent,
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consent));

    if (analyticsConsent) {
      loadGoogleAnalytics();
    }

    setVisible(false);
    window.dispatchEvent(new Event('cookieConsentUpdated'));
  };

  const acceptAll = () => {
  const consent = {
    calendly: true,
    analytics: true,
  };
  localStorage.setItem('cookieConsent', JSON.stringify(consent));
  loadGoogleAnalytics();
  setCalendlyConsent(true);
  setAnalyticsConsent(true);
  setVisible(false);
  window.dispatchEvent(new Event('cookieConsentUpdated'));
};

  const rejectAll = () => {
  const consent = {
    calendly: false,
    analytics: false,
  };
  localStorage.setItem('cookieConsent', JSON.stringify(consent));
  setCalendlyConsent(false);
  setAnalyticsConsent(false);
  setVisible(false);
  window.dispatchEvent(new Event('cookieConsentUpdated'));
};

  return (
    visible && (
      <div className="cookie-banner">
        <div className="cookie-box">
          <h3>Zgoda na pliki cookies</h3>
          <p>
            Używamy cookies do analizy ruchu (Google Analytics) oraz do
            wyświetlania widżetu rezerwacji (Calendly). Możesz zarządzać
            swoimi preferencjami.
          </p>

          <div className="cookie-options">
            <label>
              <span>Google Analytics</span>
              <input
                type="checkbox"
                checked={analyticsConsent}
                onChange={() => setAnalyticsConsent(!analyticsConsent)}
              />
            </label>
            <label>
              <span>Calendly</span>
              <input
                type="checkbox"
                checked={calendlyConsent}
                onChange={() => setCalendlyConsent(!calendlyConsent)}
              />
            </label>
          </div>

          <div className="cookie-actions">
            <button onClick={acceptAll}>Akceptuj wszystkie</button>
            <button onClick={rejectAll}>Odrzuć wszystkie</button>
            <button onClick={saveConsent}>Zapisz ustawienia</button>
          </div>
        </div>
      </div>
    )
  );
};

export default CookieBanner;
