"use client";

import { MapPin, Mail, Cpu, Eye, Bot } from "lucide-react";
import { profile, stats, terminalLines } from "@/lib/data";
import Reveal from "./Reveal";
import styles from "./About.module.css";

const focus = [
  { icon: Bot, title: "LLM agents & RAG", desc: "LangGraph / LangChain multi-agent systems with retrieval and safety gates." },
  { icon: Eye, title: "Vision AI", desc: "YOLO + OpenCV pipelines for real-world quality inspection." },
  { icon: Cpu, title: "Production ML", desc: "From notebooks to FastAPI services that actually ship." },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className={styles.layout}>
          <Reveal className={styles.intro}>
            <span className="eyebrow">About</span>
            <h2>
              Turning models into <span className="gradient-text">reliable products</span>.
            </h2>
            <p>
              I&apos;m a final-year Computer Science engineer specializing in AI &amp;
              Analytics. I love the messy middle between a promising model and a
              dependable system — evaluation, guardrails, latency, and the last-mile
              engineering that makes AI trustworthy.
            </p>
            <p>
              Most recently I interned with Mahindra &amp; Mahindra&apos;s
              Manufacturing IT team, building Vision-AI inspection and LLM agents
              for the factory floor — hitting 97% detection accuracy in production.
            </p>

            <div className={styles.meta}>
              <span className={styles.metaItem}>
                <MapPin size={16} /> {profile.location}
              </span>
              <a className={styles.metaItem} href={`mailto:${profile.email}`}>
                <Mail size={16} /> {profile.email}
              </a>
            </div>

            <div className={styles.focus}>
              {focus.map((f) => (
                <div key={f.title} className={styles.focusCard}>
                  <div className={styles.focusIcon}>
                    <f.icon size={18} />
                  </div>
                  <div>
                    <h3 className={styles.focusTitle}>{f.title}</h3>
                    <p className={styles.focusDesc}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className={styles.statsWrap} delay={0.1}>
            <div className={`glass ${styles.terminal}`} aria-label="Profile summary">
              <div className={styles.terminalBar}>
                <span className={styles.dot} />
                <span className={styles.dot} />
                <span className={styles.dot} />
                <span className={styles.terminalPath}>bhavya@portfolio ~ %</span>
              </div>
              <div className={styles.terminalBody}>
                {terminalLines.map((line) => (
                  <div key={line.key} className={styles.terminalLine}>
                    <span className={styles.prompt}>&gt;</span>
                    <span className={styles.key}>{line.key}:</span>
                    <span className={styles.value}>{line.value}</span>
                  </div>
                ))}
                <div className={styles.terminalLine}>
                  <span className={styles.prompt}>&gt;</span>
                  <span className={styles.cursor} aria-hidden="true" />
                </div>
              </div>
            </div>

            <div className={styles.stats}>
              {stats.map((s) => (
                <div key={s.label} className={`glass ${styles.stat}`}>
                  <span className={`gradient-text ${styles.statValue}`}>{s.value}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
