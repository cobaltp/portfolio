import { useMotionValueEvent, useScroll, useSpring, useVelocity } from 'framer-motion'
import { useAtom } from 'jotai'
import { useEffect, useState } from 'react'
import Landing from './Articles/Landing'
import Container from './components/atoms/Container'
import Article from './components/templates/Article'
import Navbar from './components/templates/Navbar'
import SideNav from './components/templates/SideNav'
import { currentArticleAtom, isTopOfPageAtom } from './store'

export default function App() {
  const title = 'Cool Title'
  const [articles, setArticles] = useState<{ id: string; title: string }[]>([])

  const [isTopOfPage, setIsTopOfPage] = useAtom(isTopOfPageAtom)
  const [currentArticle, setCurrentArticle] = useAtom(currentArticleAtom)

  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, { duration: 0.3 })

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsTopOfPage(latest === 0)
  })

  useMotionValueEvent(smoothVelocity, 'change', (latest) => {
    const absoluteVelocity = Math.abs(latest)
    const screenCenter = (innerHeight + 72) / 2
    const articles = document.querySelectorAll('article')

    if (absoluteVelocity < 1500) {
      articles.forEach((article) => {
        const top = article.getBoundingClientRect().top
        if (top < screenCenter) {
          setCurrentArticle(article.id)
        }
      })
    }
  })

  useEffect(() => {
    const query = document.querySelectorAll('main > article')
    if (!query) return
    let _articles: { id: string; title: string }[] = []
    query.forEach((article) => {
      const id = article.id
      const title = article.querySelector('header > h2')?.textContent
      if (title) {
        _articles.push({ id, title })
      }
    })

    setArticles(_articles)
  }, [])

  return (
    <>
      <Navbar title={title} articles={articles} />
      <Container as="main" className="flex flex-col">
        <Landing id="home" />
        <Article id="skill" title="Skill" />
        <Article id="projects" title="Projects" />
        <Article id="contact" title="Contact" />
      </Container>
      <SideNav articles={articles} />
    </>
  )
}
