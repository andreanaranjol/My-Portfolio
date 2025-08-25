'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

type Props = {
  children: React.ReactNode
  className?: string
  id?: string
  delay?: number
}

export default function SectionWrapper({ children, className = '', id, delay = 0 }: Props) {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 })

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.section>
  )
}
