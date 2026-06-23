import { motion } from 'framer-motion'

// Scroll-triggered reveal. Mirrors the original `.reveal` behaviour but with
// Framer Motion springs and viewport-once triggering.
export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] },
  },
}

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

export default function Reveal({ children, className, as = 'div', delay = 0, ...rest }) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      className={className}
      variants={{
        hidden: { opacity: 0, y: 28 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1], delay },
        },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
