import classNames from 'classnames'

interface ContainerProps<T extends React.ElementType> {
  as?: T
  children?: React.ReactNode
  className?: string
}

export default function Container<T extends React.ElementType>({
  as,
  children,
  className,
  ...props
}: ContainerProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof ContainerProps<T>>) {
  const Component = as || 'div'

  return (
    <Component {...props} className={classNames(className, 'mx-auto max-w-8xl px-8')}>
      {children}
    </Component>
  )
}
