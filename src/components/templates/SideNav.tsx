import classNames from 'classnames'
import { AnimatePresence, LayoutGroup, motion, useCycle } from 'framer-motion'
import { useAtomValue } from 'jotai'
import { currentArticleAtom } from '../../store'
import ScrollLink from '../atoms/ScrollLink'

interface SideNavProps {
  articles: { id: string; title: string }[]
}

export default function SideNav({ articles }: SideNavProps) {
  const currentArticle = useAtomValue(currentArticleAtom)
  const [isMenuOpen, toggleMenu] = useCycle(false, true)

  const callbackScrollLink = (timeoutMs = 500) => {
    setTimeout(() => toggleMenu(0), timeoutMs)
  }

  return (
    <aside
      className={classNames(
        'fixed top-0 z-50 flex h-screen w-full items-center p-2 md:hidden',
        isMenuOpen ? 'backdrop-blur' : 'pointer-events-none',
      )}
      onClick={(e) => {
        e.stopPropagation()
        toggleMenu(0)
      }}
    >
      <nav
        className="pointer-events-auto ml-auto flex"
        onClick={(e) => {
          e.stopPropagation()
          toggleMenu()
        }}
      >
        {!isMenuOpen && (
          <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            <svg
              className="stroke-black stroke-2 dark:stroke-yellow-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              fill="transparent"
            >
              <path d="M12 2 L4 12 L12 22" />
            </svg>
          </motion.button>
        )}
        <ul className="flex flex-col gap-2">
          {articles &&
            articles.map((article, index) => {
              return (
                <motion.li key={index} className="flex justify-end gap-4">
                  <AnimatePresence>
                    {isMenuOpen && (
                      <motion.div
                        initial={{ translateX: '150%', opacity: 0 }}
                        animate={{ translateX: 0, opacity: 1 }}
                        exit={{ translateX: '150%', opacity: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                      >
                        <ScrollLink href={'#' + article.id} callback={callbackScrollLink}>
                          {article.title}
                        </ScrollLink>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <LayoutGroup>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={24}
                      height={24}
                      className="fill-black dark:fill-yellow-300"
                    >
                      <circle cx={12} cy={12} r={5} />
                    </svg>
                    {article.id == currentArticle && (
                      <motion.div
                        layoutId="circle"
                        className="absolute m-0.5 h-5 w-5 rounded-full border-2 border-black dark:border-yellow-300"
                      />
                    )}
                  </LayoutGroup>
                </motion.li>
              )
            })}
        </ul>
      </nav>
    </aside>
  )
}
