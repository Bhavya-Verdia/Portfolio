"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import styles from "./CustomCursor.module.css";

/**
 * Precision-pointer cursor. Always mounted, but hidden via CSS on coarse
 * pointers and when reduced-motion is requested (see module CSS), so no
 * state-in-effect gating is needed.
 */
export default function CustomCursor() {
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 350, damping: 28, mass: 0.4 });
  const ringY = useSpring(y, { stiffness: 350, damping: 28, mass: 0.4 });

  useEffect(() => {
    // Skip listeners entirely on devices without a precise pointer.
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = e.target as HTMLElement;
      setHovering(Boolean(el.closest("a, button, [role='button'], input, textarea")));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <div className={styles.cursor} aria-hidden="true">
      <motion.div className={styles.dot} style={{ x, y }} animate={{ scale: hovering ? 0 : 1 }} transition={{ duration: 0.15 }} />
      <motion.div
        className={styles.ring}
        style={{ x: ringX, y: ringY }}
        animate={{ scale: hovering ? 1.6 : 1, opacity: hovering ? 1 : 0.6 }}
        transition={{ duration: 0.2 }}
      />
    </div>
  );
}
