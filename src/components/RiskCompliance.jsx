import { motion } from 'framer-motion';
import { AnimCard, BgOrbs, SlideHeading } from './SectionUtils';
import {
  ShieldCheckIcon, LinkIcon, ClipboardIcon,
  AlertIcon, LineChartIcon, RefreshIcon
} from './Icons';
import './Section.css';

const ACCENT = '#7C3AED';

const auditAreas = [
  {
    Icon: ShieldCheckIcon,
    color: '#1460A8',
    title: 'Control Design & Coverage',
    desc: 'Incomplete or subjective control selection leads to risk exposure. Enable data-driven control design to ensure comprehensive coverage aligned to actual process risks.',
  },
  {
    Icon: LinkIcon,
    color: '#7C3AED',
    title: 'Risk–Control Mapping Integrity',
    desc: 'Lack of visibility between risks and controls limits audit confidence. Establish end-to-end traceability linking risks, controls, and processes.',
  },
  {
    Icon: ClipboardIcon,
    color: '#0E7490',
    title: 'Controls Testing Efficiency',
    desc: 'Manual and inconsistent testing reduces assurance at scale. Automate control testing using process mining and rule-based validation.',
  },
  {
    Icon: AlertIcon,
    color: '#6D28D9',
    title: 'Deficiency Evaluation & Risk Scoring',
    desc: 'Unclear severity assessment leads to poor prioritization. Enable accurate, data-driven evaluation of control failures and risk impact.',
  },
  {
    Icon: LineChartIcon,
    color: '#1460A8',
    title: 'Reporting & Traceability',
    desc: 'Limited reporting and audit trails reduce transparency. Real-time reporting with full traceability across systems and controls.',
  },
  {
    Icon: RefreshIcon,
    color: '#BE185D',
    title: 'Continuous Monitoring & Actioning',
    desc: 'Ad-hoc monitoring prevents continuous improvement and timely actioning. We enable ongoing control monitoring and systematic optimization over time.',
  },
];

export default function RiskCompliance() {
  return (
    <section className="pi-section" id="risk-compliance">
      <BgOrbs color1="#2D1460" color2="#0E1A4A" />
      <div style={{ position: 'relative', zIndex: 1 }}>

        <SlideHeading fromRight>
          <div className="section-intro">
            <div
              className="section-num"
              style={{ background: `${ACCENT}18`, borderColor: `${ACCENT}40`, color: ACCENT }}
            >
              05
            </div>
            <div className="section-label" style={{ color: 'white' }}>Governance & Assurance</div>
            <h2 className="section-title">
              Risk &amp; Compliance<br />
              <span style={{ color: ACCENT }}>Excellence</span>
            </h2>
          </div>
        </SlideHeading>

        <SlideHeading>
          <p className="section-subtitle" style={{ marginBottom: 72 }}>
            Design and govern control ecosystems using a structured, data-driven approach powered by
            process intelligence and continuous monitoring. We audit, fix, and govern your
            control framework across six critical dimensions.
          </p>
        </SlideHeading>

        {/* Six Audit Areas */}
        <SlideHeading fromRight>
          <div className="section-label" style={{ color: 'white', marginBottom: 12 }}>Six Compliance Dimensions</div>
          <h3 style={{ fontSize: 28, fontWeight: 800, color: 'white', marginBottom: 16 }}>
            What We Audit, Fix, and Govern
          </h3>
          <p style={{ fontSize: 15, color: 'var(--text-muted)', marginBottom: 48, maxWidth: 640 }}>
            Most organisations have systemic gaps between their documented controls and their actual process execution.
            We surface these gaps using process intelligence and establish a governed, continuously monitored control environment.
          </p>
        </SlideHeading>

        <div className="card-grid-3" style={{ marginBottom: 80 }}>
          {auditAreas.map((area, i) => (
            <AnimCard key={i} delay={i * 0.1}>
              <div className="info-card-icon" style={{ color: area.color }}>
                <area.Icon s={28} />
              </div>
              <span
                className="badge"
                style={{
                  borderColor: `${area.color}40`,
                  color: 'white',
                  background: `${area.color}10`,
                  marginBottom: 12,
                }}
              >
                Dimension {i + 1}
              </span>
              <div className="info-card-title">{area.title}</div>
              <p className="info-card-desc">{area.desc}</p>
            </AnimCard>
          ))}
        </div>

      </div>
    </section>
  );
}
