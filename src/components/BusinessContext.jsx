import { motion } from 'framer-motion';
import { AnimCard, BgOrbs, SlideHeading } from './SectionUtils';
import './Section.css';

const ACCENT = '#7C3AED';

const layers = [
  {
    icon: '📋', label: 'Raw Event Log',
    desc: 'Activity timestamps, case IDs, object references, and durations — the baseline extracted from SAP, Oracle, or Salesforce. Rich in events, but carrying no business meaning.',
  },
  {
    icon: '🔗', label: 'Structured Attributes',
    desc: 'Object-centric linkage connecting Vendors, Purchase Orders, Goods Receipts, Invoices and Payments. Custom attribute columns add amount bands, date deltas, and touchcount flags.',
  },
  {
    icon: '📏', label: 'Business Rule Encoding',
    desc: 'Approval thresholds, 3-way match requirements, payment term SLAs, and compliance mandates are encoded as Knowledge Model attributes, flags, and KPIs — your rules, not generic ones.',
  },
  {
    icon: '🏷️', label: 'Semantic Enrichment',
    desc: 'Vendor risk classifications, product category ontologies, customer segment taxonomies, and process variant naming — labels that carry real meaning for AI reasoning.',
  },
  {
    icon: '✅', label: 'AI-Ready Context Model',
    desc: 'The completed Celonis Context Model — a queryable, semantically rich, relationship-mapped representation of your business, consumable by AI agents via the Knowledge Model API.',
  },
];

const examples = [
  {
    icon: '🏭',
    title: 'Vendor Risk Classification',
    desc: 'Without enrichment, an AI agent sees a Vendor ID and a country code. With enrichment, it knows the vendor is Tier 1 Critical, sole-source, with a risk score of 82 — and escalates accordingly instead of applying a generic hold rule.',
  },
  {
    icon: '📜',
    title: 'Approval Threshold Encoding',
    desc: 'Business rules around who must approve what invoice amount are encoded directly into the Knowledge Model. AI agents can instantly validate whether the correct authority level approved, without guessing from raw data.',
  },
  {
    icon: '👥',
    title: 'Customer Relationship Context',
    desc: 'A Platinum-tier customer with 3 years of on-time payments overdue for the first time is treated very differently from a new SME with a dispute history. AI needs this context to make the right dunning decision.',
  },
];

const phases = [
  {
    icon: '🗺️', name: 'Context Discovery', color: ACCENT,
    week: 'Phase 1 · Weeks 1–2',
    desc: 'Surface the business knowledge that lives in people\'s heads but not in the system. This phase defines exactly what context AI needs to make good decisions.',
    points: [
      'Run structured workshops: "What do you know about a case that the system doesn\'t?"',
      'Audit existing Knowledge Model attributes — identify gaps versus what AI actually needs',
      'Prioritise enrichment backlog by expected impact on AI decision quality',
    ],
  },
  {
    icon: '✏️', name: 'Attribute Design', color: '#059669',
    week: 'Phase 2 · Weeks 2–3',
    desc: 'Translate business knowledge into a formal attribute design. Every attribute gets a name, a business owner, a definition, and a clear data source before any implementation begins.',
    points: [
      'Write business glossary definitions so every attribute has unambiguous meaning',
      'Design the logic for each enrichment — reviewed jointly by a business SME and a Celonis engineer',
      'Document data lineage: where each attribute comes from, and how often it should refresh',
    ],
  },
  {
    icon: '⚙️', name: 'KM Instrumentation', color: '#2563EB',
    week: 'Phase 3 · Weeks 3–5',
    desc: 'Build the enriched Knowledge Model in Celonis Studio with enforced naming standards. Load reference datasets and expose the enriched model to AI agents via the Semantic API.',
    points: [
      'Implement enrichment logic in Celonis Studio with team-wide naming conventions enforced',
      'Load reference datasets — approval matrices, SLA tables, risk tiers — into the Data Pool',
      'Enable the Knowledge Model Semantic API so AI agents can query enriched context at runtime',
    ],
  },
  {
    icon: '🧪', name: 'Validation & Governance', color: '#B45309',
    week: 'Phase 4 · Weeks 5–6',
    desc: 'Prove the enrichment improved AI quality with measurable before-and-after comparisons. Establish the governance cadence so the context model stays accurate as the business evolves.',
    points: [
      'Compare AI response quality before and after enrichment using real process cases',
      'Business SME sign-off: confirm every enriched attribute reflects current organisational reality',
      'Define refresh schedules so approval limits, SLAs, and risk tiers stay current automatically',
    ],
  },
];

export default function BusinessContext() {
  return (
    <section className="pi-section" id="business-context">
      <BgOrbs color1="#4A1D96" color2="#1E3A8A" />
      <div style={{ position: 'relative', zIndex: 1 }}>

        <SlideHeading fromRight>
          <div className="section-intro">
            <div className="section-num" style={{ background: `${ACCENT}18`, borderColor: `${ACCENT}40`, color: ACCENT }}>02</div>
            <div className="section-label" style={{ color: ACCENT }}>Act 02 of 04 — Knowledge Model Layer</div>
            <h2 className="section-title">
              Business Context<br />
              <span style={{ color: ACCENT }}>Enrichment</span>
            </h2>
          </div>
        </SlideHeading>

        <SlideHeading>
          <p className="section-subtitle" style={{ marginBottom: 48 }}>
            AI agents are only as intelligent as the context they operate in. Without a rich,
            semantically grounded understanding of <strong>your business</strong> — your rules, your entities,
            your relationships, your thresholds — every model defaults to generic reasoning.
            And generic reasoning in enterprise processes is a liability, not an asset.
          </p>
        </SlideHeading>

        {/* CCM Callout */}
        <motion.div
          style={{ padding: '24px 28px', background: `${ACCENT}0E`, border: `1px solid ${ACCENT}35`, borderLeft: `4px solid ${ACCENT}`, borderRadius: 10, maxWidth: 760, marginBottom: 72 }}
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C4B5FD', marginBottom: 8 }}>
            🚀 Celonis Context Model (CCM)
          </div>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.82)', lineHeight: 1.72 }}>
            Celonis launched the <strong>Celonis Context Model</strong> — a dynamic, real-time digital twin of
            business operations that consolidates process data, business knowledge, and operational information
            into a single living model. Our framework operationalises this vision through a structured,
            practitioner-led enrichment approach at the Knowledge Model layer.{' '}
            <strong>We are ahead of this curve.</strong>
          </p>
        </motion.div>

        {/* ── NEW: Gap / Enrichment / Example cards ── */}
        <SlideHeading fromRight>
          <div className="section-label" style={{ color: ACCENT, marginBottom: 12 }}>Context at a Glance</div>
          <h3 style={{ fontSize: 28, fontWeight: 800, color: 'white', marginBottom: 48 }}>
            Understanding Business Context Enrichment
          </h3>
        </SlideHeading>

        <div className="card-grid-3" style={{ marginBottom: 80 }}>
          <AnimCard delay={0}>
            <div className="info-card-icon" style={{ fontSize: 32 }}>⚠️</div>
            <span className="badge" style={{ borderColor: `${ACCENT}40`, color: ACCENT, background: `${ACCENT}10`, marginBottom: 12 }}>
              The Gap
            </span>
            <div className="info-card-title">Standard models capture events, IDs, and timestamps but lack business context</div>
          </AnimCard>

          <AnimCard delay={0.1}>
            <div className="info-card-icon" style={{ fontSize: 32 }}>✨</div>
            <span className="badge" style={{ borderColor: `${ACCENT}40`, color: ACCENT, background: `${ACCENT}10`, marginBottom: 12 }}>
              The Enrichment
            </span>
            <div className="info-card-title">Add business context such as rules, relationships, and classification. Incorporate domain knowledge</div>
          </AnimCard>

          <AnimCard delay={0.2}>
            <div className="info-card-icon" style={{ fontSize: 32 }}>💡</div>
            <span className="badge" style={{ borderColor: `${ACCENT}40`, color: ACCENT, background: `${ACCENT}10`, marginBottom: 12 }}>
              Example
            </span>
            <div className="info-card-title">Enhance vendor data with risk and importance. Help distinguish critical suppliers from low impact vendors</div>
          </AnimCard>
        </div>

        {/* Five Layers */}
        <SlideHeading>
          <div className="section-label" style={{ color: ACCENT, marginBottom: 12 }}>Five Layers of Business Context</div>
          <h3 style={{ fontSize: 28, fontWeight: 800, color: 'white', marginBottom: 40 }}>
            From Raw Events to an AI-Ready Context Model
          </h3>
        </SlideHeading>

        <div className="card-grid-3" style={{ marginBottom: 80 }}>
          {layers.map((l, i) => (
            <AnimCard key={i} delay={i * 0.1}>
              <div className="info-card-icon" style={{ fontSize: 28 }}>{l.icon}</div>
              <span className="badge" style={{ borderColor: `${ACCENT}40`, color: ACCENT, background: `${ACCENT}10`, marginBottom: 12 }}>
                Layer {i}
              </span>
              <div className="info-card-title">{l.label}</div>
              <p className="info-card-desc">{l.desc}</p>
            </AnimCard>
          ))}
        </div>

        {/* Real-world examples */}
        <SlideHeading fromRight>
          <div className="section-label" style={{ color: ACCENT, marginBottom: 12 }}>Why Context Changes Everything</div>
          <h3 style={{ fontSize: 28, fontWeight: 800, color: 'white', marginBottom: 48 }}>
            Before &amp; After Enrichment
          </h3>
        </SlideHeading>

        <div className="card-grid-3" style={{ marginBottom: 80 }}>
          {examples.map((ex, i) => (
            <AnimCard key={i} delay={i * 0.12}>
              <div className="info-card-icon" style={{ fontSize: 28 }}>{ex.icon}</div>
              <div className="info-card-title">{ex.title}</div>
              <p className="info-card-desc">{ex.desc}</p>
            </AnimCard>
          ))}
        </div>

        {/* Implementation phases */}
        <SlideHeading>
          <div className="section-label" style={{ color: ACCENT, marginBottom: 12 }}>How We Deliver It</div>
          <h3 style={{ fontSize: 28, fontWeight: 800, color: 'white', marginBottom: 48 }}>
            Four-Phase Enrichment Approach
          </h3>
        </SlideHeading>

        <div className="phase-track">
          {phases.map((p, i) => (
            <motion.div
              key={i} className="phase-card" style={{ borderTopColor: p.color }}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div style={{ fontSize: 28, marginBottom: 10 }}>{p.icon}</div>
              <div className="phase-week" style={{ color: p.color }}>{p.week}</div>
              <div className="phase-name">{p.name}</div>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, marginBottom: 16 }}>{p.desc}</p>
              <ul className="phase-tasks">
                {p.points.map((pt, j) => <li key={j}>{pt}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}
