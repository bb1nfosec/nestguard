import { motion } from 'framer-motion'

const items = ['Rent collection', 'Tenant screening', 'Honest repairs', 'NRI remote care', 'Legal & documents', 'Plot monitoring']

export default function Strip() {
  return (
    <div className="strip" aria-hidden="true">
      <motion.div
        className="track"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
      >
        {[...items, ...items].map((t, i) => (
          <span key={i}><i>✦</i> {t}</span>
        ))}
      </motion.div>
    </div>
  )
}
