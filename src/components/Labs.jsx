import { SectionHeader, AnimCard } from './About'
import { LABS } from '../constants/data'

export default function Labs() {
  return (
    <section id="labs" className="section section-alt">
      <div className="container">
        <SectionHeader
          label="Hands-on Labs"
          title="Learning Journey"
          sub="Real security skills are built in labs — not just theory. Here's where I've put in the work."
        />

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 18,
        }} className="labs-grid">
          {LABS.map((lab, i) => (
            <AnimCard key={i} delay={i * 0.09}>
              <div className="card" style={{
                padding: '22px 22px',
                borderTop: `2px solid ${lab.color}`,
                borderRadius: '0 0 var(--radius-md) var(--radius-md)',
                display: 'flex', flexDirection: 'column', gap: 12,
                transition: 'background 0.25s, transform 0.25s',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg-card-hover)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg-card)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ fontSize: 22 }}>{lab.icon}</span>
                  <h3 style={{ color: lab.color, fontSize: 15, fontWeight: 700 }}>{lab.platform}</h3>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {lab.items.map(item => (
                    <span key={item} style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.07)',
                      color: 'var(--cream-muted)', fontSize: 11,
                      padding: '3px 10px', borderRadius: 14,
                    }}>{item}</span>
                  ))}
                </div>

                <p style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.6, margin: 0 }}>
                  {lab.note}
                </p>

                <a href={lab.link} target="_blank" rel="noreferrer" style={{
                  color: lab.color, fontSize: 12, fontFamily: 'var(--font-mono)',
                  textDecoration: 'none', display: 'inline-flex', alignItems: 'center',
                  gap: 5, fontWeight: 600,
                  transition: 'opacity 0.2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '0.75'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                >
                  {lab.linkLabel}
                </a>
              </div>
            </AnimCard>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 680px) { .labs-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}