import React from 'react';
import Layout from '@theme/Layout';
import CalendarEvents from '../components/CalendarEvents';

export default function Aktuelles() {
  const handleSubscribe = () => {
    // Open the ICS file which will trigger the OS calendar subscription
    window.location.href = 'https://outlook.live.com/owa/calendar/00000000-0000-0000-0000-000000000000/ca3f2350-3f02-47f9-90b0-0b5c8b0b9acb/cid-15939253758E7200/calendar.ics';
  };

  const handleViewOnline = () => {
    window.open(
      'https://outlook.live.com/owa/calendar/d8ab5042-b63c-4cbb-939f-620c77db7317/ca3f2350-3f02-47f9-90b0-0b5c8b0b9acb/cid-15939253758E7200/index.html',
      '_blank'
    );
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
              >
                📅 Kalender abonnieren
              </button>
            </div>

            <div style={{
              padding: '15px',
              backgroundColor: '#f0f7ff',
              borderLeft: '4px solid #e3000f',
              borderRadius: '4px',
              marginBottom: '30px'
            }}>
              <p style={{ margin: 0, fontSize: '14px' }}>
                <strong>💡 Tipp:</strong> Klicke auf "Kalender abonnieren" um die Termine automatisch in deiner
                Kalender-App (iOS/Android/macOS/Windows/Outlook) zu synchronisieren.
                Du erhältst dann automatisch Updates, wenn sich Termine ändern.
              </p>
            </div>

            <h2>Anstehende Termine</h2>
            <CalendarEvents />

            <div style={{ marginTop: '50px' }}>
              <h3>📱 Instagram</h3>
              <p>Oder folg uns auf Instagram für aktuelle Updates</p>
              <button
                onClick={() => window.open('https://www.instagram.com/spdberlin_alex/', '_blank')}
                className="button button--primary"
              >
                Folg uns auf Instagram
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
