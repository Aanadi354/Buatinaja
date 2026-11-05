"use client";

import { useEffect, useState } from "react";
import styles from "./floating-navbar.module.css";

const links = [
  { label: "Home", href: "#home", target: "home" },
  { label: "Service", href: "#services", target: "services" },
  { label: "Project", href: "#projects", target: "projects" },
  { label: "Client", href: "#clients", target: "clients" },
  { label: "Contact", href: "#contact", target: "contact" },
];

function BrandMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 34 34" className={styles.brandMark}>
      <defs>
        <linearGradient id="brand-gradient" x1="4" y1="4" x2="30" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#63D7FF" />
          <stop offset="1" stopColor="#1767E8" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="32" height="32" rx="12" fill="url(#brand-gradient)" />
      <path d="m17 7 2.8 7.2L27 17l-7.2 2.8L17 27l-2.8-7.2L7 17l7.2-2.8L17 7Z" fill="white" />
      <circle cx="17" cy="17" r="2.3" fill="#55CFFF" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={styles.menuIcon}>
      {open ? (
        <path d="m6 6 12 12M18 6 6 18" />
      ) : (
        <path d="M4 7h16M4 12h16M4 17h16" />
      )}
    </svg>
  );
}

export default function FloatingNavbar() {
  const [activeTarget, setActiveTarget] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const activeIndex = links.findIndex((link) => link.target === activeTarget);

  useEffect(() => {
    const targets = links
      .map(({ target }) => document.getElementById(target))
      .filter((target): target is HTMLElement => target !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleTarget = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

        if (visibleTarget) setActiveTarget(visibleTarget.target.id);
      },
      { rootMargin: "-18% 0px -62% 0px", threshold: [0, 0.15, 0.4] },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <a className={styles.wordmark} href="#home" onClick={closeMenu} aria-label="Buatinaja home">
          <BrandMark />
          <span>Buatinaja</span>
        </a>

        <nav className={styles.desktopNav} aria-label="Main navigation">
          <span
            aria-hidden="true"
            className={styles.activePill}
            style={{ "--active-index": activeIndex } as React.CSSProperties}
          />
          {links.map((link) => (
            <a
              aria-current={activeTarget === link.target ? "location" : undefined}
              className={styles.navLink}
              href={link.href}
              key={link.target}
              onClick={() => setActiveTarget(link.target)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-controls="mobile-navigation"
          className={styles.menuButton}
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          <MenuIcon open={menuOpen} />
        </button>

        <nav
          aria-label="Mobile navigation"
          className={`${styles.mobileNav} ${menuOpen ? styles.mobileNavOpen : ""}`}
          id="mobile-navigation"
          inert={!menuOpen}
        >
          {links.map((link) => (
            <a
              aria-current={activeTarget === link.target ? "location" : undefined}
              className={styles.mobileLink}
              href={link.href}
              key={link.target}
              onClick={() => {
                setActiveTarget(link.target);
                closeMenu();
              }}
            >
              <span>{link.label}</span>
              <span aria-hidden="true" className={styles.linkArrow}>↗</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}