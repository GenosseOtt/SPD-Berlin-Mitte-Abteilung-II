import React, { useState } from 'react';
import Layout from '@theme/Layout';
import styles from './spenden.module.css';

function CopyButton({ text, label }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button className={styles.copyButton} onClick={handleCopy}>
      {copied ? '✓ Kopiert' : `${label} kopieren`}
    </button>
  );
}

export default function Spenden() {
  const [selectedPurpose, setSelectedPurpose] = useState('abteilung');

  const purposes = {
    wahlkampf: 'Wahlkampfspende Berlin-Wahl 2026',
    abteilung: 'Abteilungsspende'
  };

  // EPC QR Code data - updates based on selected purpose
  const epcData = `BCD
002
1
SCT

SPD Berlin Abteilung Alexanderplatz
DE49100700240737210500


${purposes[selectedPurpose]}`;

  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(epcData)}`;

  return (
    <Layout
      title="Spenden"
      description="Unterstütze die SPD Abteilung Alexanderplatz mit einer Spende"
    >
      <main className={styles.spendenPage}>
        <div className={styles.container}>
          <div className={styles.header}>
            <span className={styles.sectionLabel}>Unterstützung</span>
            <h1 className={styles.title}>
              Spende für die<br />
              Sozialdemokratie
            </h1>
            <p className={styles.subtitle}>
              Deine Spende hilft uns, Politik für alle zu machen – transparent,
              unabhängig und nah an den Menschen im Kiez.
            </p>
          </div>

          <div className={styles.content}>
            <div className={styles.qrSection}>
              <div className={styles.qrCard}>
                <h2 className={styles.qrTitle}>QR-Code scannen</h2>
                <div className={styles.qrCodeWrapper}>
                  <img
                    src={qrCodeUrl}
                    alt="EPC QR Code für Spende"
                    className={styles.qrCode}
                  />
                </div>
                <p className={styles.qrHint}>
                  Scanne den QR-Code mit deiner Banking-App für eine schnelle Überweisung.
                </p>
              </div>
            </div>

            <div className={styles.bankingSection}>
              <div className={styles.bankingCard}>
                <h2 className={styles.bankingTitle}>Bankverbindung</h2>

                <div className={styles.detailGroup}>
                  <label>Empfänger</label>
                  <div className={styles.valueRow}>
                    <span className={styles.value}>SPD Berlin Abteilung Alexanderplatz</span>
                    <CopyButton text="SPD Berlin Abteilung Alexanderplatz" label="Empfänger" />
                  </div>
                </div>

                <div className={styles.detailGroup}>
                  <label>IBAN</label>
                  <div className={styles.valueRow}>
                    <span className={styles.value}>DE49 1007 0024 0737 2105 00</span>
                    <CopyButton text="DE49100700240737210500" label="IBAN" />
                  </div>
                </div>

                <div className={styles.detailGroup}>
                  <label>Verwendungszweck</label>
                  <div className={styles.segmentedControl}>
                    <button
                      className={`${styles.segmentButton} ${selectedPurpose === 'wahlkampf' ? styles.segmentButtonActive : ''}`}
                      onClick={() => setSelectedPurpose('wahlkampf')}
                    >
                      Wahlkampf 2026
                    </button>
                    <button
                      className={`${styles.segmentButton} ${selectedPurpose === 'abteilung' ? styles.segmentButtonActive : ''}`}
                      onClick={() => setSelectedPurpose('abteilung')}
                    >
                      Abteilungsspende
                    </button>
                  </div>
                  <div className={styles.valueRow}>
                    <span className={styles.value}>{purposes[selectedPurpose]}</span>
                    <CopyButton text={purposes[selectedPurpose]} label="" />
                  </div>
                </div>
              </div>

              <div className={styles.infoBox}>
                <h3>Spendenquittung</h3>
                <p>
                  Für alle Spenden stellen wir gerne eine Spendenquittung aus.
                  Diese kann steuerlich geltend gemacht werden. Bitte gib im
                  Verwendungszweck deine vollständige Adresse an oder{' '}
                  <a href="mailto:nadine.riez@posteo.de?subject=Spendenquittung" className={styles.mailtoLink}>
                    kontaktiere uns
                  </a>{' '}
                  nach der Überweisung.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
