import { motion } from 'framer-motion'
import { quotes } from '../data.js'
import { fadeUp, stagger } from './Reveal.jsx'

export default function Testimonials() {
  return (
    <section className="pad" style={{ background: 'var(--cream-2)' }}>
      <div className="wrap">
        <motion.div
          className="sec-head"
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: '0px 0px -8% 0px' }}
        >
          <span className="eyebrow">Kind words</span>
          <h2>Owners who can finally relax</h2>
        </motion.div>

        <motion.div
          className="quotes"
          variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '0px 0px -8% 0px' }}
        >
          {quotes.map((q) => (
            <motion.figure className="quote" key={q.name} variants={fadeUp}>
              <span className="mark">&ldquo;</span>
              <p>{q.p}</p>
              <figcaption className="who">
                <span className="av" style={{ background: q.bg, color: q.color }}>{q.av}</span>
                <div>
                  <b>{q.name}</b>
                  <span>{q.loc}</span>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
