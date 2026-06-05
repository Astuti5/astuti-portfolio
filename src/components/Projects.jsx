import { useState } from 'react'
import { SectionHeader, AnimCard, Badge } from './About'
import { PROJECTS } from '../constants/data'

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  )
}

export default function Projects() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeader
          label="Projects"
          title="What I've Built"
          sub="Security tools, research projects, and practical demonstrations of offensive and defensive techniques."
        />

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 18,
        }} className="projects-grid">
          {PROJECTS.map((proj, i) => (
            <AnimCard key={i} delay={i * 0.07}>
              <div style={{
                background: 'var(--bg-card)',
                border: `1px solid ${hovered === i ? 'var(--burgundy)' : 'var(--border)'}`,
                borderRadius: 'var(--radius-md)',
                padding: '22px 20px',
                height: '100%',
                display: 'flex', flexDirection: 'column',
                transform: hovered === i ? 'translateY(-5px)' : 'translateY(0)',
                transition: 'border-color 0.25s, transform 0.25s, background 0.25s',
                background: hovered === i ? 'var(--bg-card-hover)' : 'var(--bg-card)',
              }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <div style={{ fontSize: 26, marginBottom: 10 }}>{proj.icon}</div>
                <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 8 }}>{proj.title}</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 12 }}>
                  {proj.tech.map(t => <Badge key={t}>{t}</Badge>)}
                </div>
                <p style={{
                  color: 'var(--cream-muted)', fontSize: 13.5, lineHeight: 1.7,
                  flex: 1, marginBottom: 16,
                }}>{proj.desc}</p>

                {/* Buttons */}
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {proj.github && (
                    <a href={proj.github} target="_blank" rel="noreferrer" style={{
                      display: 'inline-flex', alignItems: 'center', gap: 6,
                      background: 'rgba(255,255,255,0.06)', color: 'var(--cream-muted)',
                      border: '1px solid var(--border-subtle)',
                      padding: '6px 13px', borderRadius: 'var(--radius-sm)',
                      fontSize: 12, fontWeight: 600, textDecoration: 'none',
                      transition: 'background 0.2s, color 0.2s, border-color 0.2s',
                    }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = 'rgba(139,26,47,0.25)'
                        e.currentTarget.style.color = 'var(--rose)'
                        e.currentTarget.style.borderColor = 'var(--burgundy)'
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                        e.currentTarget.style.color = 'var(--cream-muted)'
                        e.currentTarget.style.borderColor = 'var(--border-subtle)'
                      }}
                    >
                      <GitHubIcon /> GitHub
                    </a>
                  )}
                  {proj.demo && (
                    <a href={proj.demo} target="_blank" rel="noreferrer" style={{
                      display: 'inline-flex', alignItems: 'center', gap: 5,
                      color: 'var(--mint)', fontSize: 12, fontWeight: 600,
                      padding: '6px 13px', borderRadius: 'var(--radius-sm)',
                      border: '1px solid rgba(90,191,168,0.3)',
                      textDecoration: 'none', transition: 'background 0.2s',
                    }}
                      onMouseEnter={e => e.currentTarget.style.background = 'rgba(90,191,168,0.1)'}
                      onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                    >Demo ↗</a>
                  )}
                </div>
              </div>
            </AnimCard>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .projects-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 580px) { .projects-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}