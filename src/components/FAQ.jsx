import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { faqs } from '../data.js'
import { fadeUp, stagger } from './Reveal.jsx'

function Item({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div className={`fitem${open ? ' open' : ''}`} variants={fadeUp}>
      <button className="fq" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        {q}
        <motion.span className="pm" animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.25 }}>+</motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="fa-body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
          >
            <p>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  return (
    <section className="pad" id="faq">
      <div className="wrap">
        <motion.div
          className="sec-head"
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: '0px 0px -8% 0px' }}
        >
          <span className="eyebrow">Good to know</span>
          <h2>Frequently asked questions</h2>
        </motion.div>

        <motion.div
          className="faq"
          variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '0px 0px -6% 0px' }}
        >
          {faqs.map((f) => (
            <Item key={f.q} q={f.q} a={f.a} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
