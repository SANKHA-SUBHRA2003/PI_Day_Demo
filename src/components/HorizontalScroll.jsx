import './HorizontalScroll.css';

const PILLARS = [
  {
    num: '01',
    label: 'AI Opportunity Discovery',
    desc: 'Identify and prioritise AI opportunities using a structured, data led approach grounded in process intelligence and context enrichment.',
    sectionId: 'ai-opportunity',
    accent: '#2563EB',
    accentLight: '#93C5FD',
    icon: '🔍',
  },
  {
    num: '02',
    label: 'Context Enrichment',
    desc: 'Enhance process data with business context to enable more accurate, compliant, and context aware AI decisions.',
    sectionId: 'business-context',
    accent: '#7C3AED',
    accentLight: '#C4B5FD',
    icon: '🧠',
  },
  {
    num: '03',
    label: 'AI Agent Performance Monitoring',
    desc: 'Establish visibility and control over AI driven decisions through agent mining for structured monitoring and governance.',
    sectionId: 'agent-monitoring',
    accent: '#BE185D',
    accentLight: '#F9A8D4',
    icon: '📡',
  },
  {
    num: '04',
    label: 'Platform Engineering & Excellence',
    desc: 'Scan to uncover engineering gaps, excellence opportunities and systematic remediation for a fully governed and AI ready Celonis Platform.',
    sectionId: 'engineering',
    accent: '#0D9488',
    accentLight: '#5EEAD4',
    icon: '⚙️',
  },
];

export default function HorizontalScroll() {
  return (
    <div className="pillars-section">
      <div className="pillars-label">
        <span className="pillars-label-line" />
        How Process Intelligence Accelerates AI
        <span className="pillars-label-line" />
      </div>
      <div className="pillars-grid">
        {PILLARS.map((p, i) => (
          <PillarCard key={i} pillar={p} />
        ))}
      </div>
    </div>
  );
}

function PillarCard({ pillar }) {
  const handleClick = () => {
    const el = document.getElementById(pillar.sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className="pillar-card"
      style={{ '--accent': pillar.accent, '--accent-light': pillar.accentLight }}
      onClick={handleClick}
      tabIndex={0}
      role="button"
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
    >
      <div className="pillar-card-num">{pillar.num}</div>
      <div className="pillar-card-glow" />
      <div className="pillar-card-inner">
        <div className="pillar-card-bar" />
        <div className="pillar-card-icon">{pillar.icon}</div>
        <h3 className="pillar-card-label">{pillar.label}</h3>
        <p className="pillar-card-desc">{pillar.desc}</p>
        <div className="pillar-card-cta">
          <span>Explore</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M12 5l0 14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}
