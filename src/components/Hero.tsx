"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="" className={styles.heroSection}>
      <ParticleBackground />
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={styles.content}
        >
          <div className={styles.badge}>
            <Terminal size={14} className={styles.badgeIcon} />
            <span>AI & Analytics Engineer</span>
          </div>
          
          <h1 className={styles.title}>
            Building intelligent systems with <br />
            <span className="text-gradient">Vision AI & LLMs</span>
          </h1>
          
          <p className={styles.subtitle}>
            Hi, I'm <span className={styles.highlight}>Bhavya Verdia</span>. I specialize in designing and deploying production-grade Generative AI agents, RAG pipelines, and computer vision solutions.
          </p>
          
          <motion.div 
            className={styles.ctaGroup}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <a href="#projects" className={styles.primaryBtn}>
              View My Work
              <ArrowRight size={18} />
            </a>
            <a href="https://github.com/Bhavya-Verdia" target="_blank" rel="noreferrer" className={styles.secondaryBtn}>
              GitHub
            </a>
            <a href="https://linkedin.com/in/bhavyaverdia" target="_blank" rel="noreferrer" className={styles.secondaryBtn}>
              LinkedIn
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
