import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { Whatsapp, Check, HouseLine, Rupee, Shield } from '../icons.jsx'
import { PHONE_INTL } from '../data.js'
import Magnetic from './Magnetic.jsx'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
}
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] } },
}
const line = {
  hidden: { y: '110%' },
  show: { y: 0, transition: { type: 'spring', stiffness: 120, damping: 18 } },
}

export default function Hero() {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const collageY = useTransform(scrollYProgress, [0, 1], [0, 90])
  const collageScale = useTransform(scrollYProgress, [0, 1], [1, 1.06])
  const textY = useTransform(scrollYProgress, [0, 1], [0, 40])

  return (
    <section className="hero" ref={ref}>
      <div className="glow g1" aria-hidden="true" />
      <div className="glow g2" aria-hidden="true" />
      <div className="wrap">
        <motion.div
          variants={container} initial="hidden" animate="show"
          style={{ y: reduce ? 0 : textY }}
        >
          <motion.span className="eyebrow" variants={item}>🌿 Coimbatore &amp; nearby cities</motion.span>
          <motion.h1 variants={item}>
            <span className="line-mask"><motion.span className="line" variants={line}>Own a home here?</motion.span></span>
            <span className="line-mask">
              <motion.span className="line" variants={line}>
                We'll{' '}
                <span className="u">
                  look after it
                  <motion.svg viewBox="0 0 200 14" preserveAspectRatio="none" fill="none" aria-hidden="true">
                    <motion.path
                      d="M2 9C40 3 160 3 198 8" stroke="#E9B949" strokeWidth="4" strokeLinecap="round"
                      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                      transition={{ duration: 0.9, delay: 0.9, ease: 'easeInOut' }}
                    />
                  </motion.svg>
                </span>.
              </motion.span>
            </span>
          </motion.h1>
          <motion.p className="lead" variants={item}>
            Honest repairs, real updates and zero hidden charges — friendly property management for owners, NRIs and busy professionals.
          </motion.p>
          <motion.div className="hero-cta" variants={item}>
            <Magnetic className="btn btn-terra" href="#contact">Get free consultation</Magnetic>
            <Magnetic className="btn btn-wa" href={`https://wa.me/${PHONE_INTL}`} target="_blank" rel="noopener noreferrer">
              <Whatsapp size={18} /> WhatsApp
            </Magnetic>
          </motion.div>
          <motion.div className="assure" variants={item}>
            {['Verified vendors', 'Fair pricing', 'Regular updates'].map((t) => (
              <span key={t}><span className="heart"><Check /></span> {t}</span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div style={{ y: reduce ? 0 : collageY, scale: reduce ? 1 : collageScale }}>
          <motion.div
            className="collage"
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1], delay: 0.2 }}
          >
            <div className="ph ph1"><div className="house"><HouseLine /></div></div>
            <motion.div className="ph ph2" animate={{ y: [0, -12, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
              <div className="house"><HouseLine stroke="rgba(201,96,63,.5)" /></div>
            </motion.div>
            <motion.div className="kpi k1" animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}>
              <span className="ic" style={{ background: 'var(--terra)' }}><Rupee /></span>
              <div>No hidden charges<small>transparent invoices</small></div>
            </motion.div>
            <div className="kpi k2">
              <span className="ic" style={{ background: 'var(--green)' }}><Shield /></span>
              <div>Verified &amp; trusted<small>real local support</small></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
