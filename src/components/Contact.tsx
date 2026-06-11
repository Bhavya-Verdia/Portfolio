"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './Contact.module.css';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    
    // Simulate network request
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };
  return (
    <section id="contact" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.contactWrapper}>
          <div className={styles.contactInfo}>
            <h2 className={styles.title}>
              Let's build something <span className="text-gradient">amazing</span>
            </h2>
            <p className={styles.description}>
              I'm always open to discussing new opportunities, collaborations, or discussing the latest in Generative AI and computer vision.
            </p>
            
            <div className={styles.details}>
              <a href="mailto:verdiabhavya08@gmail.com" className={styles.detailItem}>
                <div className={styles.iconWrapper}><Mail size={20} /></div>
                <span>verdiabhavya08@gmail.com</span>
              </a>
              <div className={styles.detailItem}>
                <div className={styles.iconWrapper}><Phone size={20} /></div>
                <span>+91 8905040118</span>
              </div>
              <div className={styles.detailItem}>
                <div className={styles.iconWrapper}><MapPin size={20} /></div>
                <span>Pune, Maharashtra</span>
              </div>
            </div>
            
            <div className={styles.socials}>
              <a href="https://github.com/Bhavya-Verdia" target="_blank" rel="noreferrer" className={styles.socialBtn}>
                <FaGithub size={24} />
              </a>
              <a href="https://linkedin.com/in/bhavyaverdia" target="_blank" rel="noreferrer" className={styles.socialBtn}>
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
          
          <div className={styles.formWrapper}>
            {formState === 'success' ? (
              <motion.div 
                className={styles.successMessage}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <CheckCircle size={48} className={styles.successIcon} />
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. I'll get back to you soon.</p>
                <button onClick={() => setFormState('idle')} className={styles.secondaryBtn}>
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" required placeholder="John Doe" disabled={formState === 'loading'} />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" required placeholder="john@example.com" disabled={formState === 'loading'} />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" required rows={5} placeholder="Hello Bhavya, I'd like to talk about..." disabled={formState === 'loading'}></textarea>
                </div>
                <button type="submit" className={styles.submitBtn} disabled={formState === 'loading'}>
                  {formState === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
