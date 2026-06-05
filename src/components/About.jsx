import { useInView } from './useInView'
import { ABOUT_POINTS } from '../constants/data'

export function SectionHeader({ label, title, sub }) {
  const [ref, vis] = useInView()
  return (
    <div ref={ref} style={{
      textAlign: 'center', marginBottom: 52,
      opacity: vis ? 1 : 0,
      transform: vis ? 'translateY(0)' : 'translateY(20px)',
      transition: 'opacity 0.6s ease, transform 0.6s ease',
    }}>
      <div style={{
        color: 'var(--burgundy-glow)', fontSize: 11, letterSpacing: 3,
        textTransform: 'uppercase', marginBottom: 10,
        fontFamily: 'var(--font-mono)',
      }}>// {label}</div>
      <h2 style={{
        fontSize: 'clamp(28px, 3vw, 38px)', fontWeight: 800,
        letterSpacing: -0.5, margin: '0 0 12px',
      }}>{title}</h2>
      {sub && <p style={{ color: 'var(--text-muted)', maxWidth: 520, margin: '0 auto', fontSize: 15, lineHeight: 1.65 }}>{sub}</p>}
    </div>
  )
}

export function AnimCard({ children, delay = 0, style = {} }) {
  const [ref, vis] = useInView()
  return (
    <div ref={ref} style={{
      ...style,
      opacity: vis ? 1 : 0,
      transform: vis ? 'translateY(0)' : 'translateY(24px)',
      transition: `opacity 0.55s ease ${delay}s, transform 0.55s ease ${delay}s`,
    }}>{children}</div>
  )
}

export function Badge({ children, color = 'var(--burgundy)' }) {
  const textColor = color === 'var(--mint)' ? 'var(--mint)'
    : color === 'var(--amber)' ? 'var(--amber)'
    : 'var(--rose)'
  return (
    <span className="badge" style={{
      background: color + '22',
      borderColor: color + '44',
      color: textColor,
    }}>{children}</span>
  )
}

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeader
          label="About Me"
          title="Who I Am"
          sub="A security-focused CS student building real skills through labs, internships, and continuous hands-on practice."
        />
        <div style={{
          display: 'grid', gridTemplateColumns: '1.1fr 1fr',
          gap: 52, alignItems: 'start',
        }} className="about-grid">

          {/* Left: text */}
          <AnimCard>
            <p style={{ color: 'var(--cream-muted)', lineHeight: 1.85, fontSize: 15.5, marginBottom: 18 }}>
              I'm a pre-final year <span style={{ color: 'var(--rose)', fontWeight: 600 }}>B.Tech Computer Science & Engineering</span> student
              with a deep focus on Application Security and Web Penetration Testing. Through internships at
              Prodigy InfoTech and JD Infotech, structured labs on TryHackMe and PortSwigger, and active CTF
              participation, I've built practical experience in vulnerability assessment, reconnaissance, and secure development.
            </p>
            <p style={{ color: 'var(--cream-muted)', lineHeight: 1.85, fontSize: 15.5, marginBottom: 18 }}>
              I work primarily in <span style={{ color: 'var(--mint)' }}>Kali Linux</span>, analyze web application
              vulnerabilities using <span style={{ color: 'var(--mint)' }}>Burp Suite</span>, and build Python
              automation tools for security tasks. As Cybersecurity Trainer at Technoryx Society, I mentor junior
              students and lead an 8-member outreach team.
            </p>
            <p style={{ color: 'var(--cream-muted)', lineHeight: 1.85, fontSize: 15.5 }}>
              My goal: become a{' '}
              <span style={{ color: 'var(--burgundy-glow)', fontWeight: 700 }}>
                Security Engineer or AppSec Penetration Tester
              </span>{' '}
              — building secure systems from the ground up.
            </p>
          </AnimCard>

          {/* Right: points */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {ABOUT_POINTS.map((p, i) => (
              <AnimCard key={i} delay={i * 0.06}>
                <div className="card" style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '13px 16px',
                }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--border-hover)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
                >
                  <span style={{ fontSize: 18, flexShrink: 0 }}>{p.icon}</span>
                  <span style={{ color: 'var(--cream)', fontSize: 14, fontWeight: 500 }}>{p.text}</span>
                </div>
              </AnimCard>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  )
}