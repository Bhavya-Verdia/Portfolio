"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowUpRight, X, Check } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects, moreProjects } from "@/lib/data";
import Reveal from "./Reveal";
import styles from "./Projects.module.css";

export default function Projects() {
  const [openId, setOpenId] = useState<string | null>(null);
  const active = projects.find((p) => p.id === openId) ?? null;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenId(null);
    document.body.style.overflow = openId ? "hidden" : "";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [openId]);

  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Selected work</span>
          <h2>
            Featured <span className="gradient-text">projects</span>
          </h2>
          <p>A couple of end-to-end AI systems — tap a card for the deep dive.</p>
        </Reveal>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.08}>
              <motion.article
                layoutId={`card-${project.id}`}
                className={styles.card}
                onClick={() => setOpenId(project.id)}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <div className={styles.cardTop}>
                  <motion.span layoutId={`year-${project.id}`} className={styles.year}>
                    {project.year}
                  </motion.span>
                  <div className={styles.cardLinks} onClick={(e) => e.stopPropagation()}>
                    {project.links.github && (
                      <a href={project.links.github} target="_blank" rel="noreferrer" aria-label="GitHub repo">
                        <FaGithub size={18} />
                      </a>
                    )}
                    {project.links.live && (
                      <a href={project.links.live} target="_blank" rel="noreferrer" aria-label="Live site">
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <motion.h3 layoutId={`title-${project.id}`} className={styles.title}>
                  {project.title}
                </motion.h3>
                <motion.p layoutId={`subtitle-${project.id}`} className={styles.subtitle}>
                  {project.subtitle}
                </motion.p>
                <p className={styles.desc}>{project.description}</p>

                <div className={styles.tags}>
                  {project.tags.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>

                <span className={styles.readMore}>
                  Case study <ArrowUpRight size={16} />
                </span>
              </motion.article>
            </Reveal>
          ))}
        </div>

        <Reveal className={styles.moreHead} delay={0.05}>
          <h3>More projects</h3>
          <p>
            More on{" "}
            <a href="https://github.com/Bhavya-Verdia" target="_blank" rel="noreferrer">
              GitHub
            </a>
            .
          </p>
        </Reveal>

        <div className={styles.miniGrid}>
          {moreProjects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className={styles.miniCard}
              >
                <div className={styles.miniTop}>
                  <h4 className={styles.miniTitle}>{p.title}</h4>
                  <span className={styles.miniIcon} aria-hidden="true">
                    <FaGithub size={17} />
                    <ArrowUpRight size={15} />
                  </span>
                </div>
                <p className={styles.miniDesc}>{p.description}</p>
                <div className={styles.tags}>
                  {p.tags.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <>
            <motion.div
              className={styles.overlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpenId(null)}
            />
            <div className={styles.modalWrap} onClick={() => setOpenId(null)}>
              <motion.div
                layoutId={`card-${active.id}`}
                className={styles.modal}
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-label={active.title}
              >
                <button className={styles.close} onClick={() => setOpenId(null)} aria-label="Close">
                  <X size={22} />
                </button>

                <motion.span layoutId={`year-${active.id}`} className={styles.year}>
                  {active.year}
                </motion.span>
                <motion.h3 layoutId={`title-${active.id}`} className={styles.modalTitle}>
                  {active.title}
                </motion.h3>
                <motion.p layoutId={`subtitle-${active.id}`} className={styles.modalSubtitle}>
                  {active.subtitle}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  <p className={styles.modalBody}>{active.longDescription}</p>

                  <h4 className={styles.modalHeading}>Highlights</h4>
                  <ul className={styles.highlights}>
                    {active.highlights.map((h) => (
                      <li key={h}>
                        <Check size={16} /> {h}
                      </li>
                    ))}
                  </ul>

                  <div className={styles.tags}>
                    {active.tags.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className={styles.modalActions}>
                    {active.links.github && (
                      <a href={active.links.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
                        <FaGithub size={17} /> Code
                      </a>
                    )}
                    {active.links.live && (
                      <a href={active.links.live} target="_blank" rel="noreferrer" className="btn btn-primary">
                        <ExternalLink size={17} /> Live demo
                      </a>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
