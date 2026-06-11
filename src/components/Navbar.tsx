"use client";

import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import styles from './Navbar.module.css';

const navItems = [
  { name: 'Home', href: '#' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('Home');
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section
      const sections = navItems.map(item => item.name.toLowerCase());
      
      for (const section of sections.reverse()) {
        const element = document.getElementById(section === 'home' ? '' : section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section.charAt(0).toUpperCase() + section.slice(1));
            break;
          }
        } else if (section === 'home' && window.scrollY < 100) {
           setActiveSection('Home');
           break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.div
        className={styles.progressBar}
        style={{ scaleX }}
      />
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            B<span className="text-gradient">V</span>
          </div>
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href}
                  className={`${styles.navLink} ${activeSection === item.name ? styles.active : ''}`}
                  onClick={(e) => {
                    if (item.href === '#') {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                >
                  {item.name}
                  {activeSection === item.name && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className={styles.activeIndicator}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
