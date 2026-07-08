"use client";

import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile, navItems } from "@/lib/data";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <hr className="rule" />
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <a href="#home" className={styles.logo}>
            B<span className="gradient-text">V</span>
          </a>
          <p>Designing and shipping trustworthy AI systems.</p>
        </div>

        <nav className={styles.links} aria-label="Footer">
          {navItems.map((item) => (
            <a key={item.name} href={item.href}>
              {item.name}
            </a>
          ))}
        </nav>

        <div className={styles.right}>
          <div className={styles.socials}>
            <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub size={18} />
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin size={18} />
            </a>
          </div>
          <a href="#home" className={styles.top} aria-label="Back to top">
            Top <ArrowUp size={15} />
          </a>
        </div>
      </div>

      <div className={`container ${styles.legal}`}>
        <span>
          © {year} {profile.name}. All rights reserved.
        </span>
        <span>Built with Next.js &amp; Framer Motion.</span>
      </div>
    </footer>
  );
}
