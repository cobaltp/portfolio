import { atom } from 'jotai'

export const darkModeAtom = atom(false, (get, set, nextValue?: boolean) => {
  const update = nextValue ?? !get(darkModeAtom)
  document.documentElement.classList.toggle('dark', update)
  set(darkModeAtom, update)
})

export const isTopOfPageAtom = atom(true)
export const currentArticleAtom = atom('home')
