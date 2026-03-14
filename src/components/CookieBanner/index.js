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
      loadAnalytics();
    }
  }, []);

  const loadAnalytics = () => {
    // TODO: Add analytics script loading here when ready
    console.log('Analytics consent given - ready to load tracking');
  };

  const handleAccept = () => {
    localStorage.setItem('analytics_consent', 'accept');
    setShowBanner(false);
    loadAnalytics();
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
        Diese Website nutzt datenschutzfreundliche Analyse-Tools.
        Mit Ihrer Zustimmung helfen Sie, die Seite zu verbessern.
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
