import { motion } from 'framer-motion'
import { steps } from '../data.js'
import { fadeUp, stagger } from './Reveal.jsx'

export default function HowItWorks() {
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
          className="timeline"
          variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '0px 0px -10% 0px' }}
        >
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
