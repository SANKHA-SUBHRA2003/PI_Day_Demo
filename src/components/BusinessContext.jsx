import { motion } from 'framer-motion';
import { AnimCard, BgOrbs, SlideHeading } from './SectionUtils';
import {
  AlertIcon, SparkleIcon, LightbulbIcon,
  ClipboardIcon, LinkIcon, ScaleIcon, TagIcon, ShieldCheckIcon,
  BuildingIcon, FileTextIcon, UsersIcon
} from './Icons';
import './Section.css';

const ACCENT = '#7C3AED';

const layers = [
  { Icon: LinkIcon,      label: 'Structured Attributes', desc: 'Object-centric linkage connecting Vendors, Purchase Orders, Goods Receipts, Invoices and Payments. Custom attribute columns add amount bands, date deltas, and touchcount flags.' },
  { Icon: ScaleIcon,     label: 'Business Rule Encoding', desc: 'Approval thresholds, 3-way match requirements, payment term SLAs, and compliance mandates are encoded as Knowledge Model attributes, flags, and KPIs — your rules, not generic ones.' },
  { Icon: TagIcon,       label: 'Semantic Enrichment', desc: 'Vendor risk classifications, product category ontologies, customer segment taxonomies, and process variant naming — labels that carry real meaning for AI reasoning.' },
  { Icon: ShieldCheckIcon, label: 'AI-Ready Context Model', desc: 'A queryable, semantically rich, relationship-mapped representation of your business, consumable by AI agents via the Knowledge Model API.' },
];

const examples = [
  { Icon: BuildingIcon, title: 'Vendor Risk Classification', desc: 'Without enrichment, an AI agent sees a Vendor ID and a country code. With enrichment, it knows the vendor is Tier 1 Critical, sole-source, with a risk score of 82 — and escalates accordingly instead of applying a generic hold rule.' },
  { Icon: FileTextIcon, title: 'Approval Threshold Encoding', desc: 'Business rules around who must approve what invoice amount are encoded directly into the Knowledge Model. AI agents can instantly validate whether the correct authority level approved, without guessing from raw data.' },
  { Icon: UsersIcon,    title: 'Customer Relationship Context', desc: 'A Platinum-tier customer with 3 years of on-time payments overdue for the first time is treated very differently from a new SME with a dispute history. AI needs this context to make the right dunning decision.' },
];

export default function BusinessContext() {
  return (
    <section className="pi-section" id="business-context">
      <BgOrbs color1="#4A1D96" color2="#1E3A8A" />
      <div style={{ position: 'relative', zIndex: 1 }}>

        <SlideHeading fromRight>
          <div className="section-intro">
            <div className="section-num" style={{ background: `${ACCENT}18`, borderColor: `${ACCENT}40`, color: ACCENT }}>02</div>
            <div className="section-label" style={{ color: 'white' }}>Knowledge Model Layer</div>
            <h2 className="section-title">
              Context<br />
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

        {/* Context at a Glance */}
        <SlideHeading fromRight>
          <div className="section-label" style={{ color: 'white', marginBottom: 12 }}>Context at a Glance</div>
          <h3 style={{ fontSize: 28, fontWeight: 800, color: 'white', marginBottom: 48 }}>
            Understanding Business Context Enrichment
          </h3>
        </SlideHeading>

        <div className="card-grid-3" style={{ marginBottom: 80 }}>
          <AnimCard delay={0}>
            <div className="info-card-icon" style={{ color: ACCENT }}><AlertIcon s={28} /></div>
            <span className="badge" style={{ borderColor: `${ACCENT}40`, color: 'white', background: `${ACCENT}10`, marginBottom: 12 }}>The Gap</span>
            <div className="info-card-title" style={{ fontWeight: 400 }}>Standard models capture events, IDs, and timestamps but lack business context</div>
          </AnimCard>

          <AnimCard delay={0.1}>
            <div className="info-card-icon" style={{ color: ACCENT }}><SparkleIcon s={28} /></div>
            <span className="badge" style={{ borderColor: `${ACCENT}40`, color: 'white', background: `${ACCENT}10`, marginBottom: 12 }}>The Enrichment</span>
            <div className="info-card-title" style={{ fontWeight: 400 }}>Add business context such as rules, relationships, and classification. Incorporate domain knowledge</div>
          </AnimCard>

          <AnimCard delay={0.2}>
            <div className="info-card-icon" style={{ color: ACCENT }}><LightbulbIcon s={28} /></div>
            <span className="badge" style={{ borderColor: `${ACCENT}40`, color: 'white', background: `${ACCENT}10`, marginBottom: 12 }}>Example</span>
            <div className="info-card-title" style={{ fontWeight: 400 }}>Enhance vendor data with risk and importance. Help distinguish critical suppliers from low impact vendors</div>
          </AnimCard>
        </div>

        {/* Five Layers */}
        <SlideHeading>
          <div className="section-label" style={{ color: 'white', marginBottom: 12 }}>Five Layers of Business Context</div>
          <h3 style={{ fontSize: 28, fontWeight: 800, color: 'white', marginBottom: 40 }}>
            Evaluation of AI Ready Context Model
          </h3>
        </SlideHeading>

        <div className="card-grid-3">
          {layers.map((l, i) => (
            <AnimCard key={i} delay={i * 0.1}>
              <div className="info-card-icon" style={{ color: ACCENT }}><l.Icon s={28} /></div>
              <span className="badge" style={{ borderColor: `${ACCENT}40`, color: 'white', background: `${ACCENT}10`, marginBottom: 12 }}>Layer {i}</span>
              <div className="info-card-title">{l.label}</div>
              <p className="info-card-desc">{l.desc}</p>
            </AnimCard>
          ))}
        </div>

      </div>
    </section>
  );
}
