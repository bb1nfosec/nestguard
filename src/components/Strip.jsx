import { useRef } from 'react'
import {
  motion, useScroll, useVelocity, useSpring, useTransform,
  useMotionValue, useAnimationFrame, wrap,
} from 'framer-motion'

const items = ['Rent collection', 'Tenant screening', 'Honest repairs', 'NRI remote care', 'Legal & documents', 'Plot monitoring']

export default function Strip() {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVel = useVelocity(scrollY)
  const smoothVel = useSpring(scrollVel, { damping: 50, stiffness: 400 })
  const velFactor = useTransform(smoothVel, [0, 1000], [0, 4], { clamp: false })
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`)
  const dir = useRef(1)

  useAnimationFrame((t, delta) => {
    let moveBy = dir.current * -3 * (delta / 1000) // base ~3%/s
    if (velFactor.get() < 0) dir.current = -1
    else if (velFactor.get() > 0) dir.current = 1
    moveBy += dir.current * moveBy * velFactor.get()
    baseX.set(baseX.get() + moveBy)
  })

  return (
    <div className="strip" aria-hidden="true">
      <motion.div className="track" style={{ x }}>
        {[...items, ...items, ...items, ...items].map((t, i) => (
          <span key={i}><i>✦</i> {t}</span>
        ))}
      </motion.div>
    </div>
  )
}
