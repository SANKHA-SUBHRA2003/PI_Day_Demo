import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import './HorizontalScroll.css';

const PILLARS = [
  { num: '01', label: 'AI Opportunity Discovery', desc: 'Identify and prioritize AI opportunities using a structured, data-led approach grounded in process intelligence.', href: '/ai-opportunity', accent: '#2563EB', accentLight: '#93C5FD', icon: '🔍', tag: 'Act 01 of 04' },
  { num: '02', label: 'Business Context Enrichment', desc: 'Enhance process data with business context to enable more accurate, compliant, and context-aware AI decisions.', href: '/business-context', accent: '#7C3AED', accentLight: '#C4B5FD', icon: '🧠', tag: 'Act 02 of 04' },
  { num: '03', label: 'AI Agent Monitoring', desc: 'Establish visibility and control over AI-driven decisions through structured monitoring and governance frameworks.', href: '/agent-monitoring', accent: '#BE185D', accentLight: '#F9A8D4', icon: '📡', tag: 'Act 03 of 04' },
  { num: '04', label: 'Engineering Excellence', desc: 'Build a robust and scalable data and technology foundation to enable reliable AI and analytics outcomes.', href: '/engineering', accent: '#0D9488', accentLight: '#5EEAD4', icon: '⚙️', tag: 'Act 04 of 04' },
];

const TOTAL_DELTA = 1400; // total wheel delta to scroll all 4 cards

export default function HorizontalScroll() {
  const placeholderRef = useRef(null);
  const overlayRef = useRef(null);
  const isActive = useRef(false);
  const hasCompleted = useRef(false); // prevents re-activation after finishing
  const accumulated = useRef(0);

  const rawMV = useMotionValue(0);
  const smooth = useSpring(rawMV, { stiffness: 80, damping: 20, mass: 0.5 });
  const x = useTransform(smooth, [0, 1], ['0vw', '-300vw']);
  const barWidth = useTransform(smooth, [0, 1], ['0%', '100%']);

  useEffect(() => {
    const overlay = overlayRef.current;
    const placeholder = placeholderRef.current;
    if (!overlay || !placeholder) return;

    // Activate when user scrolls to the placeholder position
    const onScroll = () => {
      if (isActive.current) return;

      // Reset completion guard once user scrolls back above the section
      if (hasCompleted.current && window.scrollY < placeholder.offsetTop - 10) {
        hasCompleted.current = false;
      }

      // Don't re-activate after the animation has already completed
      if (hasCompleted.current) return;

      if (window.scrollY >= placeholder.offsetTop - 4) {
        isActive.current = true;
        accumulated.current = 0;
        rawMV.set(0);
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
      }
    };


    const onWheel = (e) => {
      if (!isActive.current) return;
      const curr = accumulated.current;

      // Scroll UP past the beginning → go back to hero
      if (curr <= 0 && e.deltaY < 0) {
        isActive.current = false;
        overlay.style.display = 'none';
        document.body.style.overflow = '';
        window.scrollTo({ top: placeholder.offsetTop - window.innerHeight + 10 });
        return;
      }

      e.preventDefault();
      const next = Math.max(0, Math.min(TOTAL_DELTA, curr + e.deltaY));
      accumulated.current = next;
      rawMV.set(next / TOTAL_DELTA);

      // Animation complete → jump to footer
      if (next >= TOTAL_DELTA) {
        isActive.current = false;
        hasCompleted.current = true; // guard against re-activation from the scroll jump
        overlay.style.display = 'none';
        document.body.style.overflow = '';
        // Jump scroll to just after the placeholder so footer is visible
        window.scrollTo({ top: placeholder.offsetTop + placeholder.offsetHeight });
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('wheel', onWheel, { passive: false });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('wheel', onWheel);
      document.body.style.overflow = '';
    };
  }, [rawMV]);

  return (
    <>
      {/* Placeholder — holds vertical space in page flow so footer is positioned correctly */}
      <div ref={placeholderRef} className="hscroll-placeholder" />

      {/* Fixed overlay — appears over the whole screen during animation */}
      <div ref={overlayRef} className="hscroll-overlay">
        {/* Label */}
        <div className="hscroll-label">
          <span className="hscroll-label-line" />
          How Process Intelligence Accelerates AI
          <span className="hscroll-label-line" />
        </div>

        {/* Card track */}
        <motion.div className="hscroll-track" style={{ x }}>
          {PILLARS.map((p, i) => <PillarCard key={i} pillar={p} />)}
        </motion.div>

        {/* Progress bar */}
        <div className="hscroll-progress-track">
          <motion.div className="hscroll-progress-fill" style={{ width: barWidth }} />
        </div>
      </div>
    </>
  );
}

function PillarCard({ pillar }) {
  const handleClick = () => window.open(pillar.href, '_blank', 'noopener,noreferrer');
  return (
    <div
      className="hscroll-card"
      style={{ '--accent': pillar.accent, '--accent-light': pillar.accentLight }}
      onClick={handleClick} tabIndex={0} role="button"
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
    >
      <div className="hscroll-card-num">{pillar.num}</div>
      <div className="hscroll-card-glow" />
      <div className="hscroll-card-inner">
        <div className="hscroll-card-bar" />
        <div className="hscroll-card-tag">{pillar.tag}</div>
        <div className="hscroll-card-icon">{pillar.icon}</div>
        <h3 className="hscroll-card-label">{pillar.label}</h3>
        <p className="hscroll-card-desc">{pillar.desc}</p>
        <div className="hscroll-card-cta">
          <span>Explore</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}
