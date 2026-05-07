import { AnimatePresence, motion } from 'framer-motion'
import clsx from 'clsx'
import type { LearningCard } from '../../../entities/card'
import { uiText, type LanguageCode } from '../../../entities/language'

interface FindWordGameProps {
  language: LanguageCode
  target: LearningCard
  question: string
  choices: LearningCard[]
  selectedCardId: string | null
  isCorrect: boolean
  isWrong: boolean
  onChoose: (card: LearningCard) => void
}

export function FindWordGame({
  language,
  target,
  question,
  choices,
  selectedCardId,
  isCorrect,
  isWrong,
  onChoose,
}: FindWordGameProps) {
  return (
    <section className="flex flex-1 flex-col gap-5 lg:grid lg:grid-cols-[360px_1fr] lg:items-center lg:gap-8">
      <div className="rounded-[2rem] bg-white px-5 py-6 text-center shadow-lg ring-4 ring-white/70 lg:flex lg:min-h-96 lg:flex-col lg:justify-center lg:px-8 lg:py-8">
        <p className="text-lg font-black text-slate-500 lg:text-2xl">
          {uiText.appName[language]}
        </p>
        <h1 className="mt-2 break-words text-5xl font-black leading-tight text-slate-950 lg:text-6xl">
          {question}
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
        {choices.map((card) => {
          const selected = selectedCardId === card.id
          const correctSelected = selected && card.id === target.id
          const wrongSelected = selected && card.id !== target.id

          return (
            <motion.button
              key={card.id}
              type="button"
              whileTap={{ scale: 0.96 }}
              onClick={() => onChoose(card)}
              className={clsx(
                'flex min-h-36 items-center justify-center rounded-[2rem] bg-white p-5 shadow-lg ring-4 transition lg:min-h-96 lg:p-7',
                correctSelected && 'ring-emerald-300',
                wrongSelected && 'ring-rose-300',
                !selected && 'ring-white/70',
              )}
            >
              <img
                src={card.imageSrc}
                alt={card.title[language]}
                className="h-28 w-28 object-contain lg:h-48 lg:w-48"
                draggable={false}
              />
            </motion.button>
          )
        })}
      </div>

      <AnimatePresence>
        {(isCorrect || isWrong) && (
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.96 }}
            className={clsx(
              'fixed inset-x-5 bottom-7 mx-auto max-w-sm rounded-[2rem] px-6 py-5 text-center text-4xl font-black shadow-2xl',
              isCorrect && 'bg-emerald-300 text-emerald-950',
              isWrong && 'bg-rose-300 text-rose-950',
            )}
          >
            {isCorrect ? uiText.correct[language] : uiText.tryAgain[language]}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
