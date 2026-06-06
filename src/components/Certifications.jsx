import { useState } from 'react'
import { SectionHeader, AnimCard } from './About'
import { CERTS } from '../constants/data'

function Modal({ cert, onClose }) {
  if (!cert) return null

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '20px',
        animation: 'fadeIn 0.2s ease',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--burgundy)',
          borderRadius: 'var(--radius-lg)',
          padding: '28px',
          maxWidth: 520, width: '100%',
          boxShadow: '0 24px 80px rgba(0,0,0,0.6)',
          animation: 'slideUp 0.25s ease',
          position: 'relative',
        }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: 'absolute', top: 14, right: 14,
            background: 'rgba(255,255,255,0.08)', border: 'none',
            color: 'var(--cream-muted)', width: 30, height: 30,
            borderRadius: '50%', cursor: 'pointer', fontSize: 16,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
        >✕</button>

        {/* Icon + Title */}
        <div style={{ textAlign: 'center', marginBottom: 20 }}>
          <div style={{ fontSize: 40, marginBottom: 10 }}>{cert.icon}</div>
          <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 4 }}>{cert.name}</h3>
          <div style={{ color: 'var(--rose)', fontSize: 13, fontFamily: 'var(--font-mono)' }}>{cert.org}</div>
        </div>

        {/* Certificate image preview */}
        {cert.image && (
          <div style={{
            borderRadius: 'var(--radius-sm)',
            overflow: 'hidden', marginBottom: 16,
            border: '1px solid var(--border)',
            background: '#000',
          }}>
            <img
              src={cert.image}
              alt={cert.name}
              style={{ width: '100%', display: 'block', maxHeight: 280, objectFit: 'contain' }}
            />
          </div>
        )}

        {/* No image placeholder */}
        {!cert.image && !cert.verifyUrl && (
          <div style={{
            background: 'rgba(139,26,47,0.1)', border: '1px dashed rgba(139,26,47,0.3)',
            borderRadius: 'var(--radius-sm)', padding: '24px',
            textAlign: 'center', marginBottom: 16, color: 'var(--text-muted)', fontSize: 13,
          }}>
            <div style={{ fontSize: 28, marginBottom: 8 }}>📎</div>
            Add your certificate image path in <code style={{ color: 'var(--rose)', fontSize: 12 }}>data.js</code>
            <br /><span style={{ fontSize: 11, opacity: 0.7 }}>e.g. image: "/certs/tata.jpg"</span>
          </div>
        )}

        {/* Action buttons */}
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {cert.verifyUrl && (
            <a
              href={cert.verifyUrl}
              target="_blank"
              rel="noreferrer"
              style={{
                flex: 1, textAlign: 'center',
                background: 'var(--burgundy)', color: 'var(--cream)',
                padding: '10px 16px', borderRadius: 'var(--radius-sm)',
                fontSize: 13, fontWeight: 700, textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--burgundy-light)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--burgundy)'}
            >
              ✓ Verify Certificate
            </a>
          )}
          {cert.image && (
            <a
              href={cert.image}
              download
              style={{
                flex: 1, textAlign: 'center',
                background: 'rgba(255,255,255,0.06)', color: 'var(--cream-muted)',
                border: '1px solid var(--border)',
                padding: '10px 16px', borderRadius: 'var(--radius-sm)',
                fontSize: 13, fontWeight: 600, textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}
            >
              ↓ Download
            </a>
          )}
        </div>

        <p style={{
          textAlign: 'center', color: 'var(--text-dim)', fontSize: 11,
          marginTop: 14, fontFamily: 'var(--font-mono)',
        }}>Click outside to close</p>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(16px) } to { opacity: 1; transform: translateY(0) } }
      `}</style>
    </div>
  )
}

export default function Certifications() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="certifications" className="section section-alt">
      <div className="container">
        <SectionHeader
          label="Certifications"
          title="Verified Achievements"
          sub="Click any certificate to view or verify it."
        />

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14,
        }} className="certs-grid">
          {CERTS.map((cert, i) => (
            <AnimCard key={i} delay={i * 0.06}>
              <div
                className="card"
                onClick={() => setSelected(cert)}
                style={{
                  textAlign: 'center', padding: '20px 14px',
                  cursor: 'pointer',
                  transition: 'border-color 0.2s, transform 0.2s, box-shadow 0.2s',
                  position: 'relative',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--burgundy)'
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(139,26,47,0.2)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div style={{ fontSize: 26, marginBottom: 8 }}>{cert.icon}</div>
                <div style={{
                  color: 'var(--cream)', fontSize: 13, fontWeight: 600,
                  lineHeight: 1.4, marginBottom: 5,
                }}>{cert.name}</div>
                <div style={{ color: 'var(--text-dim)', fontSize: 11, marginBottom: 10 }}>{cert.org}</div>

                {/* "View" hint */}
                <div style={{
                  fontSize: 10, color: 'var(--burgundy-glow)',
                  fontFamily: 'var(--font-mono)', letterSpacing: 1,
                  opacity: 0.75,
                }}>
                  {cert.verifyUrl ? '✓ Click to verify' : cert.image ? '📄 Click to view' : '🔒 Click to open'}
                </div>
              </div>
            </AnimCard>
          ))}
        </div>
      </div>

      <Modal cert={selected} onClose={() => setSelected(null)} />

      <style>{`
        @media (max-width: 900px) { .certs-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 480px) { .certs-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}