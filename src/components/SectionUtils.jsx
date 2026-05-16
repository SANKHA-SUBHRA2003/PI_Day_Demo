import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Section.css';

/* Reusable animated section wrapper */
export function SectionHeading({ num, label, title, subtitle, accentColor }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div className="section-intro" ref={ref}>
      <motion.div
        className="section-num"
        style={{
          background: `${accentColor}18`,
          borderColor: `${accentColor}40`,
          color: accentColor,
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        {num}
      </motion.div>

      {label && (
        <motion.div
          className="section-label"
          style={{ color: accentColor }}
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {label}
        </motion.div>
      )}

      <AnimatedTitle title={title} inView={inView} />

      {subtitle && (
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          dangerouslySetInnerHTML={{ __html: subtitle }}
        />
      )}
    </div>
  );
}

function AnimatedTitle({ title, inView }) {
  const words = title.split(' ');

  return (
    <h2 className="section-title">
      {words.map((word, i) => (
        <motion.span
          key={i}
          style={{ display: 'inline-block', marginRight: '0.25em' }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 + i * 0.08, ease: [0.4, 0, 0.2, 1] }}
        >
          {word}
        </motion.span>
      ))}
    </h2>
  );
}

/* Animated card */
export function AnimCard({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      className={`info-card ${className}`}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* Background orbs */
export function BgOrbs({ color1, color2 }) {
  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      <div
        className="bg-orb bg-orb-1"
        style={{ background: `radial-gradient(circle, ${color1 || '#00338D'}, transparent)` }}
      />
      <div
        className="bg-orb bg-orb-2"
        style={{ background: `radial-gradient(circle, ${color2 || '#6B21C8'}, transparent)` }}
      />
    </div>
  );
}

/* Slide-from-side heading for dramatic scroll effect */
export function SlideHeading({ children, fromRight = false, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: fromRight ? 80 : -80 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
