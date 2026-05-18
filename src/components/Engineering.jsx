import { motion } from 'framer-motion';
import { AnimCard, BgOrbs, SlideHeading } from './SectionUtils';
import {
  ServerIcon, LinkIcon, ZapIcon, GitMergeIcon,
  ActivityIcon, CodeIcon, SearchIcon, WrenchIcon, BuildingIcon, FileTextIcon
} from './Icons';
import './Section.css';

const ACCENT = '#0D9488';

const dimensions = [
  { Icon: ServerIcon,   tag: 'Dimension 1', title: 'Data Pool Design & Governance', color: '#0F766E',
    desc: 'Table structure, partitioning, extraction efficiency, schema naming, and task orchestration. The engine room of the entire platform — weak foundations here cascade across every layer above.' },
  { Icon: LinkIcon,     tag: 'Dimension 2', title: 'Data Model & OCEL Quality', color: '#7C3AED',
    desc: 'Object-centric event log completeness, relationship coverage, activity table grain, schema integrity, and timestamp consistency. AI-readiness of the data model starts here.' },
  { Icon: ZapIcon,      tag: 'Dimension 3', title: 'PQL Efficiency', color: '#1460A8',
    desc: 'Expensive aggregation patterns, over-nested KPIs, and missing optimisation opportunities. A single poorly written KPI can make an entire dashboard unusable at scale.' },
  { Icon: GitMergeIcon, tag: 'Dimension 4', title: 'Data Lineage & Auditability', color: '#B45309',
    desc: 'End-to-end traceability from source table to KM attribute to dashboard component. Without lineage documentation, changes are made blind — breaking downstream AI agents unpredictably.' },
  { Icon: ActivityIcon, tag: 'Dimension 5', title: 'Platform Health', color: '#BE185D',
    desc: 'Data model load schedules, compute cost per query, extraction volume, redundant data jobs, memory consumption, and idle resource detection. Keep the platform running efficiently at scale.' },
  { Icon: CodeIcon,     tag: 'Dimension 6', title: 'Code Quality & Standards', color: '#0E7490',
    desc: 'Naming conventions across tables, columns, KPIs, and KM attributes. Modular transformation design, reusability, inline documentation, and dead code detection — the governance layer.' },
];

const phases = [
  {
    Icon: SearchIcon, name: 'Platform Audit', color: '#0F766E',
    week: 'Phase 1 · Weeks 1–2',
    desc: 'Run a comprehensive assessment across all six dimensions to establish an honest baseline. The output is a scored Scorecard and a prioritised remediation backlog.',
    points: [
      'Execute automated audit scripts across data pool design, OCEL quality, PQL efficiency, lineage, health, and code standards',
      'Score each dimension and identify which issues are quick wins vs. structural refactors',
      'Produce a business-readable remediation backlog with effort and impact estimates for each item',
    ],
  },
  {
    Icon: WrenchIcon, name: 'Foundation Fixes', color: '#7C3AED',
    week: 'Phase 2 · Weeks 2–4',
    desc: 'Address the highest-impact technical debt items first. These foundational fixes often unlock significant performance gains and data quality improvements.',
    points: [
      'Enforce naming conventions across tables, columns, and KPIs to eliminate ambiguity for future developers and AI agents',
      'Convert full-load extractions to delta strategy — dramatically reducing SAP load and Celonis storage consumption',
      'Remove orphaned tables and apply optimisation patterns to the top slow-performing KPIs',
    ],
  },
  {
    Icon: BuildingIcon, name: 'Model Quality', color: '#1460A8',
    week: 'Phase 3 · Weeks 3–5',
    desc: 'Repair the structural gaps in the data model that make AI unreliable. A model with missing object relationships or incorrect activity grain causes AI agents to make systematically wrong decisions.',
    points: [
      'Repair OCEL relationship gaps — ensure every object type is correctly linked across the process',
      'Fix activity table grain issues and remove noise activities that distort conformance and cycle time metrics',
      'Document full data lineage for all production Knowledge Model attributes so changes can be made safely',
    ],
  },
  {
    Icon: FileTextIcon, name: 'Governance Layer', color: '#B45309',
    week: 'Phase 4 · Weeks 5–6',
    desc: 'Build the systems and habits that prevent technical debt from accumulating again. Governance is the set of lightweight, automated guardrails that keep the platform healthy as the team grows.',
    points: [
      'Build a live Engineering Excellence Scorecard in Celonis Studio to track platform health continuously',
      'Set up automated weekly health checks via Celonis Actions — flagging regressions before they affect AI performance',
      'Implement a code review checklist and train the team on naming standards to prevent future debt from the start',
    ],
  },
];

export default function Engineering() {
  return (
    <section className="pi-section" id="engineering">
      <BgOrbs color1="#0D4A47" color2="#0E3A5A" />
      <div style={{ position: 'relative', zIndex: 1 }}>

        <SlideHeading fromRight>
          <div className="section-intro">
            <div className="section-num" style={{ background: `${ACCENT}18`, borderColor: `${ACCENT}40`, color: ACCENT }}>04</div>
            <div className="section-label" style={{ color: 'white' }}>Platform Foundation</div>
            <h2 className="section-title">
              Engineering<br />
              <span style={{ color: ACCENT }}>Excellence</span>
            </h2>
          </div>
        </SlideHeading>

        <SlideHeading>
          <p className="section-subtitle" style={{ marginBottom: 72 }}>
            This is foundational work that enables everything else. Every AI agent, prediction,
            and AI recommendation built across other pillars depends on it.
            When this layer is not strong — <strong>everything built on top eventually breaks down</strong>.
            We assess, fix, and manage the Celonis platform across six key dimensions.
          </p>
        </SlideHeading>

        {/* Six Dimensions */}
        <SlideHeading fromRight>
          <div className="section-label" style={{ color: 'white', marginBottom: 12 }}>Six Engineering Dimensions</div>
          <h3 style={{ fontSize: 28, fontWeight: 800, color: 'white', marginBottom: 16 }}>What We Audit, Fix, and Govern</h3>
          <p style={{ fontSize: 15, color: 'var(--text-muted)', marginBottom: 48, maxWidth: 640 }}>
            Most process mining app environments have similar structural issues — accumulated during rapid pilots, consultant handoffs, and scope creep. We audit across six dimensions and produce a prioritised backlog.
          </p>
        </SlideHeading>

        <div className="card-grid-3" style={{ marginBottom: 80 }}>
          {dimensions.map((d, i) => (
            <AnimCard key={i} delay={i * 0.1}>
              <div className="info-card-icon" style={{ color: d.color }}><d.Icon s={28} /></div>
              <span className="badge" style={{ borderColor: `${d.color}40`, color: 'white', background: `${d.color}10`, marginBottom: 12 }}>
                {d.tag}
              </span>
              <div className="info-card-title">{d.title}</div>
              <p className="info-card-desc">{d.desc}</p>
            </AnimCard>
          ))}
        </div>

      </div>
    </section>
  );
}
