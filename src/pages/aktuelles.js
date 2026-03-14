import React from 'react';
import Layout from '@theme/Layout';
import CalendarEvents from '../components/CalendarEvents';

export default function Aktuelles() {
  const handleSubscribe = () => {
    // Use webcal:// protocol to trigger native calendar subscription
    const icsUrl = 'https://outlook.live.com/owa/calendar/00000000-0000-0000-0000-000000000000/ca3f2350-3f02-47f9-90b0-0b5c8b0b9acb/cid-15939253758E7200/calendar.ics';
    const webcalUrl = icsUrl.replace(/^https?:\/\//, 'webcal://');
    window.location.href = webcalUrl;
  };


  return (
    <Layout
      title="Kalender"
      description="Alle anstehenden Termine der SPD Alexanderplatz"
    >
      <div className="container" style={{ marginTop: '40px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col">
            <h1>Kalender</h1>
            <p>
              Hier findest du alle anstehende Termine und erfährst, wie du mitmachen kannst.
            </p>
            <p>
              Unsere Veranstaltungen sind, in der Regel, offen für alle.{' '}
              <strong>
                Eine Parteimitgliedschaft ist nicht erforderlich.{' '}
                <a href="mailto:Johannes.Rupieper@mac.com">Sprich uns an</a> und{' '}
                <a href="/machmit">mach mit</a>!
              </strong>
            </p>

            <div style={{ marginBottom: '30px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <button
                onClick={handleSubscribe}
                className="button button--primary button--lg"
                style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
              >
                <img
                  src="/img/svg/SPD_Hand_5_schwarz-frei_RGB.svg"
                  alt=""
                  style={{
                    width: '24px',
                    height: '24px',
                    filter: 'brightness(0) invert(1)'
                  }}
                />
                <span>Kalender abonnieren</span>
              </button>
            </div>

            <div style={{
              padding: '20px',
              backgroundColor: '#fff5f5',
              borderLeft: '4px solid #e3000f',
              borderRadius: '8px',
              marginBottom: '30px',
              boxShadow: '0 2px 8px rgba(227,0,15,0.1)'
            }}>
              <p style={{
                margin: 0,
                fontSize: '15px',
                display: 'flex',
                gap: '12px',
                alignItems: 'flex-start',
                lineHeight: '1.6'
              }}>
                <img
                  src="/img/svg/SPD_Gluehbirne_schwarz-frei_RGB.svg"
                  alt=""
                  style={{
                    width: '24px',
                    height: '24px',
                    flexShrink: 0,
                    marginTop: '2px',
                    opacity: 0.7
                  }}
                />
                <span><strong>Tipp:</strong> Klicke auf "Kalender abonnieren" um die Termine automatisch in deiner
                Kalender-App (iOS/Android/macOS/Windows/Outlook) zu synchronisieren.
                Du erhältst dann automatisch Updates, wenn sich Termine ändern.</span>
              </p>
            </div>

            <h2>Anstehende Termine</h2>
            <CalendarEvents />

            <div style={{ marginTop: '50px' }}>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <img
                  src="/img/svg/SPD_Instagram_schwarz-frei_RGB.svg"
                  alt=""
                  style={{ width: '28px', height: '28px' }}
                  className="theme-icon"
                />
                <span>Instagram</span>
              </h3>
              <p style={{ marginBottom: '20px', color: '#666' }}>
                Oder folg uns auf Instagram für aktuelle Updates
              </p>
              <button
                onClick={() => window.open('https://www.instagram.com/spdberlin_alex/', '_blank')}
                className="button button--primary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <img
                  src="/img/svg/SPD_Instagram_schwarz-frei_RGB.svg"
                  alt=""
                  style={{ width: '20px', height: '20px' }}
                  className="theme-icon-invert"
                />
                <span>Folg uns auf Instagram</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
