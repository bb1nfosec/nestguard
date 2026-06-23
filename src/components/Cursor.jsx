import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'

// Custom follow-cursor (desktop fine-pointer only). A spring-lagged ring that
// enlarges over interactive elements. Native cursor stays visible for a11y.
export default function Cursor() {
  const reduce = useReducedMotion()
  const [enabled, setEnabled] = useState(false)
  const [hover, setHover] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 450, damping: 32, mass: 0.5 })
  const sy = useSpring(y, { stiffness: 450, damping: 32, mass: 0.5 })

  useEffect(() => {
    if (reduce || !window.matchMedia('(pointer:fine)').matches) return
    setEnabled(true)
    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
      const t = e.target.closest('a, button, input, textarea, select, .card, .fitem, .quote')
      setHover(!!t)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [reduce, x, y])

  if (!enabled) return null
  return <motion.div className={`cursor${hover ? ' hover' : ''}`} style={{ x: sx, y: sy }} aria-hidden="true" />
}
