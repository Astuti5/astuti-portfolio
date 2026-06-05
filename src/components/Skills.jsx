import { SectionHeader, AnimCard } from './About'
import { SKILLS } from '../constants/data'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeader
          label="Skills"
          title="Technical Arsenal"
          sub="Tools and technologies I use to find, exploit, and remediate security vulnerabilities."
        />

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16,
        }} className="skills-grid">
          {SKILLS.map((cat, i) => (
            <AnimCard key={i} delay={i * 0.08}>
              <div className="card" style={{ padding: '20px 22px' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = cat.color + '60'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                <div style={{
                  color: cat.color, fontFamily: 'var(--font-mono)',
                  fontSize: 11, letterSpacing: 2, marginBottom: 14,
                  textTransform: 'uppercase',
                }}>▸ {cat.cat}</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {cat.items.map(item => (
                    <span key={item} style={{
                      background: cat.color + '18', border: `1px solid ${cat.color}30`,
                      color: cat.color, fontSize: 12, padding: '5px 12px',
                      borderRadius: 20, fontWeight: 500, cursor: 'default',
                      transition: 'background 0.18s, transform 0.18s',
                    }}
                      onMouseEnter={e => { e.target.style.background = cat.color + '35'; e.target.style.transform = 'translateY(-1px)' }}
                      onMouseLeave={e => { e.target.style.background = cat.color + '18'; e.target.style.transform = 'translateY(0)' }}
                    >{item}</span>
                  ))}
                </div>
              </div>
            </AnimCard>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 600px) { .skills-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}