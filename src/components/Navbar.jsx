import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const navItems = [
  { label: 'Overview', href: '/', isHome: true },
  { label: 'AI Opportunity Discovery', href: '/ai-opportunity' },
  { label: 'Business Context', href: '/business-context' },
  { label: 'Agent Monitoring', href: '/agent-monitoring' },
  { label: 'Engineering Excellence', href: '/engineering' },
];

export default function Navbar({ onContactClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, item) => {
    e.preventDefault();
    setMobileOpen(false);
    if (item.isHome) {
      // Scroll to top of current page or navigate home
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (window.location.pathname !== '/') {
        window.location.href = '/';
      }
    } else {
      // Open section in new tab
      window.open(item.href, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >



        {/* Nav Links */}
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                target={item.isHome ? undefined : '_blank'}
                rel={item.isHome ? undefined : 'noopener noreferrer'}
              >
                {item.label}
                {!item.isHome && (
                  <svg width="9" height="9" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: 5, opacity: 0.5 }}>
                    <path d="M2 10L10 2M10 2H5M10 2v5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <button className="nav-contact-btn" onClick={onContactClick}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M3 9h18M9 21V9" />
          </svg>
          Contact Us
        </button>

        {/* Mobile Toggle */}
        <button
          className="nav-mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span style={{ transform: mobileOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
          <span style={{ opacity: mobileOpen ? 0 : 1 }} />
          <span style={{ transform: mobileOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
        </button>
      </motion.nav>
    </>
  );
}

/* ── Contact QR Modal — exported for use from parent ── */
export function ContactModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal-content"
            initial={{ scale: 0.85, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 22, stiffness: 320 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={onClose}>✕</button>
            <div className="qr-modal">
              <div className="qr-modal-header">
                <span className="qr-modal-label">Scan QR to contact us</span>
                <h3 className="qr-modal-title">Get in Touch</h3>
              </div>
              <div className="qr-modal-image-wrap">
                <img src="/qr-mailto.png" alt="QR Code — Email Anuj Kumar" />
              </div>
              <div className="qr-modal-contact">
                <div className="qr-modal-name">Anuj Kumar</div>
                <div className="qr-modal-role">Partner, Digital Platforms</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', marginTop: 4 }}>anujkumar2@kpmg.com</div>
                <div className="qr-modal-company">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="white">
                    <rect x="0" y="0" width="5" height="5" rx="0.3" />
                    <rect x="7" y="0" width="5" height="5" rx="0.3" />
                    <rect x="0" y="7" width="5" height="5" rx="0.3" />
                    <rect x="7" y="7" width="5" height="5" rx="0.3" />
                  </svg>
                  KPMG Digital Platforms
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
