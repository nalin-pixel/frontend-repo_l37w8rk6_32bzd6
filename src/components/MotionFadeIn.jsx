import { motion } from 'framer-motion'

export function MotionFadeIn({ as: Tag = 'div', delay = 0, children, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
      className={className}
      as={Tag}
    >
      {children}
    </motion.div>
  )
}

export const containerStagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

export const itemFade = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
}
