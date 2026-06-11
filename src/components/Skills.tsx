"use client";

import { motion } from 'framer-motion';
import styles from './Skills.module.css';

const skillCategories = [
  {
    title: 'AI & Machine Learning',
    skills: ['Scikit-learn', 'PyTorch', 'YOLO', 'OpenCV', 'NLP', 'Generative AI'],
    level: 95
  },
  {
    title: 'LLM & Orchestration',
    skills: ['LangChain', 'LangGraph', 'RAG', 'Azure AI Foundry', 'OpenAI APIs'],
    level: 90
  },
  {
    title: 'Backend & Databases',
    skills: ['Python', 'Java', 'FastAPI', 'Flask', 'MySQL', 'MongoDB', 'ChromaDB'],
    level: 85
  },
  {
    title: 'Tools & Fundamentals',
    skills: ['DSA', 'OOP', 'DBMS', 'Git', 'Docker', 'Pandas', 'NumPy', 'Transformers'],
    level: 88
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={styles.sectionTitle}>
          Technical <span className="text-gradient">Skills</span>
        </h2>
        
        <div className={styles.skillsGrid}>
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              className={styles.skillCard}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className={styles.categoryHeader}>
                <h3 className={styles.categoryTitle}>{category.title}</h3>
                <span className={styles.categoryLevel}>{category.level}%</span>
              </div>
              <div className={styles.progressTrack}>
                <motion.div 
                  className={styles.progressFill}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${category.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
                />
              </div>
              <div className={styles.tagsContainer}>
                {category.skills.map((skill, i) => (
                  <span key={i} className={styles.skillTag}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
