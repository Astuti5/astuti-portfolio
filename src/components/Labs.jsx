import { SectionHeader, AnimCard } from './About'
import { LABS } from '../constants/data'

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  )
}

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
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'var(--bg-card-hover)'
                  e.currentTarget.style.transform = 'translateY(-3px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'var(--bg-card)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ fontSize: 22 }}>{lab.icon}</span>
                    <h3 style={{ color: lab.color, fontSize: 15, fontWeight: 700 }}>{lab.platform}</h3>
                  </div>
                  {/* Stat badge e.g. "50+ Rooms" */}
                  {lab.stat && (
                    <span style={{
                      background: lab.color + '18',
                      border: `1px solid ${lab.color}35`,
                      color: lab.color,
                      fontSize: 11, padding: '3px 10px', borderRadius: 12,
                      fontFamily: 'var(--font-mono)', whiteSpace: 'nowrap',
                    }}>{lab.stat}</span>
                  )}
                </div>

                {/* Tags */}
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

                {/* CTA — opens real profile in new tab */}
                <div style={{ marginTop: 'auto', paddingTop: 4 }}>
                  <a
                    href={lab.link}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 7,
                      background: lab.color + '18',
                      border: `1px solid ${lab.color}40`,
                      color: lab.color,
                      padding: '8px 16px', borderRadius: 'var(--radius-sm)',
                      fontSize: 12, fontWeight: 700,
                      fontFamily: 'var(--font-mono)',
                      textDecoration: 'none',
                      transition: 'background 0.2s, transform 0.15s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = lab.color + '35'
                      e.currentTarget.style.transform = 'translateY(-1px)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = lab.color + '18'
                      e.currentTarget.style.transform = 'translateY(0)'
                    }}
                  >
                    {lab.linkLabel} <ExternalIcon />
                  </a>
                </div>
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