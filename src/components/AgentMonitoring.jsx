import { motion } from 'framer-motion';
import { AnimCard, BgOrbs, SlideHeading } from './SectionUtils';
import './Section.css';

const ACCENT = '#BE185D';

const pillars = [
  {
    icon: '📊', num: 'Pillar 1',
    title: 'Process KPI Monitoring',
    desc: 'Did the business actually improve? Before-and-after KPI comparison, conformance analysis, and cycle time impact are all attributed directly to agent actions — so you always know what AI delivered.',
    color: '#1460A8', lightColor: '#93C5FD',
  },
  {
    icon: '🤖', num: 'Pillar 2',
    title: 'Agent Behaviour Monitoring',
    desc: 'Is the AI making good decisions? Decision quality scoring, confidence drift detection, and reasoning trace analysis via Agent Mining ensure agents stay calibrated and rule-compliant over time.',
    color: ACCENT, lightColor: '#F9A8D4',
  },
  {
    icon: '👤', num: 'Pillar 3',
    title: 'Human-in-the-Loop (HITL)',
    desc: 'Escalation queue, override panel, mandatory reason capture, and an immutable audit trail. Decisions below confidence thresholds automatically route to human reviewers with full context snapshots.',
    color: '#059669', lightColor: '#6EE7B7',
  },
];

const hitlSteps = [
  { icon: '✅', label: 'Auto-Process', desc: 'High-confidence, rule-compliant decisions execute automatically without human review.' },
  { icon: '⚖️', label: 'Confidence Check', desc: 'Decisions below threshold route to the human review queue automatically.' },
  { icon: '📥', label: 'Escalation Queue', desc: 'Reviewer receives the case with full context, agent reasoning trace, and recommended actions.' },
  { icon: '✏️', label: 'Override & Reason', desc: 'Human confirms, modifies, or overrides the decision. A reason code is mandatory and immutable.' },
  { icon: '🗄️', label: 'Audit Trail', desc: 'All decisions — automated and human — are written to an immutable log, exportable for regulatory submission.' },
];

const behaviourChecks = [
  { icon: '🎯', label: 'Decision Accuracy', desc: 'Compare the agent decision to the outcome — did the recommended action lead to a good process result?' },
  { icon: '📉', label: 'Confidence Calibration', desc: 'Were confidence scores well-calibrated? High-confidence wrong decisions are the earliest signal of model drift.' },
  { icon: '📋', label: 'Rule Compliance', desc: 'Did the agent respect all business rules encoded in the Knowledge Model? Violations are flagged immediately.' },
  { icon: '🔄', label: 'Ghost Loop Detection', desc: 'Identify cases where multiple agents acted on the same case in conflict with each other — a risk unique to multi-agent systems.' },
];

export default function AgentMonitoring() {
  return (
    <section className="pi-section" id="agent-monitoring">
      <BgOrbs color1="#831843" color2="#1E3A8A" />
      <div style={{ position: 'relative', zIndex: 1 }}>

        <SlideHeading>
          <div className="section-intro">
            <div className="section-num" style={{ background: `${ACCENT}18`, borderColor: `${ACCENT}40`, color: ACCENT }}>03</div>
            <div className="section-label" style={{ color: ACCENT }}>Act 03 of 04 — Governance & Control</div>
            <h2 className="section-title">
              AI Agent<br />
              <span style={{ color: ACCENT }}>Monitoring</span>
            </h2>
          </div>
        </SlideHeading>

        <SlideHeading fromRight delay={0.15}>
          <p className="section-subtitle" style={{ marginBottom: 64 }}>
            Deploying AI agents without monitoring is not innovation — it is{' '}
            <strong>uncontrolled automation at enterprise scale</strong>. This framework gives you
            complete visibility into what every agent decided, why it decided it, what the business
            outcome was, and where a human needs to step in.
          </p>
        </SlideHeading>

        {/* Three Pillars */}
        <SlideHeading>
          <div className="section-label" style={{ color: ACCENT, marginBottom: 12 }}>Three Monitoring Pillars</div>
          <h3 style={{ fontSize: 28, fontWeight: 800, color: 'white', marginBottom: 48 }}>
            Complete Visibility Over Every Agent Action
          </h3>
        </SlideHeading>

        <div className="card-grid-3" style={{ marginBottom: 80 }}>
          {pillars.map((p, i) => (
            <AnimCard key={i} delay={i * 0.12}>
              <div className="info-card-icon" style={{ fontSize: 32 }}>{p.icon}</div>
              <span className="badge" style={{ borderColor: `${p.color}40`, color: p.lightColor, background: `${p.color}10`, marginBottom: 12 }}>
                {p.num}
              </span>
              <div className="info-card-title">{p.title}</div>
              <p className="info-card-desc">{p.desc}</p>
            </AnimCard>
          ))}
        </div>

        {/* Behaviour Checks */}
        <SlideHeading fromRight>
          <div className="section-label" style={{ color: ACCENT, marginBottom: 12 }}>Agent Behaviour Checks</div>
          <h3 style={{ fontSize: 28, fontWeight: 800, color: 'white', marginBottom: 48 }}>
            Four Dimensions of Decision Quality
          </h3>
        </SlideHeading>

        <div className="card-grid-3" style={{ marginBottom: 80 }}>
          {behaviourChecks.map((c, i) => (
            <AnimCard key={i} delay={i * 0.1}>
              <div className="info-card-icon" style={{ fontSize: 28 }}>{c.icon}</div>
              <div className="info-card-title">{c.label}</div>
              <p className="info-card-desc">{c.desc}</p>
            </AnimCard>
          ))}
        </div>

        {/* HITL Flow */}
        <SlideHeading>
          <div className="section-label" style={{ color: '#059669', marginBottom: 12 }}>Human-in-the-Loop Flow</div>
          <h3 style={{ fontSize: 28, fontWeight: 800, color: 'white', marginBottom: 48 }}>
            Every Decision Has a Human Safety Net
          </h3>
        </SlideHeading>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 720 }}>
          {hitlSteps.map((s, i) => (
            <motion.div
              key={i}
              style={{ display: 'flex', alignItems: 'flex-start', gap: 20, padding: '20px 24px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderLeft: '3px solid #059669', borderRadius: 10 }}
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div style={{ fontSize: 24, flexShrink: 0 }}>{s.icon}</div>
              <div>
                <div style={{ fontWeight: 700, color: 'white', marginBottom: 6 }}>{i + 1}. {s.label}</div>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.58)', lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
