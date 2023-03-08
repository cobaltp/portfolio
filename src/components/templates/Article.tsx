interface ArticleProps {
  title: string
  subtitle?: string
}

export default function Article({
  id,
  title,
  children,
  subtitle,
  ...props
}: ArticleProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <article id={id} className="relative min-h-[calc(100vh-72px)] border-t-2 border-gray-400 py-4 md:flex" {...props}>
      <header className="">
        <h2 className="mb-4 text-3xl md:text-4xl">{title}</h2>
        <p className="text-sm">
          {subtitle ??
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.`}
        </p>
      </header>
      <section>{children}</section>
    </article>
  )
}
