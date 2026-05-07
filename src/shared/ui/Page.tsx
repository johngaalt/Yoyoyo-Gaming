import type { ReactNode } from 'react'
import clsx from 'clsx'

interface PageProps {
  children: ReactNode
  className?: string
}

export function Page({ children, className }: PageProps) {
  return (
    <main
      className={clsx(
        'mx-auto flex min-h-svh w-full max-w-md flex-col px-5 py-5 lg:max-w-6xl lg:px-10 lg:py-8',
        className,
      )}
    >
      {children}
    </main>
  )
}
