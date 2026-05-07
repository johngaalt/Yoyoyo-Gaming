import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { languages, uiText, type LanguageCode } from '../entities/language'
import { Page } from '../shared/ui/Page'
import { useAppStore } from '../store/appStore'

const languageTones: Record<LanguageCode, string> = {
  ru: 'bg-rose-300 text-rose-950 shadow-rose-200/80',
  es: 'bg-amber-300 text-amber-950 shadow-amber-200/80',
  en: 'bg-sky-300 text-sky-950 shadow-sky-200/80',
}

export function LanguagePage() {
  const navigate = useNavigate()
  const currentLanguage = useAppStore((state) => state.language) ?? 'ru'
  const setLanguage = useAppStore((state) => state.setLanguage)

  const handleSelectLanguage = (language: LanguageCode) => {
    setLanguage(language)
    navigate('/categories')
  }

  return (
    <Page className="justify-center gap-8 bg-[#fff7d8] lg:grid lg:max-w-5xl lg:grid-cols-[1fr_420px] lg:items-center lg:gap-14">
      <section className="text-center lg:text-left">
        <motion.div
          initial={{ scale: 0.9, rotate: -4 }}
          animate={{ scale: 1, rotate: 0 }}
          className="mx-auto mb-5 grid h-28 w-28 place-items-center rounded-[2rem] bg-white text-6xl shadow-xl lg:mx-0 lg:mb-7 lg:h-36 lg:w-36 lg:rounded-[2.5rem] lg:text-7xl"
        >
          ✨
        </motion.div>
        <p className="text-xl font-black text-slate-500 lg:text-2xl">
          {uiText.appName[currentLanguage]}
        </p>
        <h1 className="mt-2 text-5xl font-black leading-none text-slate-950 lg:text-7xl">
          {uiText.chooseLanguage[currentLanguage]}
        </h1>
      </section>

      <section className="grid gap-4 lg:gap-5">
        {languages.map((language) => (
          <motion.button
            key={language.code}
            type="button"
            whileTap={{ scale: 0.96 }}
            onClick={() => handleSelectLanguage(language.code)}
            className={`${languageTones[language.code]} min-h-20 rounded-[2rem] px-6 text-3xl font-black shadow-lg transition lg:min-h-24 lg:text-4xl`}
          >
            <span className="mr-3 text-xl">{language.shortName}</span>
            {language.nativeName}
          </motion.button>
        ))}
      </section>
    </Page>
  )
}
