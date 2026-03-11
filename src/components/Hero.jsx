import { motion, useReducedMotion } from 'framer-motion'

const floatTransition = {
  duration: 4,
  repeat: Infinity,
  repeatType: 'reverse',
  ease: 'easeInOut',
}

export default function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="hero" id="home">
      <motion.p
        className="hero-line"
        initial={{ opacity: 0, x: reduceMotion ? 0 : -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: reduceMotion ? 0.3 : 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      >
        FULL STACK DEVELOPER
      </motion.p>
      <motion.p
        className="hero-line"
        initial={{ opacity: 0, x: reduceMotion ? 0 : -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: reduceMotion ? 0.3 : 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
      >
        & WEB DESIGNER
      </motion.p>
      <motion.div
        className="circle"
        initial={{ scale: reduceMotion ? 1 : 0, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
          y: reduceMotion ? 0 : [0, -14, 0],
        }}
        transition={{
          scale: { duration: reduceMotion ? 0.3 : 1, ease: [0.22, 1, 0.36, 1], delay: 0.6 },
          opacity: { duration: reduceMotion ? 0.3 : 1, delay: 0.6 },
          y: reduceMotion ? {} : { ...floatTransition, delay: 1.6 },
        }}
      />
      <motion.div
        className="circle2"
        initial={{ scale: reduceMotion ? 1 : 0, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
          y: reduceMotion ? 0 : [0, 12, 0],
        }}
        transition={{
          scale: { duration: reduceMotion ? 0.3 : 1, ease: [0.22, 1, 0.36, 1], delay: 0.8 },
          opacity: { duration: reduceMotion ? 0.3 : 1, delay: 0.8 },
          y: reduceMotion ? {} : { ...floatTransition, duration: 3.5, delay: 1.8 },
        }}
      />
    </section>
  )
}
