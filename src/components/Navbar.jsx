import { useState, useEffect } from 'react'
import { NAV_ITEMS, PERSONAL } from '../constants/data'

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 48)
      // Update active section based on scroll position
      const sections = NAV_ITEMS.map(n => document.getElementById(n.id))
      const current = sections.findLast(el => {
        if (!el) return false
        return el.getBoundingClientRect().top <= 120
      })
      if (current) setActive(current.id)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMobileOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setActive(id)
    setMobileOpen(false)
  }

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        background: scrolled ? 'rgba(13,10,11,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none',
        transition: 'background 0.35s, border 0.35s',
        padding: '0 5vw',
      }}>
        <div style={{
          maxWidth: 1160, margin: '0 auto',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          height: 64,
        }}>
          {/* Logo */}
          <button onClick={() => scrollTo('home')} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            fontFamily: 'var(--font-mono)', color: 'var(--burgundy-glow)',
            fontWeight: 700, fontSize: 15, letterSpacing: 1,
            display: 'flex', alignItems: 'center', gap: 8,
          }}>
            <span style={{
              width: 28, height: 28, borderRadius: '50%',
              background: 'var(--burgundy)', display: 'flex', alignItems: 'center',
              justifyContent: 'center', fontSize: 13,
            }}>🔐</span>
            AK.sec
          </button>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 2 }} className="nav-desktop">
            {NAV_ITEMS.map(({ label, id }) => (
              <button key={id} onClick={() => scrollTo(id)} style={{
                background: 'none', border: 'none', cursor: 'pointer',
                padding: '6px 12px', borderRadius: 'var(--radius-sm)',
                fontSize: 13, fontWeight: 500,
                color: active === id ? 'var(--burgundy-glow)' : 'var(--text-muted)',
                borderBottom: active === id ? '2px solid var(--burgundy-glow)' : '2px solid transparent',
                transition: 'color 0.2s, border-color 0.2s',
              }}
                onMouseEnter={e => { if (active !== id) e.currentTarget.style.color = 'var(--cream)' }}
                onMouseLeave={e => { if (active !== id) e.currentTarget.style.color = 'var(--text-muted)' }}
              >{label}</button>
            ))}

            {/* Resume Button */}
            <a href={PERSONAL.resume} download style={{
              marginLeft: 8,
              background: 'var(--burgundy)', color: 'var(--cream)',
              border: 'none', padding: '7px 16px', borderRadius: 'var(--radius-sm)',
              fontSize: 13, fontWeight: 600, cursor: 'pointer',
              textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 5,
              transition: 'background 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--burgundy-light)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--burgundy)'}
            >Resume ↓</a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle menu"
            style={{
              display: 'none', background: 'none', border: 'none',
              cursor: 'pointer', padding: 6, flexDirection: 'column', gap: 5,
            }}
            className="hamburger"
          >
            {[0,1,2].map(i => (
              <span key={i} style={{
                display: 'block', width: 22, height: 2,
                background: mobileOpen && i===1 ? 'transparent' : 'var(--cream)',
                borderRadius: 2,
                transform: mobileOpen ? (i===0 ? 'rotate(45deg) translate(5px,5px)' : i===2 ? 'rotate(-45deg) translate(5px,-5px)' : '') : 'none',
                transition: 'transform 0.25s, background 0.25s',
              }} />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 190,
          background: 'rgba(13,10,11,0.98)', backdropFilter: 'blur(16px)',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', gap: 8,
        }}>
          {NAV_ITEMS.map(({ label, id }) => (
            <button key={id} onClick={() => scrollTo(id)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: active === id ? 'var(--burgundy-glow)' : 'var(--cream)',
              fontSize: 22, fontWeight: 600, padding: '10px 24px',
            }}>{label}</button>
          ))}
          <a href={PERSONAL.resume} download style={{
            marginTop: 16,
            background: 'var(--burgundy)', color: 'var(--cream)',
            padding: '12px 32px', borderRadius: 'var(--radius-md)',
            fontSize: 16, fontWeight: 600, textDecoration: 'none',
          }}>Resume ↓</a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  )
}
