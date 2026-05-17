import { motion } from 'framer-motion';
import { BgOrbs, AnimCard, SlideHeading } from './SectionUtils';
import './Section.css';

const ACCENT = '#00338D';
const ACCENT_LIGHT = '#93C5FD';

const HUB_CARDS = [
  {
    icon: '🏅',
    badge: 'Partnership',
    title: 'Global Platinum Partner',
  },
  {
    icon: '🗺️',
    badge: 'Strategy',
    title: 'Strategic, Advisory, Vision, Roadmap & Evangelization',
  },
  {
    icon: '🏗️',
    badge: 'Centre of Excellence',
    title: 'Scaling Process Intelligence COE & COE as a Service',
  },
  {
    icon: '🔄',
    badge: 'End-to-End',
    title: 'E2E Offering — Envision > Build > Scale > Value',
  },
  {
    icon: '🤖',
    badge: 'AI Integration',
    title: 'Agentic Process Intelligence and AI Integration',
  },
  {
    icon: '👥',
    badge: 'Expertise',
    title: 'Data, Engineering, AI & Domain Experts',
  },
];

export default function PIHub() {
  return (
    <section className="pi-section" id="pi-hub" style={{ minHeight: '100vh' }}>
      <BgOrbs color1="#00338D" color2="#1E3A8A" />
      <div style={{ position: 'relative', zIndex: 1 }}>

        <SlideHeading>
          <div className="section-intro">
            <div
              className="section-num"
              style={{
                background: `${ACCENT}18`,
                borderColor: `${ACCENT}40`,
                color: ACCENT_LIGHT,
              }}
            >
              PI
            </div>
            <div className="section-label" style={{ color: ACCENT_LIGHT }}>
              KPMG × Celonis — Partnership
            </div>
            <h2 className="section-title">
              KPMG Process<br />
              <span style={{ color: ACCENT_LIGHT }}>Intelligence Hub</span>
            </h2>
          </div>
        </SlideHeading>

        <SlideHeading>
          <p className="section-subtitle" style={{ marginBottom: 64 }}>
            KPMG is a <strong>Global Platinum Partner</strong> of Celonis, delivering end-to-end
            Process Intelligence solutions at scale. From strategic advisory to agentic AI
            integration, our experts help organisations realise the full value of their processes.
          </p>
        </SlideHeading>

        {/* Hub Cards Grid */}
        <div className="card-grid-3" style={{ marginBottom: 80 }}>
          {HUB_CARDS.map((card, i) => (
            <AnimCard key={i} delay={i * 0.1}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 16 }}>
                {/* Logo / Icon */}
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 12,
                    background: `linear-gradient(135deg, ${ACCENT}22, #6B21C822)`,
                    border: `1px solid ${ACCENT}40`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 28,
                  }}
                >
                  {card.icon}
                </div>

                {/* Badge */}
                <span
                  className="badge"
                  style={{
                    borderColor: `${ACCENT}50`,
                    color: ACCENT_LIGHT,
                    background: `${ACCENT}12`,
                  }}
                >
                  {card.badge}
                </span>

                {/* Title */}
                <div className="info-card-title" style={{ fontSize: 18, lineHeight: 1.4 }}>
                  {card.title}
                </div>
              </div>
            </AnimCard>
          ))}
        </div>

        {/* Bottom callout */}
        <motion.div
          style={{
            padding: '32px 36px',
            background: `${ACCENT}0E`,
            border: `1px solid ${ACCENT}35`,
            borderLeft: `4px solid ${ACCENT_LIGHT}`,
            borderRadius: 12,
            maxWidth: 800,
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div
            style={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: ACCENT_LIGHT,
              marginBottom: 10,
            }}
          >
            🌐 Global Reach · Local Expertise
          </div>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.82)', lineHeight: 1.75 }}>
            As Celonis's <strong>Global Platinum Partner</strong>, KPMG brings together world-class
            data, engineering, AI, and domain experts to help organisations envision, build, scale,
            and extract lasting value from Process Intelligence — end to end.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
