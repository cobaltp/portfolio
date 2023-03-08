export default function Landing({ id, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <article id={id} className="relative min-h-[calc(100vh-72px)] items-center md:flex" {...props}>
      <header className="z-10 md:mx-6 md:w-2/5">
        <h2 className="mb-4 text-3xl md:text-4xl">Landing</h2>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
      </header>
      <figure className="pointer-events-none absolute right-0 bottom-0 max-w-5xl md:bottom-auto">
        <img src="public/images/9859.png" alt="factory" />
      </figure>
    </article>
  )
}
