import { SectionHeader, AnimCard } from './About'
import { EXPERIENCE } from '../constants/data'

export default function Experience() {
  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <SectionHeader
          label="Experience"
          title="My Journey"
          sub="From self-directed labs to hands-on internships — building toward Application Security."
        />

        <div style={{ position: 'relative', paddingLeft: 28 }}>
          {/* Timeline line */}
          <div style={{
            position: 'absolute', left: 0, top: 8, bottom: 8, width: 2,
            background: 'linear-gradient(to bottom, var(--burgundy-glow), rgba(90,191,168,0.2))',
            borderRadius: 2,
          }} />

          {EXPERIENCE.map((exp, i) => (
            <AnimCard key={i} delay={i * 0.08} style={{ marginBottom: 24 }}>
              <div style={{ position: 'relative' }}>
                {/* Dot */}
                <div style={{
                  position: 'absolute', left: -35, top: 18,
                  width: 14, height: 14, borderRadius: '50%',
                  background: exp.color, border: '2px solid var(--bg)',
                  boxShadow: `0 0 10px ${exp.color}70`,
                }} />

                <div className="card" style={{
                  padding: '20px 22px',
                  borderLeft: `2px solid ${exp.color}`,
                  borderRadius: '0 var(--radius-md) var(--radius-md) 0',
                  transition: 'transform 0.25s ease, border-color 0.25s',
                }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'translateX(4px)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'translateX(0)'}
                >
                  <div style={{
                    display: 'flex', justifyContent: 'space-between',
                    alignItems: 'flex-start', flexWrap: 'wrap', gap: 8, marginBottom: 10,
                  }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}>
                        <span>{exp.icon}</span>
                        <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--text)' }}>{exp.role}</h3>
                      </div>
                      <div style={{ color: exp.color, fontSize: 13, fontWeight: 600, paddingLeft: 26 }}>{exp.org}</div>
                    </div>
                    <span style={{
                      background: exp.color + '20', color: exp.color,
                      fontSize: 11, padding: '4px 11px', borderRadius: 20,
                      fontFamily: 'var(--font-mono)', whiteSpace: 'nowrap', flexShrink: 0,
                    }}>{exp.period}</span>
                  </div>
                  <ul style={{ margin: 0, paddingLeft: 20 }}>
                    {exp.points.map((pt, j) => (
                      <li key={j} style={{
                        color: 'var(--cream-muted)', fontSize: 13.5, lineHeight: 1.7, marginBottom: 3,
                      }}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimCard>
          ))}
        </div>
      </div>
    </section>
  )
}