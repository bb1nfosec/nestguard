import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Whatsapp, ArrowUp } from '../icons.jsx'
import { PHONE_INTL } from '../data.js'

export default function FloatingActions() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fab">
      <motion.a
        className="wa" href={`https://wa.me/${PHONE_INTL}`} target="_blank" rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        whileHover={{ y: -3, scale: 1.06 }} whileTap={{ scale: 0.95 }}
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ scale: { duration: 2.4, repeat: Infinity, ease: 'easeInOut' } }}
      >
        <Whatsapp size={28} />
      </motion.a>
      <AnimatePresence>
        {show && (
          <motion.button
            className="top" aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.6 }}
            whileHover={{ y: -3, scale: 1.06 }} whileTap={{ scale: 0.95 }}
          >
            <ArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
