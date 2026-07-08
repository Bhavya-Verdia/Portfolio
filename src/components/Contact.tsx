"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, CheckCircle, Send, AlertCircle } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "@/lib/data";
import Reveal from "./Reveal";
import styles from "./Contact.module.css";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      setStatus("success");
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  const details = [
    { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { icon: MapPin, label: profile.location },
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className={styles.layout}>
          <Reveal className={styles.info}>
            <span className="eyebrow">Contact</span>
            <h2>
              Let&apos;s build something <span className="gradient-text">great</span>.
            </h2>
            <p>
              I&apos;m open to AI/ML roles, internships, and collaborations. Drop me a
              message and I&apos;ll get back to you soon.
            </p>

            <div className={styles.details}>
              {details.map((d) =>
                d.href ? (
                  <a key={d.label} href={d.href} className={styles.detail}>
                    <span className={styles.detailIcon}>
                      <d.icon size={18} />
                    </span>
                    {d.label}
                  </a>
                ) : (
                  <div key={d.label} className={styles.detail}>
                    <span className={styles.detailIcon}>
                      <d.icon size={18} />
                    </span>
                    {d.label}
                  </div>
                )
              )}
            </div>

            <div className={styles.socials}>
              <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className={styles.social}>
                <FaGithub size={20} />
              </a>
              <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className={styles.social}>
                <FaLinkedin size={20} />
              </a>
            </div>
          </Reveal>

          <Reveal className={styles.formWrap} delay={0.1}>
            {status === "success" ? (
              <motion.div
                className={`glass ${styles.success}`}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <CheckCircle size={44} className={styles.successIcon} />
                <h3>Message sent!</h3>
                <p>Thanks for reaching out — I&apos;ll reply as soon as I can.</p>
                <button className="btn btn-ghost" onClick={() => setStatus("idle")}>
                  Send another
                </button>
              </motion.div>
            ) : (
              <form className={`glass ${styles.form}`} onSubmit={handleSubmit}>
                <div className={styles.field}>
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" type="text" required placeholder="Your name" disabled={status === "loading"} />
                </div>
                <div className={styles.field}>
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" required placeholder="you@example.com" disabled={status === "loading"} />
                </div>
                <div className={styles.field}>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" required rows={5} placeholder="Hi Bhavya, I'd love to talk about..." disabled={status === "loading"} />
                </div>

                {/* Honeypot: hidden from users, catches bots */}
                <input
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className={styles.honeypot}
                />

                {status === "error" && (
                  <p className={styles.errorMsg}>
                    <AlertCircle size={16} /> {error}
                  </p>
                )}

                <button type="submit" className="btn btn-primary" disabled={status === "loading"}>
                  {status === "loading" ? (
                    "Sending…"
                  ) : (
                    <>
                      <Send size={16} /> Send message
                    </>
                  )}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
