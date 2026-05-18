import './HorizontalScroll.css';
import './Section.css';
import { AnimCard } from './SectionUtils';
import { SearchIcon, NetworkIcon, LineChartIcon, GearIcon, ShieldCheckIcon } from './Icons';

const PILLARS = [
  {
    num: '01',
    label: 'AI Opportunity Discovery',
    desc: 'Identify and prioritise AI opportunities using a structured, data led approach grounded in process intelligence and context enrichment.',
    sectionId: 'ai-opportunity',
    accent: '#2563EB',
    Icon: SearchIcon,
  },
  {
    num: '02',
    label: 'Context Enrichment',
    desc: 'Enhance process data with business context to enable more accurate, compliant, and context aware AI decisions.',
    sectionId: 'business-context',
    accent: '#7C3AED',
    Icon: NetworkIcon,
  },
  {
    num: '03',
    label: 'AI Agent Performance Monitoring',
    desc: 'Establish visibility and control over AI driven decisions through agent mining for structured monitoring and governance.',
    sectionId: 'agent-monitoring',
    accent: '#BE185D',
    Icon: LineChartIcon,
  },
  {
    num: '04',
    label: 'Platform Engineering & Excellence',
    desc: 'Scan to uncover engineering gaps, excellence opportunities and systematic remediation for a fully governed and AI ready Celonis Platform.',
    sectionId: 'engineering',
    accent: '#0D9488',
    Icon: GearIcon,
  },
  {
    num: '05',
    label: 'Risk & Compliance Excellence',
    desc: 'Design and govern control ecosystems using a structured, data-driven approach powered by process intelligence and continuous monitoring.',
    sectionId: 'risk-compliance',
    accent: '#7C3AED',
    Icon: ShieldCheckIcon,
  },
];

export default function HorizontalScroll() {
  return (
    <div className="pillars-section">
      <div className="pillars-label">
        How Process Intelligence Accelerates AI
      </div>
      <div className="pillars-grid">
        {PILLARS.map((p, i) => (
          <PillarCard key={i} pillar={p} index={i} />
        ))}
      </div>
    </div>
  );
}

function PillarCard({ pillar, index }) {
  const handleClick = () => {
    const el = document.getElementById(pillar.sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimCard delay={index * 0.1} className="pillar-info-card">
      <div
        className="info-card-icon"
        style={{ color: pillar.accent, cursor: 'pointer' }}
        onClick={handleClick}
      >
        <pillar.Icon s={28} />
      </div>
      <span
        className="badge"
        style={{
          borderColor: `${pillar.accent}40`,
          color: 'white',
          background: `${pillar.accent}10`,
          marginBottom: 8,
        }}
      >
        {pillar.num}
      </span>
      <div className="info-card-title" style={{ cursor: 'pointer' }} onClick={handleClick}>
        {pillar.label}
      </div>
      <p className="info-card-desc">{pillar.desc}</p>
      <button
        onClick={handleClick}
        style={{
          marginTop: 'auto',
          alignSelf: 'flex-start',
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          padding: '8px 18px',
          background: 'transparent',
          border: `1.5px solid ${pillar.accent}60`,
          borderRadius: 50,
          color: pillar.accent,
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: '0.07em',
          textTransform: 'uppercase',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = pillar.accent;
          e.currentTarget.style.color = 'white';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = 'transparent';
          e.currentTarget.style.color = pillar.accent;
        }}
      >
        Explore
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </AnimCard>
  );
}
