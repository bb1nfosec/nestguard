import { motion } from 'framer-motion'
import * as Icons from '../icons.jsx'
import { services } from '../data.js'
import { fadeUp, stagger } from './Reveal.jsx'

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
          {services.map((sv) => {
            const Icon = Icons[sv.icon]
            return (
              <motion.div
                key={sv.title}
                className="card"
                variants={fadeUp}
                whileHover={{ y: -6, rotate: -0.4, boxShadow: 'var(--shadow)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
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
          })}
        </motion.div>
      </div>
    </section>
  )
}
