import classNames from 'classnames'
import { LayoutGroup, motion } from 'framer-motion'
import { useAtom, useAtomValue } from 'jotai'
import DarkModeIcon from '../atoms/DarkModeIcon'
import { currentArticleAtom, darkModeAtom, isTopOfPageAtom } from '../../store'
import Container from '../atoms/Container'
import ScrollLink from '../atoms/ScrollLink'

interface NavbarProps {
  title: string
  articles: { id: string; title: string }[]
}

export default function Navbar({ title, articles }: NavbarProps) {
  const currentArticle = useAtomValue(currentArticleAtom)
  const isTopOfPage = useAtomValue(isTopOfPageAtom)
  const [isDarkMode, toggleDarkMode] = useAtom(darkModeAtom)

  return (
    <header
      className={classNames(
        'sticky top-0 z-50 backdrop-blur transition-[background]',
        isTopOfPage ? 'bg-transparent' : 'bg-blue-300/50',
      )}
    >
      <Container as="section" className="flex items-center">
        <h1 className="py-4 text-4xl">{title}</h1>
        <nav className="ml-auto hidden md:block">
          <ul className="flex justify-evenly gap-8">
            <LayoutGroup>
              {articles.map((article, index) => (
                <li key={index} className="relative">
                  <ScrollLink href={'#' + article.id}>{article.title}</ScrollLink>
                  {article.id === currentArticle && (
                    <motion.div
                      layoutId="underline"
                      className="absolute top-full left-0 right-0 h-0.5 w-full rounded-2xl bg-black dark:bg-white"
                    />
                  )}
                </li>
              ))}
            </LayoutGroup>
          </ul>
        </nav>
        <button className="ml-auto md:ml-8" onClick={() => toggleDarkMode()}>
          <DarkModeIcon width={32} height={32} active={isDarkMode} />
        </button>
      </Container>
    </header>
  )
}
