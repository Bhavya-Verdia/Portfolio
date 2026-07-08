"use client";

import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";
import { timeline } from "@/lib/data";
import Reveal from "./Reveal";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Career</span>
          <h2>
            Experience &amp; <span className="gradient-text">education</span>
          </h2>
          <p>Where I&apos;ve been building, and what I&apos;m studying.</p>
        </Reveal>

        <div className={styles.timeline}>
          {timeline.map((item, i) => {
            const Icon = item.kind === "work" ? Briefcase : GraduationCap;
            return (
              <Reveal key={`${item.org}-${i}`} delay={i * 0.08} className={styles.item}>
                <div className={styles.marker}>
                  <div className={styles.icon}>
                    <Icon size={18} />
                  </div>
                  {i < timeline.length - 1 && <div className={styles.line} />}
                </div>

                <div className={`glass ${styles.card}`}>
                  <div className={styles.top}>
                    <h3 className={styles.role}>{item.role}</h3>
                    {item.current && <span className={styles.now}>Current</span>}
                  </div>
                  <div className={styles.org}>{item.org}</div>
                  <div className={styles.metaRow}>
                    <span>
                      <Calendar size={14} /> {item.period}
                    </span>
                    <span>
                      <MapPin size={14} /> {item.location}
                    </span>
                  </div>
                  <ul className={styles.points}>
                    {item.points.map((p, j) => (
                      <li key={j}>{p}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
