import { motion } from 'framer-motion';

const navLinks = [
  { label: 'AI Opportunity Discovery', href: '/ai-opportunity' },
  { label: 'Business Context Enrichment', href: '/business-context' },
  { label: 'Agent Monitoring', href: '/agent-monitoring' },
  { label: 'Engineering Excellence', href: '/engineering' },
];

export default function Footer({ onContactClick }) {
  const handleScroll = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer style={{
      background: 'rgba(4, 5, 15, 0.82)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '64px 8vw 40px',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 48, marginBottom: 56 }}>
          {/* Brand */}
          <div>
            <div style={{ marginBottom: 16 }}>
              <img
                src="/kpmg-logo.png"
                alt="KPMG"
                style={{ height: 32, objectFit: 'contain', filter: 'brightness(0) invert(1)', opacity: 0.9 }}
              />
            </div>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, maxWidth: 280 }}>
              KPMG Digital Platforms team, delivering AI-powered process excellence through Celonis Process Intelligence.
            </p>
            <div style={{ marginTop: 20, display: 'flex', gap: 10 }}>
              <button
                onClick={onContactClick}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '10px 20px',
                  background: 'linear-gradient(135deg, #00338D, #6B21C8)',
                  color: 'white', fontSize: 13, fontWeight: 600,
                  border: 'none', borderRadius: 6, cursor: 'pointer',
                }}
              >
                📋 Scan QR — Contact Anuj Kumar
              </button>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 20 }}>
              The Framework
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = 'white'}
                    onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

          </div>

          {/* Event Info */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 20 }}>
              Event Details
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { label: 'Event', val: 'Celonis PI Day 2026' },
                { label: 'Theme', val: 'No AI Without PI' },
                { label: 'Presented by', val: 'KPMG Digital Platforms' },
                { label: 'Contact', val: 'Anuj Kumar, Partner' },
              ].map((item) => (
                <div key={item.label} style={{ display: 'flex', gap: 8 }}>
                  <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', minWidth: 80 }}>{item.label}:</span>
                  <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)' }}>{item.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>
            © 2026 KPMG. All rights reserved. Confidential — Event Use Only.
          </div>
        </div>
      </div>
    </footer>
  );
}
