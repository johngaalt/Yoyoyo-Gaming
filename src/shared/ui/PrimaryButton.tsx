import type { ButtonHTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  tone?: 'sun' | 'sky' | 'leaf' | 'rose'
}

const toneClassNames: Record<NonNullable<PrimaryButtonProps['tone']>, string> = {
  sun: 'bg-amber-300 text-amber-950 shadow-amber-200/80',
  sky: 'bg-sky-300 text-sky-950 shadow-sky-200/80',
  leaf: 'bg-emerald-300 text-emerald-950 shadow-emerald-200/80',
  rose: 'bg-rose-300 text-rose-950 shadow-rose-200/80',
}

export function PrimaryButton({
  children,
  className,
  tone = 'sun',
  type = 'button',
  ...props
}: PrimaryButtonProps) {
  return (
    <button
      type={type}
      className={clsx(
        'min-h-16 rounded-[1.75rem] px-6 text-xl font-black shadow-lg transition active:scale-95 disabled:opacity-60',
        'focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-slate-900',
        toneClassNames[tone],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
