"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import buatinajaLogo from "../../public/logo-panjang.png";
import styles from "./hero-section.module.css";

function BrandMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" className={styles.brandMark}>
      <circle cx="16" cy="16" r="15" fill="currentColor" />
      <path
        d="M16 7.5 18.1 12l4.7 1-3.3 3.5.6 4.8-4.1-2.4-4.1 2.4.6-4.8-3.3-3.5 4.7-1L16 7.5Z"
        fill="none"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <circle cx="16" cy="15.5" r="2.2" fill="white" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className={styles.arrowIcon}>
      <path
        d="M4.5 10h10m-4-4 4 4-4 4"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className={styles.menuIcon}>
      <rect x="3" y="3" width="14" height="14" rx="4" fill="none" stroke="currentColor" />
      <circle cx="7" cy="7" r="1" fill="currentColor" />
      <circle cx="13" cy="7" r="1" fill="currentColor" />
      <circle cx="7" cy="13" r="1" fill="currentColor" />
      <circle cx="13" cy="13" r="1" fill="currentColor" />
    </svg>
  );
}

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);
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

        <header className={styles.navbar}>
          <a className={styles.wordmark} href="#home" aria-label="Buatinaja home">
            <BrandMark />
            <span>Buatinaja</span>
          </a>

          <div className={styles.menuWrap}>
            <button
              className={styles.menuButton}
              type="button"
              aria-expanded={menuOpen}
              aria-controls="hero-navigation"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <MenuIcon />
              <span>Menu</span>
            </button>
            {menuOpen && (
              <nav className={styles.menuPanel} id="hero-navigation" aria-label="Main navigation">
                <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
                <a href="#contact" onClick={() => setMenuOpen(false)}>Start a project</a>
              </nav>
            )}
          </div>
        </header>

        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>
            <BrandMark />
            <span>IT Solutions for Modern Business</span>
          </p>
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
              <span className={styles.submitIcon}><ArrowIcon /></span>
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
              <span className={styles.cardIcon}><BrandMark /></span>
              <span className={styles.summaryText}>
                <small>Project intake</small>
                <strong>IT consultation</strong>
              </span>
              <span className={styles.readyPill}>Open</span>
            </article>

            <article className={`${styles.dashboardCard} ${styles.projectCard}`}>
              <div className={styles.cardTopline}>
                <span className={styles.cardIcon}><BrandMark /></span>
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
              <span className={styles.cardIcon}><BrandMark /></span>
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
                <span className={styles.cardIcon}><BrandMark /></span>
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