"use client";

import { useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import Image from "next/image";
import buatinajaLogo from "../../public/logo-panjang.png";
import styles from "./services-section.module.css";

type Service = {
  id: string;
  tab: string;
  eyebrow: string;
  title: string;
  description: string;
  benefits: [string, string];
  icon: "strategy" | "software" | "cloud";
};

const services: Service[] = [
  {
    id: "it-consulting",
    tab: "IT Consulting",
    eyebrow: "Strategy & Planning",
    title: "IT Consulting",
    description: "Turn business goals into a clear, practical technology roadmap.",
    benefits: ["Business assessment", "Technology roadmap"],
    icon: "strategy",
  },
  {
    id: "custom-software",
    tab: "Custom Software",
    eyebrow: "Web Apps • Business Systems",
    title: "Custom Software",
    description: "Purpose-built digital tools shaped around the way your team works.",
    benefits: ["Web applications", "Business systems"],
    icon: "software",
  },
  {
    id: "cloud-support",
    tab: "Cloud & IT Support",
    eyebrow: "Reliable Operations",
    title: "Cloud & IT Support",
    description: "Keep your tools connected, maintained, and ready to grow.",
    benefits: ["Cloud setup", "Ongoing support"],
    icon: "cloud",
  },
];

function ServiceIcon({ kind }: { kind: Service["icon"] }) {
  if (kind === "strategy") {
    return (
      <svg aria-hidden="true" viewBox="0 0 32 32" className={styles.serviceIconSvg}>
        <circle cx="16" cy="16" r="10.5" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="16" cy="16" r="3" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <path d="m18.2 13.8 4.1-4.1m-13 13 4.1-4.1M16 3.5v3m0 19v3m12-12h-3m-18 0h-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
      </svg>
    );
  }

  if (kind === "software") {
    return (
      <svg aria-hidden="true" viewBox="0 0 32 32" className={styles.serviceIconSvg}>
        <rect x="5" y="6.5" width="22" height="19" rx="4" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <path d="m12.5 13-3 3 3 3m7-6 3 3-3 3m-2.2-7.5-2.6 9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" className={styles.serviceIconSvg}>
      <path d="M9.3 23.5h14.2a5 5 0 0 0 .4-10 8 8 0 0 0-15-1.6 5.8 5.8 0 0 0 .4 11.6Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
      <path d="M16 15v8m-3-3 3 3 3-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className={styles.arrowIcon}>
      <path d="M4 10h11m-4-4 4 4-4 4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
    </svg>
  );
}

function getPlacement(cardIndex: number, activeIndex: number) {
  const offset = (cardIndex - activeIndex + services.length) % services.length;
  return styles[["cardCenter", "cardRight", "cardLeft"][offset]];
}

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef<number | null>(null);

  function moveActive(direction: number) {
    setActiveIndex((current) => (current + direction + services.length) % services.length);
  }

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    if (event.target instanceof HTMLElement && event.target.closest("a, button")) return;
    dragStartX.current = event.clientX;
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function finishPointer(event: PointerEvent<HTMLDivElement>) {
    if (dragStartX.current === null) return;

    const distance = event.clientX - dragStartX.current;
    if (Math.abs(distance) > 42) moveActive(distance < 0 ? 1 : -1);

    dragStartX.current = null;
    setIsDragging(false);
  }

  function cancelPointer() {
    dragStartX.current = null;
    setIsDragging(false);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      moveActive(-1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      moveActive(1);
    }
  }

  return (
    <section className={styles.servicesSection} aria-labelledby="services-title">
      <header className={styles.sectionHeader}>
        <p className={styles.eyebrow}>
          <Image src={buatinajaLogo} alt="Buatinaja" className={styles.eyebrowLogo} />
        </p>
        <h2 className={styles.title} id="services-title">
          <span>Get The Most Powerful and</span>
          <span><strong>Easy to Use</strong> IT Solutions</span>
        </h2>
      </header>

      <div className={styles.servicesVisual}>
        <svg className={styles.wireNetwork} viewBox="0 0 1200 560" preserveAspectRatio="none" aria-hidden="true">
          <path className={styles.wireBase} d="M0 25H332Q354 25 354 47V178Q354 200 376 200H460" />
          <path className={styles.wireBase} d="M1200 25H868Q846 25 846 47V178Q846 200 824 200H740" />
          <path className={`${styles.wirePulse} ${styles.networkPulseOne}`} pathLength={1000} d="M0 25H332Q354 25 354 47V178Q354 200 376 200H460" />
          <path className={`${styles.wirePulse} ${styles.networkPulseTwo}`} pathLength={1000} d="M1200 25H868Q846 25 846 47V178Q846 200 824 200H740" />
        </svg>

        <div className={styles.tabRail}>
          <div className={styles.serviceTabs} role="group" aria-label="Choose an IT service">
            {services.map((service, index) => (
              <button
                aria-pressed={activeIndex === index}
                className={`${styles.serviceTab} ${activeIndex === index ? styles.selectedTab : ""}`}
                key={service.id}
                onClick={() => setActiveIndex(index)}
                type="button"
              >
                <span className={styles.tabIcon}><ServiceIcon kind={service.icon} /></span>
                <span>{service.tab}</span>
              </button>
            ))}
          </div>
        </div>

        <div
          aria-label="IT services carousel. Use left and right arrow keys or drag to change service."
          aria-roledescription="carousel"
          className={`${styles.cardStage} ${isDragging ? styles.dragging : ""}`}
          onKeyDown={handleKeyDown}
          onPointerCancel={cancelPointer}
          onPointerDown={handlePointerDown}
          onPointerUp={finishPointer}
          role="region"
          tabIndex={0}
        >
          {services.map((service, index) => {
            const isActive = activeIndex === index;

            return (
              <article
                aria-label={`${service.title}, ${index + 1} of ${services.length}`}
                className={`${styles.serviceCard} ${getPlacement(index, activeIndex)} ${isActive ? styles.activeCard : styles.inactiveCard}`}
                key={service.id}
              >
                <div className={styles.cardTopline}>
                  <span className={styles.serviceIcon}><ServiceIcon kind={service.icon} /></span>
                  <span className={styles.serviceEyebrow}>{service.eyebrow}</span>
                  <span className={styles.cardNumber}>0{index + 1}</span>
                </div>

                <div className={styles.cardBody}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>

                <div className={styles.benefitRow}>
                  {service.benefits.map((benefit) => <span key={benefit}>{benefit}</span>)}
                </div>

                <footer className={styles.cardFooter}>
                  <span className={styles.footerSignal}><i /> Tailored for your business</span>
                  <a className={styles.learnMore} href="#contact">
                    <span>Learn More</span>
                    <ArrowIcon />
                  </a>
                </footer>
              </article>
            );
          })}
        </div>
      </div>

      <p className={styles.visuallyHidden} aria-live="polite" aria-atomic="true">
        Selected service: {services[activeIndex].title}
      </p>
    </section>
  );
}
