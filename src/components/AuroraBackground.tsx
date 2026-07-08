import styles from "./AuroraBackground.module.css";

/**
 * Lightweight, GPU-friendly animated aurora made from blurred CSS gradient
 * blobs + a faint grid. No JS, no WebGL — instant on mobile. Animations
 * pause automatically under prefers-reduced-motion (see module CSS).
 */
export default function AuroraBackground() {
  return (
    <div className={styles.aurora} aria-hidden="true">
      <div className={styles.grid} />
      <div className={`${styles.blob} ${styles.b1}`} />
      <div className={`${styles.blob} ${styles.b2}`} />
      <div className={`${styles.blob} ${styles.b3}`} />
      <div className={styles.grain} />
    </div>
  );
}
