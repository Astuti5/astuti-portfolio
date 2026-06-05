import { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Experience from './Experience'
import Projects from './Projects'
import Labs from './Labs'
import Skills from './Skills'
import Certifications from './Certifications'
import Blogs from './Blogs'
import Contact from './Contact'
import Footer from './Footer'

export default function Portfolio() {
  const [bgLoaded, setBgLoaded] = useState(false)

  useEffect(() => {
    // Slight delay so fonts load before content shows
    const t = setTimeout(() => setBgLoaded(true), 50)
    return () => clearTimeout(t)
  }, [])

  return (
    <div style={{
      background: 'var(--bg)', color: 'var(--text)',
      minHeight: '100vh', overflowX: 'hidden',
      opacity: bgLoaded ? 1 : 0,
      transition: 'opacity 0.3s',
    }}>
      {/* Fixed ambient background */}
      <div style={{
        position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0,
        background: `
          radial-gradient(ellipse at 0% 0%, rgba(139,26,47,0.08) 0%, transparent 50%),
          radial-gradient(ellipse at 100% 100%, rgba(90,191,168,0.05) 0%, transparent 50%)
        `,
      }} />

      <Navbar />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Labs />
        <Skills />
        <Certifications />
        <Blogs />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}