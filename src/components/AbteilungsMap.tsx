/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from "react";
import { GeoJSON, MapContainer, Marker, TileLayer, Tooltip } from "react-leaflet";
import {
  abteilungsgebiete,
  centerOfAbteilungsgebiet,
} from "./abteilungsgebiete";

function style(primaryAbteilung: boolean, highlight: boolean) {
  return {
    fillColor: primaryAbteilung ? "#E3000F" : "#D8949C",
    weight: 2,
    opacity: 1,
    color: "white",
    dashArray: "3",
    fillOpacity: highlight ? 0.7 : 0.5,
  };
}

export default function AbteilungsMap() {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    // Check consent on mount
    const consent = localStorage.getItem('analytics_consent');
    if (consent === 'accept') {
      setHasConsent(true);
    }

    // Listen for consent being granted
    const handleConsentGranted = () => {
      setHasConsent(true);
    };

    window.addEventListener('consent-granted', handleConsentGranted);
    return () => window.removeEventListener('consent-granted', handleConsentGranted);
  }, []);

  const handleGrantConsent = () => {
    localStorage.setItem('analytics_consent', 'accept');
    setHasConsent(true);
    // Trigger external services loading (including Plausible)
    window.dispatchEvent(new CustomEvent('consent-granted'));

    // Reload external services if cookie banner already loaded them
    if (typeof window !== 'undefined' && !document.getElementById('plausible-script')) {
      const script = document.createElement('script');
      script.id = 'plausible-script';
      script.async = true;
      script.src = 'https://analytics.johannesott.eu/js/pa-RGI1ZP3wPFgSnJOUwQjUt.js';
      document.head.appendChild(script);

      const initScript = document.createElement('script');
      initScript.innerHTML = `
        window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};
        plausible.init()
      `;
      document.head.appendChild(initScript);
    }
  };

  if (!hasConsent) {
    return (
      <div style={{
        height: '400px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)',
        borderRadius: '8px',
        border: '2px solid #e0e0e0',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23e3000f\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          opacity: 0.3,
          pointerEvents: 'none',
        }}></div>

        <div style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '500px',
        }}>
          <div style={{
            fontSize: '48px',
            marginBottom: '20px',
          }}>
            🗺️
          </div>

          <h3 style={{
            margin: '0 0 16px 0',
            fontSize: '24px',
            color: '#333',
            fontWeight: '600',
          }}>
            Karte anzeigen?
          </h3>

          <p style={{
            marginBottom: '24px',
            fontSize: '16px',
            lineHeight: '1.6',
            color: '#555',
          }}>
            Um die interaktive Karte mit den Abteilungsgebieten anzuzeigen, benötigen wir Ihre Zustimmung
            zum Laden von externen Inhalten (OpenStreetMap und Plausible Analytics).
          </p>

          <div style={{
            display: 'flex',
            gap: '12px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
            <button
              onClick={handleGrantConsent}
              style={{
                background: '#e3000f',
                color: 'white',
                padding: '14px 28px',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 8px rgba(227, 0, 15, 0.2)',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = '#c40000';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(227, 0, 15, 0.3)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = '#e3000f';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(227, 0, 15, 0.2)';
              }}
            >
              ✓ Zustimmen und Karte laden
            </button>

            <a
              href="/docs/datenschutz"
              style={{
                display: 'inline-block',
                padding: '14px 28px',
                border: '2px solid #e3000f',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600',
                color: '#e3000f',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                background: 'white',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = '#e3000f';
                e.currentTarget.style.color = 'white';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.color = '#e3000f';
              }}
            >
              Mehr erfahren
            </a>
          </div>

          <p style={{
            marginTop: '20px',
            fontSize: '13px',
            color: '#888',
            fontStyle: 'italic',
          }}>
            Ihre Entscheidung wird gespeichert und gilt für alle Seiten.
          </p>
        </div>
      </div>
    );
  }

  return (
    <MapContainer style={{ height: "400px" }} center={[52.52, 13.39]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {abteilungsgebiete
        .filter((abteilung) => abteilung.properties.name === "Abteilung 2")
        .map((abteilung) => {
          const name = abteilung.properties.name;
          const isAbteilung2 = true;
          return (
            <GeoJSON
              key={name}
              style={style(isAbteilung2, false)}
              eventHandlers={{
                mouseover: (e) => {
                  e.target.setStyle(style(isAbteilung2, true));
                },
                mouseout: (e) => {
                  e.target.setStyle(style(isAbteilung2, false));
                },
                click: () => {
                  alert(name);
                }
              }}
              data={abteilung}
            ></GeoJSON>
          );
        })}
      {abteilungsgebiete
        .filter((abteilung) => abteilung.properties.name === "Abteilung 2")
        .map((abteilung) => (
          <Tooltip
            key={abteilung.properties.name}
            position={[
              centerOfAbteilungsgebiet(abteilung).y,
              centerOfAbteilungsgebiet(abteilung).x,
            ]}
          >
            {abteilung.properties.name}
          </Tooltip>
        ))}
    </MapContainer>
  );
}
