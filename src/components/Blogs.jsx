import { SectionHeader, AnimCard } from './About'
import { BLOGS, PERSONAL } from '../constants/data'

export default function Blogs() {
  return (
    <section id="blogs" className="section">
      <div className="container">
        <SectionHeader
          label="Technical Writing"
          title="Security Writeups"
          sub="Breaking down vulnerabilities, tools, and concepts through practical writing."
        />

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16,
        }} className="blogs-grid">
          {BLOGS.map((blog, i) => (
            <AnimCard key={i} delay={i * 0.08}>
              <a href={blog.link} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                <div className="card" style={{
                  padding: '22px 20px', height: '100%',
                  display: 'flex', flexDirection: 'column', gap: 10,
                  transition: 'border-color 0.25s, transform 0.25s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-hover)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 24 }}>{blog.icon}</span>
                    <span style={{
                      background: 'rgba(139,26,47,0.2)', color: 'var(--rose)',
                      border: '1px solid rgba(139,26,47,0.3)',
                      fontSize: 10, padding: '3px 9px', borderRadius: 12,
                      fontFamily: 'var(--font-mono)',
                    }}>{blog.tag}</span>
                  </div>
                  <h3 style={{ color: 'var(--text)', fontSize: 14, fontWeight: 700, lineHeight: 1.4 }}>{blog.title}</h3>
                  <p style={{ color: 'var(--cream-muted)', fontSize: 13, lineHeight: 1.65, flex: 1 }}>{blog.desc}</p>
                  <div style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    borderTop: '1px solid var(--border)', paddingTop: 10,
                  }}>
                    <span style={{ color: 'var(--text-dim)', fontSize: 11, fontFamily: 'var(--font-mono)' }}>{blog.readTime}</span>
                    <span style={{ color: 'var(--burgundy-glow)', fontSize: 12, fontWeight: 600 }}>Read →</span>
                  </div>
                </div>
              </a>
            </AnimCard>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 28 }}>
          <a href={PERSONAL.github} target="_blank" rel="noreferrer" style={{
            color: 'var(--rose)', border: '1px solid var(--burgundy)',
            padding: '10px 24px', borderRadius: 'var(--radius-sm)',
            fontSize: 14, fontWeight: 600, textDecoration: 'none',
            display: 'inline-block', transition: 'background 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(139,26,47,0.2)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >All Writeups on Medium →</a>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) { .blogs-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}