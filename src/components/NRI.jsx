import { motion } from 'framer-motion'
import * as Icons from '../icons.jsx'
import { nriRows } from '../data.js'
import { fadeUp } from './Reveal.jsx'

export default function NRI() {
  return (
    <section className="pad" id="nri">
      <div className="wrap">
        <motion.div
          className="nriband"
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: '0px 0px -8% 0px' }}
        >
          <div>
            <span className="eyebrow">For NRI owners</span>
            <h2 style={{ marginTop: 14 }}>Far away, but never out of the loop</h2>
            <p>Distance shouldn't mean uncertainty. We're your dependable local partner for checks, inventory, bill payments, tenants and complete remote management.</p>
            <a className="btn btn-terra" href="#contact" style={{ marginTop: 24 }}>Manage my property</a>
          </div>
          <div className="nri-cards">
            {nriRows.map((r) => {
              const Icon = Icons[r.icon]
              return (
                <div className="nrow" key={r.h}>
                  <span className="ic"><Icon stroke="currentColor" /></span>
                  <div>
                    <h4>{r.h}</h4>
                    <p>{r.p}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
