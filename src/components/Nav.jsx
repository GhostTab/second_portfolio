import { motion } from 'framer-motion'

const menuIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
)

export default function Nav() {
  return (
    <motion.nav
      className="nav"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="logo">
        <p>LOREN LLOYD</p>
      </div>
      <div className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li>
            <motion.span
              className="navbar-icon-wrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {menuIcon}
            </motion.span>
          </li>
        </ul>
      </div>
    </motion.nav>
  )
}
