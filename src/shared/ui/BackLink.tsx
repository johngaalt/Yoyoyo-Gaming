import { Link } from 'react-router-dom'
import { uiText, type LanguageCode } from '../../entities/language'

interface BackLinkProps {
  to: string
  language: LanguageCode
}

export function BackLink({ to, language }: BackLinkProps) {
  return (
    <Link
      to={to}
      className="inline-flex min-h-12 items-center rounded-full bg-white px-5 text-lg font-extrabold text-slate-800 shadow-sm ring-2 ring-slate-100"
    >
      ← {uiText.back[language]}
    </Link>
  )
}
