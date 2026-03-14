import React, { useState, useEffect } from 'react';
import './styles.css';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('analytics_consent');
    if (!consent) {
      // Show banner if no consent decision has been made
      setShowBanner(true);
    } else if (consent === 'accept') {
      // Load analytics if user previously accepted
      loadExternalServices();
    }
  }, []);

  const loadExternalServices = () => {
    // Load Plausible Analytics
    if (!document.getElementById('plausible-script')) {
      const script = document.createElement('script');
      script.id = 'plausible-script';
      script.async = true;
      script.src = 'https://analytics.johannesott.eu/js/pa-RGI1ZP3wPFgSnJOUwQjUt.js';
      document.head.appendChild(script);

      // Initialize Plausible
      const initScript = document.createElement('script');
      initScript.innerHTML = `
        window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};
        plausible.init()
      `;
      document.head.appendChild(initScript);
    }

    // Dispatch custom event for other components to load external content
    window.dispatchEvent(new CustomEvent('consent-granted'));
  };

  const handleAccept = () => {
    localStorage.setItem('analytics_consent', 'accept');
    setShowBanner(false);
    loadExternalServices();
  };

  const handleReject = () => {
    localStorage.setItem('analytics_consent', 'reject');
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div id="cookies-eu-banner" className="cookies-banner">
      <p>
        Diese Website nutzt datenschutzfreundliche Dienste (Plausible Analytics, OpenStreetMap)
        zur Verbesserung der Nutzererfahrung. Mit Ihrer Zustimmung helfen Sie, die Seite zu verbessern.
      </p>
      <div className="cookies-actions">
        <button
          id="cookies-eu-accept"
          className="btn btn-secondary"
          onClick={handleAccept}
        >
          Zustimmen
        </button>
        <a href="/docs/datenschutz" className="btn btn-tertiary">
          Mehr erfahren
        </a>
        <button
          id="cookies-eu-reject"
          className="btn"
          onClick={handleReject}
        >
          Ablehnen
        </button>
      </div>
    </div>
  );
}
