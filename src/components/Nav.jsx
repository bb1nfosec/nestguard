import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HouseMark, Menu } from '../icons.jsx'
import { scrollToTop } from '../scroll.js'

const links = [
  ['#services', 'Services'],
  ['#how', 'How it works'],
  ['#nri', 'NRI'],
  ['#faq', 'FAQ'],
  ['#contact', 'Contact'],
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  // Scroll spy
  useEffect(() => {
    const ids = links.map(([h]) => h.slice(1))
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive('#' + e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  const toTop = (e) => {
    e.preventDefault()
    scrollToTop()
  }

  return (
    <>
      <header className="nav">
        <div className="wrap">
          <button className="brand" onClick={toTop} aria-label="NestGuard home">
            <span className="mark"><HouseMark /></span>NestGuard
          </button>
          <nav className="nav-links" aria-label="Primary">
            {links.map(([href, label]) => (
              <a key={href} href={href} className={active === href ? 'active' : ''}>{label}</a>
            ))}
          </nav>
          <div className="nav-right">
            <a className="btn btn-terra" href="#contact">Talk to us</a>
            <button
              className="menu-btn"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobileMenu"
            ><Menu /></button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobileMenu"
            className="mobile-menu"
            aria-label="Mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
          >
            {links.map(([href, label]) => (
              <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
            ))}
            <a className="cta-link" href="#contact" onClick={() => setOpen(false)}>Talk to us →</a>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
