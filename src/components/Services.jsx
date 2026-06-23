import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'
import * as Icons from '../icons.jsx'
import { services } from '../data.js'
import { fadeUp, stagger } from './Reveal.jsx'

function TiltCard({ sv }) {
  const Icon = Icons[sv.icon]
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const rx = useMotionValue(0)
  const ry = useMotionValue(0)
  const srx = useSpring(rx, { stiffness: 200, damping: 18 })
  const sry = useSpring(ry, { stiffness: 200, damping: 18 })

  const onMove = (e) => {
    if (reduce || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    ry.set(px * 12)
    rx.set(-py * 12)
  }
  const reset = () => {
    rx.set(0)
    ry.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className="card tilt"
      variants={fadeUp}
      onMouseMove={onMove}
      onMouseLeave={reset}
      whileHover={{ y: -6 }}
      style={{ rotateX: srx, rotateY: sry, transformPerspective: 800 }}
    >
      <div className="ic" style={{ background: sv.bg }}><Icon /></div>
      <h3>{sv.title}</h3>
      <p>{sv.p}</p>
      <ul>
        {sv.li.map((l) => (
          <li key={l}><b>+</b>{l}</li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section className="pad" id="services">
      <div className="wrap">
        <motion.div
          className="sec-head"
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: '0px 0px -8% 0px' }}
        >
          <span className="eyebrow">What we do</span>
          <h2>Everything your property needs, in one friendly team</h2>
          <p>Each service solves a real owner problem — from rentals and repairs to legal help and remote NRI care.</p>
        </motion.div>

        <motion.div
          className="grid3"
          variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '0px 0px -8% 0px' }}
        >
          {services.map((sv) => (
            <TiltCard key={sv.title} sv={sv} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
