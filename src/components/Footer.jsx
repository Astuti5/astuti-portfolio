import { PERSONAL } from '../constants/data'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '24px 5vw',
      textAlign: 'center',
      position: 'relative', zIndex: 1,
    }}>
      <div style={{
        maxWidth: 1160, margin: '0 auto',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: 8,
      }}>
        <span style={{ color: 'var(--text-dim)', fontSize: 12 }}>
          © {year} {PERSONAL.name}
        </span>
        <span style={{ color: 'var(--text-dim)', fontSize: 12, textAlign: 'center' }}>
          Application Security · VAPT · Bug Bounty
        </span>
        <span style={{ fontSize: 12 }}>
          <span style={{ color: 'var(--text-dim)' }}>Built with React + Vite · </span>
          <span style={{ color: 'var(--burgundy-glow)', fontStyle: 'italic' }}>"Secure by Design."</span>
        </span>
      </div>
    </footer>
  )
}