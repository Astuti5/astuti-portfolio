import { SectionHeader, AnimCard } from './About'
import { CERTS } from '../constants/data'

export default function Certifications() {
  return (
    <section id="certifications" className="section section-alt">
      <div className="container">
        <SectionHeader
          label="Certifications"
          title="Verified Achievements"
          sub="Credentials from industry programs, virtual experiences, and internships."
        />

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14,
        }} className="certs-grid">
          {CERTS.map((cert, i) => (
            <AnimCard key={i} delay={i * 0.06}>
              <div className="card" style={{
                textAlign: 'center', padding: '20px 14px',
                transition: 'border-color 0.2s, transform 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--burgundy)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <div style={{ fontSize: 26, marginBottom: 8 }}>{cert.icon}</div>
                <div style={{ color: 'var(--cream)', fontSize: 13, fontWeight: 600, lineHeight: 1.4, marginBottom: 5 }}>{cert.name}</div>
                <div style={{ color: 'var(--text-dim)', fontSize: 11 }}>{cert.org}</div>
              </div>
            </AnimCard>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .certs-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 480px) { .certs-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}