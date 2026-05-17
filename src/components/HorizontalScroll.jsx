import { useEffect, useRef, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import './HorizontalScroll.css';

const PILLARS = [
  {
    num: '01',
    label: 'AI Opportunity Discovery',
    desc: 'Identify and prioritise AI opportunities using a structured, data led approach grounded in process intelligence and context enrichment.',
    href: '/ai-opportunity',
    accent: '#2563EB',
    accentLight: '#93C5FD',
    icon: '🔍',
    tag: 'Act 01 of 04',
  },
  {
    num: '02',
    label: 'Context Enrichment',
    desc: 'Enhance process data with business context to enable more accurate, compliant, and context aware AI decisions.',
    href: '/business-context',
    accent: '#7C3AED',
    accentLight: '#C4B5FD',
    icon: '🧠',
    tag: 'Act 02 of 04',
  },
  {
    num: '03',
    label: 'AI Agent Performance Monitoring',
    desc: 'Establish visibility and control over AI driven decisions through agent mining for structured monitoring and governance.',
    href: '/agent-monitoring',
    accent: '#BE185D',
    accentLight: '#F9A8D4',
    icon: '📡',
    tag: 'Act 03 of 04',
  },
  {
    num: '04',
    label: 'Platform Engineering & Excellence',
    desc: 'Scan to uncover engineering gaps, excellence opportunities and systematic remediation for a fully governed and AI ready Celonis Platform.',
    href: '/engineering',
    accent: '#0D9488',
    accentLight: '#5EEAD4',
    icon: '⚙️',
    tag: 'Act 04 of 04',
  },
];

const TOTAL_CARDS = PILLARS.length;
const AUTO_ADVANCE_DELAY = 5000; // 5 seconds

export default function HorizontalScroll() {
  const placeholderRef = useRef(null);
  const overlayRef = useRef(null);
  const isActive = useRef(false);
  const hasCompleted = useRef(false);
  const currentCard = useRef(0);
  const autoTimerRef = useRef(null);
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);

  const rawMV = useMotionValue(0);
  const smooth = useSpring(rawMV, { stiffness: 80, damping: 20, mass: 0.5 });
  const x = useTransform(smooth, [0, 1], ['0vw', `-${(TOTAL_CARDS - 1) * 100}vw`]);
  const barWidth = useTransform(smooth, [0, 1], ['0%', '100%']);

  const goToCard = useCallback(
    (idx) => {
      const clamped = Math.max(0, Math.min(TOTAL_CARDS - 1, idx));
      currentCard.current = clamped;
      rawMV.set(clamped / (TOTAL_CARDS - 1));
    },
    [rawMV]
  );

  const finishSequence = useCallback(() => {
    const overlay = overlayRef.current;
    const placeholder = placeholderRef.current;
    if (!overlay || !placeholder) return;
    clearInterval(autoTimerRef.current);
    isActive.current = false;
    hasCompleted.current = true;
    overlay.style.display = 'none';
    document.body.style.overflow = '';
    window.scrollTo({ top: placeholder.offsetTop + placeholder.offsetHeight });
  }, []);

  const startAutoAdvance = useCallback(() => {
    clearInterval(autoTimerRef.current);
    autoTimerRef.current = setInterval(() => {
      const next = currentCard.current + 1;
      if (next >= TOTAL_CARDS) {
        finishSequence();
      } else {
        goToCard(next);
      }
    }, AUTO_ADVANCE_DELAY);
  }, [goToCard, finishSequence]);

  const activateSection = useCallback(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;
    isActive.current = true;
    currentCard.current = 0;
    rawMV.set(0);
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
    startAutoAdvance();
  }, [rawMV, startAutoAdvance]);

  useEffect(() => {
    const overlay = overlayRef.current;
    const placeholder = placeholderRef.current;
    if (!overlay || !placeholder) return;

    // ── Scroll detection (desktop) ──
    const onScroll = () => {
      if (isActive.current) return;
      if (hasCompleted.current && window.scrollY < placeholder.offsetTop - 10) {
        hasCompleted.current = false;
      }
      if (hasCompleted.current) return;
      if (window.scrollY >= placeholder.offsetTop - 4) {
        activateSection();
      }
    };

    // ── Wheel handler (desktop) ──
    const onWheel = (e) => {
      if (!isActive.current) return;

      // Scroll up past first card → exit
      if (currentCard.current === 0 && e.deltaY < 0) {
        clearInterval(autoTimerRef.current);
        isActive.current = false;
        overlay.style.display = 'none';
        document.body.style.overflow = '';
        window.scrollTo({ top: placeholder.offsetTop - window.innerHeight + 10 });
        return;
      }

      e.preventDefault();

      // Advance / retreat by one card per wheel tick (with threshold)
      if (Math.abs(e.deltaY) > 30) {
        const delta = e.deltaY > 0 ? 1 : -1;
        const next = currentCard.current + delta;
        if (next >= TOTAL_CARDS) {
          finishSequence();
        } else {
          goToCard(next);
          startAutoAdvance(); // reset timer on manual scroll
        }
      }
    };

    // ── Touch handlers (mobile) ──
    const onTouchStart = (e) => {
      if (!isActive.current) return;
      touchStartX.current = e.touches[0].clientX;
      touchStartY.current = e.touches[0].clientY;
    };

    const onTouchEnd = (e) => {
      if (!isActive.current || touchStartX.current === null) return;
      const dx = touchStartX.current - e.changedTouches[0].clientX;
      const dy = touchStartY.current - e.changedTouches[0].clientY;

      // Only treat as horizontal swipe if horizontal movement dominates
      if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
        const next = currentCard.current + (dx > 0 ? 1 : -1);
        if (next >= TOTAL_CARDS) {
          finishSequence();
        } else if (next < 0) {
          clearInterval(autoTimerRef.current);
          isActive.current = false;
          overlay.style.display = 'none';
          document.body.style.overflow = '';
          window.scrollTo({ top: placeholder.offsetTop - window.innerHeight + 10 });
        } else {
          goToCard(next);
          startAutoAdvance();
        }
      }
      touchStartX.current = null;
      touchStartY.current = null;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('wheel', onWheel, { passive: false });
    overlay.addEventListener('touchstart', onTouchStart, { passive: true });
    overlay.addEventListener('touchend', onTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('wheel', onWheel);
      overlay.removeEventListener('touchstart', onTouchStart);
      overlay.removeEventListener('touchend', onTouchEnd);
      clearInterval(autoTimerRef.current);
      document.body.style.overflow = '';
    };
  }, [activateSection, goToCard, finishSequence, startAutoAdvance]);

  return (
    <>
      {/* Placeholder — holds vertical space so footer is positioned correctly */}
      <div ref={placeholderRef} className="hscroll-placeholder" />

      {/* Fixed overlay — shown during animation */}
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

        {/* Dot indicators */}
        <DotIndicators
          total={TOTAL_CARDS}
          currentCard={currentCard}
          rawMV={rawMV}
          goToCard={(i) => { goToCard(i); startAutoAdvance(); }}
        />

        {/* Progress bar */}
        <div className="hscroll-progress-track">
          <motion.div className="hscroll-progress-fill" style={{ width: barWidth }} />
        </div>
      </div>
    </>
  );
}

// Dot nav indicators
function DotIndicators({ total, currentCard, rawMV, goToCard }) {
  return (
    <div className="hscroll-dots">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          className="hscroll-dot-btn"
          onClick={() => goToCard(i)}
          aria-label={`Go to card ${i + 1}`}
        />
      ))}
    </div>
  );
}

function PillarCard({ pillar }) {
  const handleClick = () => window.open(pillar.href, '_blank', 'noopener,noreferrer');
  return (
    <div
      className="hscroll-card"
      style={{ '--accent': pillar.accent, '--accent-light': pillar.accentLight }}
      onClick={handleClick}
      tabIndex={0}
      role="button"
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
