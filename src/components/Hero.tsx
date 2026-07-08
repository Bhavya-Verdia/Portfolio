"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, Download, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "@/lib/data";
import AuroraBackground from "./AuroraBackground";
import styles from "./Hero.module.css";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <AuroraBackground />

      <div className={`container ${styles.inner}`}>
        <motion.span
          className={styles.badge}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
        >
          <span className={styles.pulse} aria-hidden="true" />
          Open to AI / ML roles &amp; internships
        </motion.span>

        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.06, ease }}
        >
          Building intelligent systems
          <br />
          with <span className="gradient-text">Vision AI &amp; LLMs</span>
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.16, ease }}
        >
          Hi, I&apos;m <strong>{profile.name}</strong> — an {profile.role}.{" "}
          {profile.summary}
        </motion.p>

        <motion.div
          className={styles.ctas}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28, ease }}
        >
          <a href="#projects" className="btn btn-primary">
            <Sparkles size={17} />
            View my work
            <ArrowRight size={17} />
          </a>
          <a href={profile.resumeUrl} download className="btn btn-ghost">
            <Download size={17} />
            Download résumé
          </a>

          <div className={styles.socials}>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className={styles.social}
            >
              <FaGithub size={20} />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className={styles.social}
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className={styles.scrollCue}
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <span>Scroll</span>
        <ArrowDown size={16} />
      </motion.a>
    </section>
  );
}
