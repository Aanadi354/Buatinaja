"use client";

import { useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { ArrowRight, CloudSync, CodeBrackets, LightBulb } from "iconoir-react";
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
  const icons = {
    strategy: LightBulb,
    software: CodeBrackets,
    cloud: CloudSync,
  };
  const Icon = icons[kind];

  return <Icon aria-hidden="true" className={styles.serviceIconSvg} strokeWidth={1.7} />;
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
    <section className={styles.servicesSection} id="services" aria-labelledby="services-title">
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
                    <ArrowRight aria-hidden="true" className={styles.arrowIcon} strokeWidth={1.7} />
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
