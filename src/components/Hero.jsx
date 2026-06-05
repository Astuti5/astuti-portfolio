import { useState, useEffect, useRef } from 'react'
import { PERSONAL, STATS, TERMINAL_LINES, CURRENTLY_LEARNING } from '../constants/data'

function Terminal({ lines }) {
  const [shown, setShown] = useState(0)
  useEffect(() => {
    if (shown < lines.length) {
      const t = setTimeout(() => setShown(s => s + 1), 420)
      return () => clearTimeout(t)
    }
  }, [shown, lines.length])

  const colorMap = {
    prompt: 'var(--mint)',
    output: 'var(--cream-muted)',
    success: 'var(--mint)',
    error: 'var(--rose)',
  }

  return (
    <div style={{
      background: '#080506', border: '1px solid var(--border)',
      borderRadius: 'var(--radius-md)', padding: '18px 22px',
      fontFamily: 'var(--font-mono)', fontSize: 13, lineHeight: 1.85,
    }}>
      {/* Traffic lights */}
      <div style={{ display: 'flex', gap: 7, marginBottom: 14 }}>
        {['var(--burgundy)', 'var(--amber)', 'var(--mint)'].map((c, i) => (
          <div key={i} style={{ width: 11, height: 11, borderRadius: '50%', background: c }} />
        ))}
        <span style={{ color: 'var(--text-dim)', fontSize: 11, marginLeft: 8 }}>astuti@kali:~</span>
      </div>

      {lines.slice(0, shown).map((l, i) => (
        <div key={i} style={{ color: colorMap[l.type] || 'var(--cream-muted)', marginBottom: 2 }}>
          {l.type === 'prompt' && (
            <span style={{ color: 'var(--burgundy-glow)', userSelect: 'none' }}>❯ </span>
          )}
          {l.text}
        </div>
      ))}
      {shown < lines.length && (
        <span style={{ color: 'var(--burgundy-glow)', animation: 'blink 1s step-end infinite' }}>█</span>
      )}
    </div>
  )
}

function StatCard({ value, suffix, label, delay }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setStarted(true); obs.disconnect() }
    }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    const t = setTimeout(() => {
      let start = 0
      const step = Math.ceil(value / 30)
      const timer = setInterval(() => {
        start += step
        if (start >= value) { setCount(value); clearInterval(timer) }
        else setCount(start)
      }, 40)
      return () => clearInterval(timer)
    }, delay * 1000)
    return () => clearTimeout(t)
  }, [started, value, delay])

  return (
    <div ref={ref} style={{
      background: 'var(--bg-card)', border: '1px solid var(--border)',
      borderRadius: 'var(--radius-sm)', padding: '14px 10px', textAlign: 'center',
      transition: 'border-color 0.3s',
    }}
      onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--burgundy)'}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
    >
      <div style={{
        color: 'var(--burgundy-glow)', fontSize: 22, fontWeight: 800,
        fontFamily: 'var(--font-mono)', lineHeight: 1,
      }}>
        {count}{suffix}
      </div>
      <div style={{ color: 'var(--text-muted)', fontSize: 11, marginTop: 4 }}>{label}</div>
    </div>
  )
}

// Social icon button
function SocialBtn({ href, label, children }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" aria-label={label} style={{
      width: 40, height: 40, borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border)', background: 'var(--bg-card)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: 18, cursor: 'pointer', textDecoration: 'none',
      transition: 'border-color 0.2s, background 0.2s, transform 0.2s',
    }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--burgundy)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)' }}
    >{children}</a>
  )
}

export default function Hero() {
  const [heroVisible, setHeroVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex', alignItems: 'center',
      padding: '100px 5vw 60px',
      position: 'relative', zIndex: 1,
    }}>
      {/* Background radial gradients */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: `
          radial-gradient(circle at 10% 20%, rgba(139,26,47,0.12) 0%, transparent 40%),
          radial-gradient(circle at 90% 80%, rgba(90,191,168,0.06) 0%, transparent 40%)
        `,
      }} />

      <div style={{ maxWidth: 1160, margin: '0 auto', width: '100%' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 56, alignItems: 'center',
        }} className="hero-grid">

          {/* LEFT */}
          <div style={{
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible ? 'translateY(0)' : 'translateY(32px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}>
            {/* Status badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(90,191,168,0.1)', border: '1px solid rgba(90,191,168,0.3)',
              borderRadius: 20, padding: '5px 14px', marginBottom: 20,
              fontSize: 12, color: 'var(--mint)', fontFamily: 'var(--font-mono)',
            }}>
              <span style={{
                width: 7, height: 7, borderRadius: '50%',
                background: 'var(--mint)', animation: 'pulse-dot 2s infinite',
                display: 'inline-block',
              }} />
              {PERSONAL.status}
            </div>

            <h1 style={{
              fontSize: 'clamp(38px, 5vw, 60px)',
              fontWeight: 800, lineHeight: 1.1,
              letterSpacing: -1, marginBottom: 10,
            }}>
              Hi, I'm{' '}
              <span style={{
                color: 'var(--burgundy-glow)',
                textShadow: '0 0 40px rgba(139,26,47,0.5)',
              }}>
                Astuti Kumari
              </span>
            </h1>

            <div style={{
              fontFamily: 'var(--font-mono)', color: 'var(--rose)',
              fontSize: 'clamp(13px, 1.5vw, 15px)', fontWeight: 600,
              marginBottom: 20, letterSpacing: 0.3,
            }}>
              Cybersecurity Student · Penetration Tester · Bug Bounty Learner
            </div>

            <p style={{
              color: 'var(--cream-muted)', lineHeight: 1.8,
              fontSize: 15, maxWidth: 460, marginBottom: 28,
            }}>
              {PERSONAL.tagline}
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: 12, marginBottom: 28, flexWrap: 'wrap' }}>
              <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} style={{
                background: 'var(--burgundy)', color: 'var(--cream)',
                border: 'none', padding: '12px 24px', borderRadius: 'var(--radius-sm)',
                fontSize: 14, fontWeight: 600, cursor: 'pointer',
                transition: 'background 0.2s, transform 0.15s',
              }}
                onMouseEnter={e => { e.target.style.background = 'var(--burgundy-light)'; e.target.style.transform = 'translateY(-1px)' }}
                onMouseLeave={e => { e.target.style.background = 'var(--burgundy)'; e.target.style.transform = 'translateY(0)' }}
              >View Projects →</button>

              <a href={PERSONAL.resume} download style={{
                background: 'transparent', color: 'var(--rose)',
                border: '1px solid var(--burgundy)', padding: '12px 24px',
                borderRadius: 'var(--radius-sm)', fontSize: 14, fontWeight: 600,
                cursor: 'pointer', textDecoration: 'none', display: 'inline-flex',
                alignItems: 'center', gap: 6,
                transition: 'background 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(139,26,47,0.2)'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >↓ Resume</a>
            </div>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: 10, marginBottom: 36 }}>
              <SocialBtn href={PERSONAL.github} label="GitHub">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="var(--cream-muted)">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </SocialBtn>
              <SocialBtn href={PERSONAL.linkedin} label="LinkedIn">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="var(--cream-muted)">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </SocialBtn>
              <SocialBtn href={PERSONAL.tryhackme} label="TryHackMe">
                <span style={{ fontSize: 16 }}>🚩</span>
              </SocialBtn>
            </div>
          </div>

          {/* RIGHT */}
          <div style={{
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible ? 'translateY(0)' : 'translateY(32px)',
            transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s',
          }}>
            <Terminal lines={TERMINAL_LINES} />

            {/* Stats */}
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(4,1fr)',
              gap: 10, marginTop: 14,
            }}>
              {STATS.map((s, i) => (
                <StatCard key={i} {...s} delay={i * 0.15} />
              ))}
            </div>
          </div>
        </div>

        {/* Currently Learning strip */}
        <div style={{
          marginTop: 56,
          padding: '20px 24px',
          background: 'rgba(90,191,168,0.05)',
          border: '1px solid rgba(90,191,168,0.15)',
          borderRadius: 'var(--radius-md)',
          opacity: heroVisible ? 1 : 0,
          transform: heroVisible ? 'translateY(0)' : 'translateY(16px)',
          transition: 'opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s',
        }}>
          <div style={{
            fontFamily: 'var(--font-mono)', color: 'var(--mint)',
            fontSize: 12, letterSpacing: 2, marginBottom: 12, textTransform: 'uppercase',
          }}>// Currently Working On</div>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 10,
          }}>
            {CURRENTLY_LEARNING.map((item, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 10,
                color: 'var(--cream-muted)', fontSize: 13,
              }}>
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
        }
      `}</style>
    </section>
  )
}