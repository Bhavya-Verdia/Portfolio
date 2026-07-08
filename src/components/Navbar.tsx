"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, FileText } from "lucide-react";
import { navItems, profile } from "@/lib/data";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track the section currently in view.
  useEffect(() => {
    const ids = navItems.map((i) => i.href.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.div className={styles.progress} style={{ scaleX }} aria-hidden="true" />

      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <nav className={styles.nav} aria-label="Primary">
          <a href="#home" className={styles.logo} aria-label={`BV — ${profile.name}, home`}>
            B<span className="gradient-text">V</span>
          </a>

          <ul className={styles.links}>
            {navItems.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = active === id;
              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={`${styles.link} ${isActive ? styles.active : ""}`}
                  >
                    {item.name}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className={styles.underline}
                        transition={{ type: "spring", bounce: 0.25, duration: 0.6 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className={styles.right}>
            <a
              href={profile.resumeUrl}
              className={`btn btn-ghost ${styles.resumeBtn}`}
              download
            >
              <FileText size={16} />
              Résumé
            </a>
            <button
              className={styles.menuBtn}
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button
              className={styles.closeBtn}
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={26} />
            </button>
            <ul className={styles.mobileLinks}>
              {navItems.map((item, i) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.06 }}
                >
                  <a href={item.href} onClick={() => setMenuOpen(false)}>
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
            <a
              href={profile.resumeUrl}
              download
              className="btn btn-primary"
              onClick={() => setMenuOpen(false)}
            >
              <FileText size={16} />
              Download Résumé
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
