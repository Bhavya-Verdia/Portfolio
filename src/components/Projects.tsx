"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code2, X } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import styles from './Projects.module.css';

const projects = [
  {
    id: 'ayura',
    title: 'Ayura AI',
    subtitle: 'AI Powered Health and Wellness Platform',
    description: 'Architected personalized health plan generation via a 4-tier pipeline (rule engine, RAG retrieval, LLM reasoning, safety supervisor). Built RAG pipeline with ChromaDB over Ayurvedic knowledge bases and designed a LangGraph multi-agent system.',
    tags: ['Python', 'FastAPI', 'LangGraph', 'ChromaDB', 'GPT-5.4 mini', 'React'],
    links: { github: '#', live: '#' },
    longDescription: 'Ayura AI is a comprehensive health and wellness platform designed to provide personalized Gym, Yoga, Diet, and Home Remedies plans. The core of the system is a 4-tier pipeline that ensures safe and accurate recommendations by cross-referencing user medical conditions against Ayurvedic knowledge bases via a custom RAG pipeline built with ChromaDB. The entire platform is orchestrated using LangGraph to manage multiple specialized agents.'
  },
  {
    id: 'placify',
    title: 'Placify AI',
    subtitle: 'Placement Prediction & Career Platform',
    description: 'Developed a full-stack AI platform using Machine Learning models to predict job roles and salaries. Built intelligent RAG pipelines using OpenAI and LangChain for personalized career guidance, alongside a ReAct-based career coach agent.',
    tags: ['React', 'FastAPI', 'Scikit-learn', 'LangChain', 'Azure OpenAI'],
    links: { github: '#', live: '#' },
    longDescription: 'Placify AI helps students prepare for their careers by predicting their ideal job roles and expected salaries using Scikit-learn models. It features an intelligent RAG pipeline built with LangChain and ChromaDB that identifies skill gaps based on the user\'s resume. A standout feature is the ReAct-based career coach agent that provides real-time, adaptive mock interviews and dynamic follow-up generation.'
  }
];

export default function Projects() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedProject = projects.find(p => p.id === selectedId);

  return (
    <section id="projects" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={styles.sectionTitle}>
          Featured <span className="text-gradient">Projects</span>
        </h2>
        
        <div className={styles.grid}>
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              layoutId={`card-${project.id}`}
              className={styles.card}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedId(project.id)}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                  <Code2 size={24} className={styles.icon} />
                </div>
                <div className={styles.links}>
                  <a href={project.links.github} onClick={e => e.stopPropagation()} className={styles.linkIcon}><FaGithub size={20} /></a>
                  <a href={project.links.live} onClick={e => e.stopPropagation()} className={styles.linkIcon}><ExternalLink size={20} /></a>
                </div>
              </div>
              
              <motion.h3 layoutId={`title-${project.id}`} className={styles.title}>{project.title}</motion.h3>
              <motion.h4 layoutId={`subtitle-${project.id}`} className={styles.subtitle}>{project.subtitle}</motion.h4>
              <motion.p layoutId={`desc-${project.id}`} className={styles.description}>{project.description}</motion.p>
              
              <div className={styles.tags}>
                {project.tags.map((tag, i) => (
                  <span key={i} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedId && selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={styles.overlay}
              onClick={() => setSelectedId(null)}
            />
            <div className={styles.modalContainer} onClick={() => setSelectedId(null)}>
              <motion.div 
                layoutId={`card-${selectedId}`} 
                className={styles.modal}
                onClick={e => e.stopPropagation()}
              >
                <button className={styles.closeBtn} onClick={() => setSelectedId(null)}>
                  <X size={24} />
                </button>
                
                <div className={styles.modalHeader}>
                  <div className={styles.iconWrapper}>
                    <Code2 size={32} className={styles.icon} />
                  </div>
                  <div className={styles.links}>
                    <a href={selectedProject.links.github} className={styles.linkIcon}><FaGithub size={24} /></a>
                    <a href={selectedProject.links.live} className={styles.linkIcon}><ExternalLink size={24} /></a>
                  </div>
                </div>

                <motion.h3 layoutId={`title-${selectedId}`} className={styles.modalTitle}>{selectedProject.title}</motion.h3>
                <motion.h4 layoutId={`subtitle-${selectedId}`} className={styles.modalSubtitle}>{selectedProject.subtitle}</motion.h4>
                
                <div className={styles.modalContent}>
                  <motion.p layoutId={`desc-${selectedId}`} className={styles.modalDescription}>
                    {selectedProject.description}
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h5 className={styles.modalSectionTitle}>Deep Dive</h5>
                    <p className={styles.modalLongDescription}>{selectedProject.longDescription}</p>
                  </motion.div>
                </div>

                <div className={styles.tags}>
                  {selectedProject.tags.map((tag, i) => (
                    <span key={i} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
