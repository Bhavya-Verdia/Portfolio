"use client";

import { Brain, Network, Server, Wrench } from "lucide-react";
import { skillGroups } from "@/lib/data";
import Reveal from "./Reveal";
import styles from "./Skills.module.css";

const icons = [Brain, Network, Server, Wrench];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Toolkit</span>
          <h2>
            Technical <span className="gradient-text">skills</span>
          </h2>
          <p>The stack I reach for when taking an idea from prototype to production.</p>
        </Reveal>

        <div className={styles.grid}>
          {skillGroups.map((group, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={group.title} delay={i * 0.07}>
                <div className={`glass ${styles.card}`}>
                  <div className={styles.head}>
                    <div className={styles.icon}>
                      <Icon size={18} />
                    </div>
                    <h3 className={styles.title}>{group.title}</h3>
                  </div>
                  <div className={styles.chips}>
                    {group.skills.map((s) => (
                      <span key={s} className="chip">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
