import { motion } from 'framer-motion';
import { SectionHeading, AnimCard, BgOrbs, SlideHeading } from './SectionUtils';
import './Section.css';

const ACCENT = '#2563EB';

const categories = [
  {
    icon: '⚙️',
    title: 'AI that Augments Human Work',
    desc: 'Manual, repetitive, high-frequency activities that can be automated or augmented using AI. Identified through high volume and low existing automation rates in the process flow.',
    tag: 'EFFORT',
  },
  {
    icon: '🎯',
    title: 'AI that Avoids Human Misses',
    desc: 'Activities prone to deviations, missed approvals, or non-conformance. AI detects and corrects issues before they escalate into financial or compliance losses.',
    tag: 'RECO',
  },
  {
    icon: '📊',
    title: 'AI that Improves Data Quality',
    desc: 'Targets incomplete or inaccurate master data — vendor, material, cost centre — that causes downstream process failures, scored and enriched through a dedicated data quality model.',
    tag: 'DATA QUALITY',
  },
];

const actionTypes = [
  {
    icon: '🤖',
    title: 'AI Executes — No Human Needed',
    desc: 'Structured, rule-based activities where AI can complete the task with full confidence. Typically applied to straight-through processing, field auto-population, and pre-approved decisions.',
    tag: 'Fully Automated',
    accent: '#0F6B4F',
  },
  {
    icon: '🤝',
    title: 'AI Recommends — Human Confirms',
    desc: 'Judgement-heavy activities where AI narrows options and presents a ranked recommendation, but a human makes the final call. Ideal for exception routing and complex approvals.',
    tag: 'Human in Loop',
    accent: '#2563EB',
  },
  {
    icon: '✍️',
    title: 'AI Drafts — Human Executes',
    desc: 'Communication or documentation-heavy tasks where AI prepares a high-quality draft. The human reviews and sends — combining AI speed with human accountability.',
    tag: 'AI Prepares',
    accent: '#7C3AED',
  },
];

export default function AIOpportunity() {
  return (
    <section className="pi-section" id="ai-opportunity">
      <BgOrbs color1="#1E4DE0" color2="#0F6B4F" />
      <div style={{ position: 'relative', zIndex: 1 }}>

        <SlideHeading>
          <div className="section-intro">
            <div className="section-num" style={{ background: '#1E4DE018', borderColor: '#1E4DE040', color: ACCENT }}>01</div>
            <div className="section-label" style={{ color: ACCENT }}>Process Intelligence AI Lifecycle</div>
            <h2 className="section-title">
              AI Opportunity<br />
              <span style={{ color: ACCENT }}>Discovery</span>
            </h2>
          </div>
        </SlideHeading>

        <SlideHeading fromRight delay={0.15}>
          <p className="section-subtitle" style={{ marginBottom: 64 }}>
            Shift from intuition or workshops towards a <strong>process intelligence</strong> approach
            that builds a ranked, evidence-based AI Opportunity Funnel — where every activity is
            evaluated by category, impact, complexity, and the most suitable action type.
          </p>
        </SlideHeading>

        {/* Three Categories */}
        <SlideHeading>
          <div className="section-label" style={{ color: ACCENT, marginBottom: 12 }}>Three Scoring Categories</div>
          <h3 style={{ fontSize: 28, fontWeight: 800, color: 'white', marginBottom: 48 }}>
            How Each Opportunity is Identified &amp; Classified
          </h3>
        </SlideHeading>
        <div className="card-grid-3">
          {categories.map((cat, i) => (
            <AnimCard key={i} delay={i * 0.12}>
              <div className="info-card-icon" style={{ fontSize: 28 }}>{cat.icon}</div>
              <span className="badge" style={{ borderColor: `${ACCENT}40`, color: ACCENT, background: `${ACCENT}10`, marginBottom: 12 }}>
                {cat.tag}
              </span>
              <div className="info-card-title">{cat.title}</div>
              <p className="info-card-desc">{cat.desc}</p>
            </AnimCard>
          ))}
        </div>

        {/* Action Types */}
        <div style={{ marginTop: 80 }}>
          <SlideHeading fromRight>
            <div className="section-label" style={{ color: ACCENT, marginBottom: 12 }}>Three Action Types</div>
            <h3 style={{ fontSize: 28, fontWeight: 800, color: 'white', marginBottom: 48 }}>
              What Should the AI Actually Do?
            </h3>
          </SlideHeading>
          <div className="card-grid-3">
            {actionTypes.map((at, i) => (
              <AnimCard key={i} delay={i * 0.12}>
                <div className="info-card-icon" style={{ fontSize: 28 }}>{at.icon}</div>
                <span className="badge" style={{ borderColor: `${at.accent}40`, color: at.accent, background: `${at.accent}10`, marginBottom: 12 }}>
                  {at.tag}
                </span>
                <div className="info-card-title">{at.title}</div>
                <p className="info-card-desc">{at.desc}</p>
              </AnimCard>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
