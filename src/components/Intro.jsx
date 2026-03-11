import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.25,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function Intro() {
  return (
    <motion.section
      className="container"
      tabIndex={0}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div className="intro" variants={containerVariants}>
        <motion.h3 variants={itemVariants}>HELLLOOOOO</motion.h3>
        <motion.div className="intro-grid" variants={itemVariants}>
          <motion.div className="intro-text" variants={itemVariants}>
            <p>
              My name is Loren Lloyd, and I'm a front-end developer, who creates
              websites with a special focus on animations and user interaction.
              I'm ready to bring your ideas to life and add a touch of
              originality to the online space.
            </p>
          </motion.div>
          <motion.div
            className="more-text"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <p>Lets start a new project!</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
