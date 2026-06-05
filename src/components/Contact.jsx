import { SectionHeader, AnimCard } from './About'
import { PERSONAL } from '../constants/data'

const LINKS = [
  { icon: '📧', label: 'Email',     value: PERSONAL.email,     href: `mailto:${PERSONAL.email}` },
  { icon: '💻', label: 'GitHub',    value: 'github.com/yourusername', href: PERSONAL.github },
  { icon: '🔗', label: 'LinkedIn',  value: 'linkedin.com/in/yourusername', href: PERSONAL.linkedin },
  { icon: '🚩', label: 'TryHackMe', value: 'tryhackme.com/p/yourusername', href: PERSONAL.tryhackme },
  { icon: '📍', label: 'Location',  value: PERSONAL.location,  href: null },
]

const SEEKING = ['AppSec Intern', 'VAPT Intern', 'Pentesting Intern', 'Bug Bounty', 'Security Research']

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeader
          label="Contact"
          title="Let's Connect"
          sub="Open to internship opportunities in Application Security, VAPT, Penetration Testing, and Bug Bounty research."
        />

        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <AnimCard>
            <div className="card" style={{ padding: '36px 32px' }}>
              {/* Avatar */}
              <div style={{
                width: 68, height: 68, borderRadius: '50%',
                background: 'rgba(139,26,47,0.2)', border: '2px solid rgba(139,26,47,0.4)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 28, margin: '0 auto 16px',
                animation: 'float 3.5s ease-in-out infinite',
              }}>🔐</div>

              <h3 style={{ textAlign: 'center', fontSize: 20, fontWeight: 700, marginBottom: 4 }}>
                {PERSONAL.name}
              </h3>
              <div style={{
                textAlign: 'center', color: 'var(--rose)',
                fontFamily: 'var(--font-mono)', fontSize: 12,
                marginBottom: 28, letterSpacing: 0.3,
              }}>
                Cybersecurity Student | Penetration Tester
              </div>

              {/* Links */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
                {LINKS.map((item, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: 12,
                    padding: '11px 14px',
                    background: 'rgba(255,255,255,0.03)',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border)',
                    transition: 'border-color 0.2s',
                  }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--border-hover)'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
                  >
                    <span style={{ fontSize: 17 }}>{item.icon}</span>
                    <span style={{ color: 'var(--text-muted)', fontSize: 13, minWidth: 64 }}>{item.label}</span>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noreferrer" style={{
                        color: 'var(--rose)', fontSize: 13, textDecoration: 'none',
                        marginLeft: 'auto', transition: 'color 0.2s',
                      }}
                        onMouseEnter={e => e.currentTarget.style.color = 'var(--burgundy-glow)'}
                        onMouseLeave={e => e.currentTarget.style.color = 'var(--rose)'}
                      >{item.value}</a>
                    ) : (
                      <span style={{ color: 'var(--cream-muted)', fontSize: 13, marginLeft: 'auto' }}>{item.value}</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Resume */}
              <a href={PERSONAL.resume} download style={{
                display: 'block', width: '100%', textAlign: 'center',
                background: 'var(--burgundy)', color: 'var(--cream)',
                padding: '12px', borderRadius: 'var(--radius-sm)',
                fontSize: 14, fontWeight: 700, textDecoration: 'none',
                marginBottom: 20, transition: 'background 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--burgundy-light)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--burgundy)'}
              >↓ Download Resume</a>

              {/* Seeking */}
              <div style={{
                padding: '14px 16px',
                background: 'rgba(139,26,47,0.1)',
                border: '1px solid rgba(139,26,47,0.25)',
                borderRadius: 'var(--radius-sm)',
              }}>
                <div style={{
                  color: 'var(--rose)', fontSize: 11, fontFamily: 'var(--font-mono)',
                  letterSpacing: 1, marginBottom: 10,
                }}>// Currently Seeking</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 7 }}>
                  {SEEKING.map(t => (
                    <span key={t} style={{
                      background: 'rgba(90,191,168,0.1)', border: '1px solid rgba(90,191,168,0.25)',
                      color: 'var(--mint)', fontSize: 11, padding: '4px 11px', borderRadius: 16,
                      fontFamily: 'var(--font-mono)',
                    }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </AnimCard>
        </div>
      </div>
    </section>
  )
}