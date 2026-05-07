import { Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { categories } from '../entities/category'
import { uiText } from '../entities/language'
import { Page } from '../shared/ui/Page'
import { useAppStore } from '../store/appStore'

export function CategoriesPage() {
  const language = useAppStore((state) => state.language)

  if (!language) {
    return <Navigate to="/" replace />
  }

  return (
    <Page className="gap-8 bg-[#ecfbff] lg:gap-10">
      <header className="flex items-center justify-between gap-4">
        <div>
          <p className="text-lg font-black text-slate-500 lg:text-2xl">
            {uiText.appName[language]}
          </p>
          <h1 className="text-5xl font-black leading-none text-slate-950 lg:text-7xl">
            {uiText.chooseCategory[language]}
          </h1>
        </div>
        <Link
          to="/"
          className="grid h-14 w-14 place-items-center rounded-full bg-white text-lg font-black text-slate-800 shadow-sm lg:h-16 lg:w-16 lg:text-xl"
        >
          {language.toUpperCase()}
        </Link>
      </header>

      <section className="grid flex-1 content-center gap-5 lg:grid-cols-3 lg:gap-6">
        {categories.map((category) => (
          <motion.div key={category.id} whileTap={{ scale: 0.97 }}>
            <Link
              to={`/play/find/${category.id}`}
              className={`${category.colorClassName} flex min-h-36 items-center gap-5 rounded-[2rem] p-6 text-left text-4xl font-black shadow-xl ring-4 lg:min-h-80 lg:flex-col lg:items-start lg:justify-between lg:p-7 lg:text-5xl`}
            >
              <span className="grid h-20 w-20 shrink-0 place-items-center rounded-[1.5rem] bg-white text-5xl shadow-sm lg:h-28 lg:w-28 lg:rounded-[2rem] lg:text-7xl">
                {category.emoji}
              </span>
              <span className="break-words leading-tight">
                {category.title[language]}
              </span>
            </Link>
          </motion.div>
        ))}
      </section>
    </Page>
  )
}
