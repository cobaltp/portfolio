import { AnimatePresence, delay, motion, SVGMotionProps } from 'framer-motion'

interface DarkModeIconProps {
  active: boolean
}

const mainVariants = {
  active: {
    cx: 160,
    cy: 160,
    r: 128,
  },
  inactive: {
    cx: 160,
    cy: 160,
    r: 72,
  },
}

export default function DarkModeIcon({ active, ...props }: DarkModeIconProps & SVGMotionProps<SVGElement>) {
  return (
    <motion.svg
      className="fill-orange-400 dark:fill-yellow-300"
      animate={active ? 'active' : 'inactive'}
      viewBox="0 0 320 320"
      {...props}
    >
      {active ? (
        <mask id="dark-mode-icon-clip">
          <rect width="100%" height="100%" fill="white" />
          <circle cx={192} cy={128} r={112} fill="black" />
        </mask>
      ) : (
        <g>
          <path d="M163.671 22.477C162.279 19.2629 157.721 19.2629 156.329 22.477L136.44 68.4106C135.296 71.0517 137.232 74 140.11 74H141.258C147.298 72.69 153.568 72 160 72C166.432 72 172.702 72.69 178.742 74H179.89C182.768 74 184.704 71.0517 183.56 68.4106L163.671 22.477Z" />
          <path d="M259.839 65.3521C261.128 62.0953 257.905 58.8724 254.648 60.161L208.104 78.5767C205.428 79.6356 204.712 83.0894 206.747 85.1246L207.585 85.9625C218.179 92.7857 227.214 101.821 234.037 112.415L234.875 113.253C236.911 115.288 240.364 114.572 241.423 111.896L259.839 65.3521Z" />
          <path d="M246 178.742C247.31 172.702 248 166.432 248 160C248 153.568 247.31 147.298 246 141.258V140.11C246 137.232 248.948 135.296 251.589 136.44L297.523 156.329C300.737 157.721 300.737 162.279 297.523 163.671L251.589 183.56C248.948 184.704 246 182.768 246 179.89V178.742Z" />
          <path d="M207.585 234.038L206.747 234.875C204.712 236.911 205.428 240.364 208.104 241.423L254.648 259.839C257.905 261.128 261.128 257.905 259.839 254.648L241.423 208.104C240.364 205.428 236.911 204.712 234.875 206.747L234.038 207.585C227.214 218.179 218.179 227.214 207.585 234.038Z" />
          <path d="M141.258 246H140.11C137.232 246 135.296 248.948 136.44 251.589L156.329 297.523C157.721 300.737 162.279 300.737 163.671 297.523L183.56 251.589C184.704 248.948 182.768 246 179.89 246L178.742 246C172.702 247.31 166.432 248 160 248C153.568 248 147.298 247.31 141.258 246Z" />
          <path d="M112.415 234.038C101.821 227.214 92.7855 218.179 85.9622 207.585L85.1246 206.747C83.0895 204.712 79.6356 205.428 78.5767 208.104L60.161 254.648C58.8724 257.905 62.0953 261.128 65.3521 259.839L111.896 241.423C114.573 240.364 115.288 236.911 113.253 234.875L112.415 234.038Z" />
          <path d="M74 141.258V140.11C74 137.232 71.0517 135.296 68.4106 136.44L22.477 156.329C19.2629 157.721 19.2629 162.279 22.477 163.671L68.4106 183.56C71.0517 184.704 74 182.768 74 179.89V178.742C72.69 172.702 72 166.432 72 160C72 153.568 72.69 147.298 74 141.258Z" />
          <path d="M65.3521 60.1611C62.0953 58.8725 58.8724 62.0953 60.161 65.3521L78.5767 111.896C79.6356 114.573 83.0895 115.288 85.1246 113.253L85.9622 112.415C92.7855 101.821 101.821 92.7855 112.415 85.9622L113.253 85.1246C115.288 83.0895 114.572 79.6356 111.896 78.5768L65.3521 60.1611Z" />
        </g>
      )}
      <motion.circle variants={mainVariants} mask="url(#dark-mode-icon-clip)" />
    </motion.svg>
  )
}
