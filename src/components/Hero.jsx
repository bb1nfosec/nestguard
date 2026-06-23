import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring, useMotionValue, useReducedMotion } from 'framer-motion'
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

  // Scroll parallax
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const collageY = useTransform(scrollYProgress, [0, 1], [0, 90])
  const textY = useTransform(scrollYProgress, [0, 1], [0, 40])

  // Mouse-driven 3D parallax
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const smx = useSpring(mx, { stiffness: 120, damping: 18, mass: 0.4 })
  const smy = useSpring(my, { stiffness: 120, damping: 18, mass: 0.4 })
  const sceneRotY = useTransform(smx, [-0.5, 0.5], [15, -15])
  const sceneRotX = useTransform(smy, [-0.5, 0.5], [-11, 11])
  const layer = (ax, ay) => ({
    x: useTransform(smx, [-0.5, 0.5], ax),
    y: useTransform(smy, [-0.5, 0.5], ay),
  })
  const ph1 = layer([-10, 10], [-8, 8])
  const ph2 = layer([24, -24], [18, -18])
  const k1 = layer([-32, 32], [26, -26])
  const k2 = layer([28, -28], [-22, 22])
  const g1 = layer([22, -22], [16, -16])
  const g2 = layer([-18, 18], [-14, 14])

  const onMove = (e) => {
    if (reduce || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }
  const onLeave = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <section className="hero" ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}>
      <motion.div className="glow g1" style={reduce ? undefined : g1} aria-hidden="true" />
      <motion.div className="glow g2" style={reduce ? undefined : g2} aria-hidden="true" />
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

        <motion.div style={{ y: reduce ? 0 : collageY }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1], delay: 0.2 }}
          >
            <motion.div
              className="collage"
              style={reduce ? undefined : { rotateX: sceneRotX, rotateY: sceneRotY, transformPerspective: 1000 }}
            >
              <motion.div className="ph ph1" style={{ ...(reduce ? {} : ph1), z: 10 }}>
                <div className="house"><HouseLine /></div>
              </motion.div>
              <motion.div className="ph ph2" style={{ ...(reduce ? {} : ph2), z: 55 }}>
                <div className="house"><HouseLine stroke="rgba(201,96,63,.5)" /></div>
              </motion.div>
              <motion.div className="kpi k1" style={{ ...(reduce ? {} : k1), z: 90 }}>
                <span className="ic" style={{ background: 'var(--terra)' }}><Rupee /></span>
                <div>No hidden charges<small>transparent invoices</small></div>
              </motion.div>
              <motion.div className="kpi k2" style={{ ...(reduce ? {} : k2), z: 80 }}>
                <span className="ic" style={{ background: 'var(--green)' }}><Shield /></span>
                <div>Verified &amp; trusted<small>real local support</small></div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
