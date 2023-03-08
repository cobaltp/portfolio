interface ScrollLinkProps {
  callback?: () => void
}

export default function ScrollLink({
  callback,
  ...props
}: ScrollLinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  function scrollTo(top: number, callback?: () => void, margin = 0) {
    const onScroll = function () {
      if (!callback) return
      if (top - margin <= scrollY && top + margin >= scrollY) {
        window.removeEventListener('scroll', onScroll)
        callback()
      }
    }

    window.addEventListener('scroll', onScroll)
    onScroll()
    window.scrollTo({ top: top, behavior: 'smooth' })
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    e.stopPropagation()
    if (!props.href) return

    const rect = document.querySelector(props.href)?.getBoundingClientRect()
    const top = rect ? rect.top + scrollY - 72 : 0

    scrollTo(top, callback)
  }

  return <a {...props} onClick={handleClick} />
}
