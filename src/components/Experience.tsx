"use client";

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <section id="experience" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={styles.sectionTitle}>
          <span className="text-gradient">Experience</span> & Education
        </h2>
        
        <div className={styles.timeline}>
          {/* Experience Item */}
          <div className={styles.timelineItem}>
            <div className={styles.timelineIcon}>
              <Briefcase size={20} />
            </div>
            <div className={styles.timelineContent}>
              <div className={styles.timelineHeader}>
                <h3>AI Intern, Manufacturing IT</h3>
                <span className={styles.date}><Calendar size={14} /> Feb 2026 – Present</span>
              </div>
              <h4 className={styles.organization}>Mahindra & Mahindra Ltd. · Pune</h4>
              <ul className={styles.timelineList}>
                <li>Contributing to <strong>Smart Sequencing Digital Twin</strong> with an LLM-based buffer monitoring agent (LangGraph + XGBoost) to forecast buffer starvation.</li>
                <li>Developed a <strong>Vision AI</strong> system using YOLO to detect wheel center cap mismatches on Thar SUVs.</li>
                <li>Implemented color validation using OpenCV and an <strong>LLM-based decision layer</strong> (Qwen AI) for edge cases.</li>
                <li>Automated quality inspection workflow, achieving <strong>97% detection accuracy</strong>.</li>
              </ul>
            </div>
          </div>

          {/* Education Item */}
          <div className={styles.timelineItem}>
            <div className={styles.timelineIcon}>
              <GraduationCap size={20} />
            </div>
            <div className={styles.timelineContent}>
              <div className={styles.timelineHeader}>
                <h3>B.Tech CSE (AI & Analytics)</h3>
                <span className={styles.date}><Calendar size={14} /> 2022 – 2026</span>
              </div>
              <h4 className={styles.organization}>MIT ADT University · Pune</h4>
              <p className={styles.educationDetails}>
                Final-year student building production-grade AI systems, LLM-based agents, RAG pipelines, and Vision AI solutions.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
