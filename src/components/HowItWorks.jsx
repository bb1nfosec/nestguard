import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { steps } from '../data.js'
import { fadeUp, stagger } from './Reveal.jsx'

export default function HowItWorks() {
  const lineRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: lineRef, offset: ['start 75%', 'end 70%'] })
  const scaleY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1]), { stiffness: 90, damping: 26 })

  return (
    <section className="pad" id="how" style={{ background: 'var(--cream-2)' }}>
      <div className="wrap">
        <motion.div
          className="sec-head"
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: '0px 0px -8% 0px' }}
        >
          <span className="eyebrow">How it works</span>
          <h2>Getting started is genuinely easy</h2>
          <p>Simple to understand, simple to start, and dependable once we're looking after your place.</p>
        </motion.div>

        <motion.div
          ref={lineRef}
          className="timeline"
          variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '0px 0px -10% 0px' }}
        >
          <motion.div className="timeline-progress" style={{ scaleY }} aria-hidden="true" />
          {steps.map((st) => (
            <motion.div className="tstep" key={st.n} variants={fadeUp}>
              <div className="b">{st.n}</div>
              <div>
                <h4>{st.h}</h4>
                <p>{st.p}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
