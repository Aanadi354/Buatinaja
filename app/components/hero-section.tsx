"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check, ClipboardCheck, GraphUp, LightBulb } from "iconoir-react";
import Image from "next/image";
import buatinajaLogo from "../../public/logo-panjang.png";
import styles from "./hero-section.module.css";

export default function HeroSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // This is a frontend-only confirmation; connect an email service to deliver submissions.
    setSubmitted(true);
  }

  return (
    <main className={styles.pageShell}>
      <section className={styles.hero} id="home" aria-labelledby="hero-title">
        <span aria-hidden="true" className={`${styles.sculpture} ${styles.sculptureLeft}`} />
        <span aria-hidden="true" className={`${styles.sculpture} ${styles.sculptureRight}`} />

        <div className={styles.heroContent}>
          <h1 className={styles.heading} id="hero-title">
            Build Smarter Digital Experiences
            <br className={styles.desktopBreak} /> with{" "}
            <span className={styles.brandName}>
              <Image
                src={buatinajaLogo}
                alt="Buatinaja"
                className={styles.brandLogo}
                preload
              />
            </span>
          </h1>

          <form className={styles.emailForm} id="contact" onSubmit={handleSubmit}>
            <label className={styles.visuallyHidden} htmlFor="work-email">
              Your work email address
            </label>
            <input
              id="work-email"
              name="email"
              type="email"
              placeholder="Your work email address"
              autoComplete="email"
              required
              onChange={() => setSubmitted(false)}
            />
            <button type="submit" className={styles.submitButton}>
              <span className={styles.submitIcon}><ArrowRight aria-hidden="true" className={styles.arrowIcon} strokeWidth={1.7} /></span>
              <span>Get Started</span>
            </button>
          </form>
          <p className={styles.formMessage} role="status" aria-live="polite">
            {submitted ? "Thanks! We'll be in touch." : " "}
          </p>
        </div>

        <div className={styles.dashboardDeck} role="group" aria-label="Sample project dashboard cards">
          <div className={`${styles.dashboardStack} ${styles.projectStack}`}>
            <article className={`${styles.dashboardCard} ${styles.projectSummaryCard}`}>
              <span className={styles.cardIcon}><ClipboardCheck aria-hidden="true" className={styles.cardIconSymbol} strokeWidth={1.7} /></span>
              <span className={styles.summaryText}>
                <small>Project intake</small>
                <strong>IT consultation</strong>
              </span>
              <span className={styles.readyPill}>Open</span>
            </article>

            <article className={`${styles.dashboardCard} ${styles.projectCard}`}>
              <div className={styles.cardTopline}>
                <span className={styles.cardIcon}><GraphUp aria-hidden="true" className={styles.cardIconSymbol} strokeWidth={1.7} /></span>
                <span className={styles.cardLabel}>Service plan</span>
                <span className={styles.statusDot} aria-label="Sample status" />
              </div>
              <h2>Digital roadmap</h2>
              <p className={styles.cardCaption}>A practical plan for your next stage of growth.</p>
              <div className={styles.planDetails}>
                <span><i /> Strategy</span>
                <span><i /> Systems</span>
              </div>
              <div className={styles.cardProgress}><span /></div>
            </article>
          </div>

          <article className={`${styles.dashboardCard} ${styles.consultCard}`}>
            <div className={styles.cardTopline}>
              <span className={styles.cardIcon}><LightBulb aria-hidden="true" className={styles.cardIconSymbol} strokeWidth={1.7} /></span>
              <span className={styles.cardLabel}>Project overview</span>
            </div>
            <h2>IT Consultation</h2>
            <p className={styles.cardCaption}>A clearer path from business needs to technology.</p>
            <div className={styles.roadmapSummary}>
              <span><small>Recommended solution</small><strong>Digital roadmap</strong></span>
              <span className={styles.phaseCount}>4 phases</span>
            </div>
            <div className={styles.workspacePreview} aria-label="Illustration of a four-phase project plan">
              <div className={styles.previewToolbar}><i /><i /><i /></div>
              <div className={styles.previewSteps}>
                <span><b>01</b><small>Discover</small></span>
                <span><b>02</b><small>Plan</small></span>
                <span><b>03</b><small>Build</small></span>
                <span><b>04</b><small>Improve</small></span>
              </div>
            </div>
          </article>

          <div className={`${styles.dashboardStack} ${styles.clientStack}`}>
            <article className={`${styles.dashboardCard} ${styles.welcomeCard}`}>
              <span className={styles.avatar}>B</span>
              <span className={styles.summaryText}>
                <small>Welcome to</small>
                <strong>Business workspace</strong>
              </span>
            </article>

            <article className={`${styles.dashboardCard} ${styles.clientCard}`}>
              <div className={styles.cardTopline}>
                <span className={styles.cardIcon}><Check aria-hidden="true" className={styles.cardIconSymbol} strokeWidth={1.7} /></span>
                <span className={styles.cardLabel}>Sample project status</span>
              </div>
              <div className={styles.clientMetrics}>
                <div><small>Next step</small><strong>Solution planning</strong></div>
                <span className={styles.readyPill}>In progress</span>
              </div>
              <div className={styles.metricRule}><span /></div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}