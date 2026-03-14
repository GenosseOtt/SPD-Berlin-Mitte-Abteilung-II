import { useState } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './machmit.module.css';

export default function MachMit() {
  const [activeStep, setActiveStep] = useState(null);

  return (
    <Layout
      title="Mach mit!"
      description="Werde Teil einer Bewegung, die deinen Kiez wirklich verändert">

      {/* How We're Different */}
      <section className={styles.differenceSection}>
        <div className={styles.differenceContent}>
          <span className={styles.sectionLabel}>Kontakt</span>
          <h2 className={styles.differenceTitle}>
            Schreib uns an<br />oder komm vorbei
          </h2>
        </div>

        <div className={styles.differenceCards}>
          <div className={styles.differenceCard}>
            <div className={styles.cardHeader}>
              <img src="/img/svg/SPD_Sprechblase_1_schwarz-frei_RGB.svg" alt="" className={styles.cardIcon} />
              <h3>WhatsApp</h3>
            </div>
            <p>
              Hast du Fragen oder möchtest direkt mit uns in Kontakt treten?
              Schreib uns einfach per WhatsApp!
            </p>
            <div className={styles.cardAction}>
              <a href="https://wa.me/491772902562" className={styles.cardLink}>
                WhatsApp öffnen →
              </a>
            </div>
          </div>

          <div className={styles.differenceCard}>
            <div className={styles.cardHeader}>
              <img src="/img/svg/SPD_E-Mail_schwarz-frei_RGB.svg" alt="" className={styles.cardIcon} />
              <h3>E-Mail</h3>
            </div>
            <p>
              Du erreichst uns auch per E-Mail. Wir antworten so schnell wie möglich
              auf deine Fragen und Anregungen.
            </p>
            <div className={styles.cardAction}>
              <a href="mailto:Johannes.Rupieper@mac.com" className={styles.cardLink}>
                E-Mail senden →
              </a>
            </div>
          </div>

          <div className={styles.differenceCard}>
            <div className={styles.cardHeader}>
              <img src="/img/svg/SPD_Handy_schwarz-frei_RGB.svg" alt="" className={styles.cardIcon} />
              <h3>Instagram</h3>
            </div>
            <p>
              Folg uns auf Instagram für aktuelle Updates, Events und Einblicke
              aus unserem Kiez.
            </p>
            <div className={styles.cardAction}>
              <a href="https://www.instagram.com/spdberlin_alex/" target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
                @spdberlin_alex →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Steps */}
      <section className={styles.stepsSection}>
        <div className={styles.stepsHeader}>
          <span className={styles.sectionLabel}>Dein Weg zu uns</span>
          <h2 className={styles.stepsTitle}>
            In 3 Schritten<br />dabei sein
          </h2>
        </div>

        <div className={styles.stepsGrid}>
          {[
            {
              number: '01',
              title: 'Komm vorbei',
              description: 'Jeden 4. Donnerstag treffen wir uns in einer unserer Stammkneipen.',
              action: 'Nächster Termin',
              link: '/aktuelles',
            },
            {
              number: '02',
              title: 'Bring deine Idee',
              description: 'Was nervt dich im Kiez? Was könnte besser sein? Erzähl uns davon.',
              action: 'Schreib uns',
              link: 'https://wa.me/491772902562',
            },
            {
              number: '03',
              title: 'Mach es real',
              description: 'Wir helfen dir, deine Idee umzusetzen – mit unserem Netzwerk und Know-how.',
              action: 'Los geht\'s',
              link: '/docs/wir/intro',
            },
          ].map((step, index) => (
            <div
              key={index}
              className={`${styles.stepCard} ${activeStep === index ? styles.stepCardActive : ''}`}
              onMouseEnter={() => setActiveStep(index)}
              onMouseLeave={() => setActiveStep(null)}
            >
              <span className={styles.stepNumber}>{step.number}</span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
              <a href={step.link} className={styles.stepAction}>
                {step.action} →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Final Push */}
      <section className={styles.finalSection}>
        <div className={styles.finalContent}>
          <h2 className={styles.finalTitle}>
            Worauf wartest<br />du noch?
          </h2>

          <div className={styles.finalActions}>
            <a
              href="https://wa.me/491772902562"
              className={styles.finalButtonPrimary}
            >
              <span>Jetzt Kontakt aufnehmen</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="square"/>
              </svg>
            </a>

            <Link to="/aktuelles" className={styles.finalButtonSecondary}>
              Oder komm zum nächsten Treffen
            </Link>
          </div>

          <div className={styles.finalNote}>
            <p>
              Du musst nichts unterschreiben. Keine Verpflichtungen. Keine versteckten Agenden.<br />
              Nur Menschen, die ihren Kiez besser machen wollen.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
