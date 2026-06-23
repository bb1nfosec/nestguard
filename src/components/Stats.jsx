import { motion } from 'framer-motion'
import { stats } from '../data.js'
import { fadeUp, stagger } from './Reveal.jsx'

export default function Stats() {
  return (
    <section style={{ padding: '0 0 30px' }}>
      <div className="wrap">
        <motion.div
          className="stats"
          variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '0px 0px -10% 0px' }}
        >
          {stats.map((s) => (
            <motion.div className="stat" key={s.s} variants={fadeUp}>
              <b>{s.b}</b>
              <span>{s.s}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
