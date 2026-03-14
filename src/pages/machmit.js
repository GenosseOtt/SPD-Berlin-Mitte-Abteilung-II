import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './machmit.module.css';

export default function MachMit() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Mach mit!"
      description="Werde Teil der SPD Alexanderplatz und gestalte deinen Kiez mit!">
      <main className={styles.mainMachmit}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Mach mit!</h1>
            <p className={styles.heroSubtitle}>
              Auch du kannst Teil einer demokratischen Bewegung für deinen Kiez sein.
            </p>
            <p className={styles.heroDescription}>
              Egal ob du uns bei Veranstaltungen unterstützen möchtest, Ideen für unseren Kiez hast
              oder einfach mehr über unsere Arbeit erfahren willst – <strong>jede Stimme zählt!</strong>
            </p>
          </div>
        </div>

        {/* CTA Cards Section */}
        <div className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaGrid}>

              {/* WhatsApp Card */}
              <div className={styles.ctaCard}>
                <div className={styles.cardIcon}>
                  <img src="/img/svg/SPD_Sprechblase_1_schwarz-frei_RGB.svg" alt="" />
                </div>
                <h2 className={styles.cardTitle}>Schreib uns an</h2>
                <p className={styles.cardDescription}>
                  Hast du Fragen oder möchtest direkt mit uns in Kontakt treten?
                  Schreib uns einfach per WhatsApp!
                </p>
                <a
                  href="https://wa.me/491772902562"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.cardButton}
                >
                  <img
                    src="/img/WhatsAppButtonWhiteLarge.svg"
                    alt="Chat auf WhatsApp"
                    className={styles.whatsappButton}
                  />
                </a>
                <a
                  href="mailto:Johannes.Rupieper@mac.com"
                  className={styles.cardLink}
                >
                  oder per E-Mail →
                </a>
              </div>

              {/* Events Card */}
              <div className={styles.ctaCard}>
                <div className={styles.cardIcon}>
                  <img src="/img/svg/SPD_Hand_5_schwarz-frei_RGB.svg" alt="" />
                </div>
                <h2 className={styles.cardTitle}>Komm vorbei</h2>
                <p className={styles.cardDescription}>
                  Unsere Veranstaltungen sind offen für alle – eine Parteimitgliedschaft ist nicht erforderlich!
                </p>
                <Link to="/aktuelles" className={styles.cardButtonPrimary}>
                  <img
                    src="/img/SPD_Hand_5_weiss-frei_RGB.png"
                    alt="SPD Hand"
                    className={styles.cardButtonIcon}
                  />
                  <span>Termine anzeigen</span>
                </Link>
                <p className={styles.cardNote}>
                  Lerne uns persönlich kennen und bring deine Ideen ein!
                </p>
              </div>

              {/* Instagram Card */}
              <div className={styles.ctaCard}>
                <div className={styles.cardIcon}>
                  <img src="/img/svg/SPD_Handy_schwarz-frei_RGB.svg" alt="" />
                </div>
                <h2 className={styles.cardTitle}>Folg uns</h2>
                <p className={styles.cardDescription}>
                  Bleib auf dem Laufenden mit aktuellen News, Events und Einblicken aus unserem Kiez.
                </p>
                <a
                  href="https://www.instagram.com/spdberlin_alex/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.cardButtonPrimary}
                >
                  <img
                    src="/img/SPD_Instagram_weiss-frei_RGB.png"
                    alt="Instagram"
                    className={styles.cardButtonIcon}
                  />
                  <span>@spdberlin_alex</span>
                </a>
                <p className={styles.cardNote}>
                  Teile deine Meinung und vernetze dich!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Join Section */}
        <div className={styles.whyJoinSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Warum mitmachen?</h2>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefit}>
                <div className={styles.benefitIcon}>
                  <img src="/img/svg/SPD_Schwur_schwarz-frei_RGB.svg" alt="" />
                </div>
                <h3>Gemeinsam gestalten</h3>
                <p>Bring deine Ideen ein und gestalte aktiv die Zukunft unseres Kiezes mit.</p>
              </div>
              <div className={styles.benefit}>
                <div className={styles.benefitIcon}>
                  <img src="/img/svg/SPD_Herz_schwarz-frei_RGB.svg" alt="" />
                </div>
                <h3>Etwas bewirken</h3>
                <p>Mach einen echten Unterschied in deiner Nachbarschaft und darüber hinaus.</p>
              </div>
              <div className={styles.benefit}>
                <div className={styles.benefitIcon}>
                  <img src="/img/svg/SPD_Divers_2_schwarz-frei_RGB.svg" alt="" />
                </div>
                <h3>Netzwerk aufbauen</h3>
                <p>Lerne engagierte Menschen kennen und baue wertvolle Kontakte auf.</p>
              </div>
              <div className={styles.benefit}>
                <div className={styles.benefitIcon}>
                  <img src="/img/svg/SPD_Gluehbirne_schwarz-frei_RGB.svg" alt="" />
                </div>
                <h3>Dazulernen</h3>
                <p>Entwickle neue Fähigkeiten und lerne mehr über politische Prozesse.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className={styles.finalCta}>
          <div className={styles.container}>
            <h2 className={styles.finalCtaTitle}>Bereit loszulegen?</h2>
            <p className={styles.finalCtaText}>
              Der erste Schritt ist der wichtigste. Wir freuen uns auf dich!
            </p>
            <div className={styles.finalCtaButtons}>
              <a
                href="https://wa.me/491772902562"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.buttonLarge}
              >
                Jetzt Kontakt aufnehmen
              </a>
              <Link to="/aktuelles" className={styles.buttonLargeSecondary}>
                Termine ansehen
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
