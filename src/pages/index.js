import React, { useEffect, useState } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function ImpactNumber({ value, label, delay }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setCount(prev => {
          if (prev >= value) {
            clearInterval(interval);
            return value;
          }
          return prev + Math.ceil(value / 50);
        });
      }, 30);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return (
    <div className={styles.impactNumber}>
      <div className={styles.numberValue}>{count}+</div>
      <div className={styles.numberLabel}>{label}</div>
    </div>
  );
}

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [bannerVisible, setBannerVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Layout
      title="SPD Alexanderplatz"
      description="Politik neu denken. Kiez neu gestalten.">

      {/* News Banner */}
      {bannerVisible && (
        <div className={styles.newsBanner}>
          <div className={styles.newsBannerContent}>
            <span className={styles.newsBannerLabel}>Aktuell</span>
            <p className={styles.newsBannerText}>
              Unsere Co-Vorsitzende Nadine Riez kandidiert fürs Abgeordnetenhaus. Wir stehen hinter dir.
              <a href="https://nadine-riez.de" target="_blank" rel="noopener noreferrer" className={styles.newsBannerLink}>
                Mehr auf nadine-riez.de →
              </a>
            </p>
            <button
              onClick={() => setBannerVisible(false)}
              className={styles.newsBannerClose}
              aria-label="Banner schließen"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Hero Section - Full Screen Impact */}
      <section className={styles.hero}>
        <div
          className={styles.heroBackground}
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />

        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <span className={styles.heroLabel}></span>
            <h1 className={styles.heroTitle}>
              Politik<br />
              aus <span className={styles.heroTitleAccent}>der</span><br />
              Mitte.
            </h1>
            <p className={styles.heroSubtitle}>
              Für einen lebenswerten Kiez: Für Alle.
            </p>
          </div>

          <div className={styles.heroActions}>
            <Link to="/machmit" className={styles.ctaPrimary}>
              <span>Mach mit</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="square"/>
              </svg>
            </Link>
            <Link to="/docs/wir/intro" className={styles.ctaSecondary}>
              Lerne uns kennen
            </Link>
          </div>
        </div>

        <div className={styles.scrollIndicator}>
          <div className={styles.scrollLine} />
          <span>Scroll</span>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className={styles.impactSection}>
        <div className={styles.impactGrid}>
          <ImpactNumber value={170} label="Aktive Mitglieder" delay={0} />
          <ImpactNumber value={9} label="Delegierte" delay={200} />
          <ImpactNumber value={8} label="Anträge" delay={400} />
        </div>
      </section>

      {/* Manifesto Section - Swiss Grid */}
      <section className={styles.manifestoSection}>
        <div className={styles.manifestoGrid}>
          <div className={styles.manifestoText}>
            <span className={styles.sectionNumber}>01</span>
            <h2 className={styles.manifestoTitle}>
              Anders<br />als du<br />denkst.
            </h2>
          </div>

          <div className={styles.manifestoContent}>
            <div className={styles.manifestoItem}>
              <h3>Keine Parteisoldaten</h3>
              <p>
                Wir sind Nachbar*innen, Krankenpfleger*innen, Erzieher*innen,
                Gastronom*innen, Verkäufer*innen, Studierende, Eltern – Menschen wie du,
                die einfach mehr wollen als Staus und steigende Mieten.
              </p>
            </div>

            <div className={styles.manifestoItem}>
              <h3>Keine leeren Versprechen</h3>
              <p>
                Bei uns gibt es keine Wahlkampffloskeln. Wir arbeiten täglich
                an konkreten Lösungen für unseren Kiez – transparent und
                nachvollziehbar.
              </p>
            </div>

            <div className={styles.manifestoItem}>
              <h3>Keine alten Strukturen</h3>
              <p>
                Hierarchien? Langweilige Sitzungen? Nicht bei uns. Wir nutzen
                moderne Tools, treffen uns in Cafés und machen Politik, die
                Spaß macht.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do - Image Grid */}
      <section className={styles.actionSection}>
        <div className={styles.actionHeader}>
          <span className={styles.sectionNumber}>02</span>
          <h2 className={styles.actionTitle}>Was wir tun</h2>
        </div>

        <div className={styles.actionGrid}>
          <div className={styles.actionCard}>
            <div className={styles.actionIcon}>
              <img src="/img/svg/SPD_Sprechblase_1_schwarz-frei_RGB.svg" alt="" className="theme-icon" />
            </div>
            <h3>Direkte Kommunikation</h3>
            <p>WhatsApp, Instagram, persönliche Treffen – wir sind da, wo du bist.</p>
          </div>

          <div className={styles.actionCard}>
            <div className={styles.actionIcon}>
              <img src="/img/svg/SPD_Divers_2_schwarz-frei_RGB.svg" alt="" className="theme-icon" />
            </div>
            <h3>Offene Community</h3>
            <p>Keine Mitgliedschaft nötig. Komm vorbei, mach mit, bring deine Ideen ein.</p>
          </div>

          <div className={styles.actionCard}>
            <div className={styles.actionIcon}>
              <img src="/img/svg/SPD_Gluehbirne_schwarz-frei_RGB.svg" alt="" className="theme-icon" />
            </div>
            <h3>Echte Lösungen</h3>
            <p>Von Verkehrswende bis Gentrifizierung – wir packen an, was wirklich zählt.</p>
          </div>
        </div>
      </section>

      {/* Final CTA - Full Width Impact */}
      <section className={styles.finalCta}>
        <div className={styles.finalCtaContent}>
          <h2 className={styles.finalCtaTitle}>
            Bereit, den<br />
            Unterschied zu<br />
            machen?
          </h2>

          <div className={styles.finalCtaGrid}>
            <div className={styles.ctaOption}>
              <span className={styles.ctaOptionNumber}>01</span>
              <h3>Komm vorbei</h3>
              <p>Jeden 4. Donnerstag treffen wir uns in einer unserer Stammkneipen im Kiez.</p>
              <Link to="/aktuelles" className={styles.ctaLink}>
                Termine ansehen →
              </Link>
            </div>

            <div className={styles.ctaOption}>
              <span className={styles.ctaOptionNumber}>02</span>
              <h3>Schreib uns</h3>
              <p>Fragen? Ideen? Kritik? Wir antworten – versprochen.</p>
              <a href="https://wa.me/491772902562" className={styles.ctaLink}>
                WhatsApp öffnen →
              </a>
            </div>

            <div className={styles.ctaOption}>
              <span className={styles.ctaOptionNumber}>03</span>
              <h3>Folg uns</h3>
              <p>Instagram, Events, Updates – bleib auf dem Laufenden.</p>
              <a href="https://www.instagram.com/spdberlin_alex/" className={styles.ctaLink}>
                @spdberlin_alex →
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
