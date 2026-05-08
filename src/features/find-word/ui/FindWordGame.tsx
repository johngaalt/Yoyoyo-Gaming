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
  praiseText: string | null
  onChoose: (card: LearningCard) => void
  onNext: () => void
}

export function FindWordGame({
  language,
  target,
  question,
  choices,
  selectedCardId,
  isCorrect,
  isWrong,
  praiseText,
  onChoose,
  onNext,
}: FindWordGameProps) {
  return (
    <section className="flex min-h-0 flex-1 flex-col gap-2 lg:grid lg:grid-cols-[minmax(280px,360px)_1fr] lg:items-stretch lg:gap-6">
      <div className="flex shrink-0 flex-col justify-center rounded-[1.25rem] bg-white px-3 py-3 text-center shadow-lg ring-4 ring-white/70 lg:min-h-0 lg:rounded-[2rem] lg:px-7 lg:py-6">
        <p className="text-sm font-black text-slate-500 lg:text-xl">
          {uiText.appName[language]}
        </p>
        <h1 className="mt-1 break-words text-[clamp(1.45rem,7.5vw,2.25rem)] font-black leading-[1.05] text-slate-950 lg:mt-2 lg:text-[clamp(2.75rem,4.2vw,4.25rem)] lg:leading-tight">
          {question}
        </h1>
      </div>

      <div className="grid h-[clamp(7.5rem,28dvh,11rem)] min-h-0 shrink-0 grid-cols-3 gap-1.5 lg:h-auto lg:flex-1 lg:gap-6">
        {choices.map((card) => {
          const selected = selectedCardId === card.id
          const correctSelected = selected && card.id === target.id
          const wrongSelected = selected && card.id !== target.id
          const handleClick = () => {
            if (correctSelected) {
              onNext()
              return
            }

            onChoose(card)
          }

          return (
            <motion.button
              key={card.id}
              type="button"
              whileTap={{ scale: 0.96 }}
              onClick={handleClick}
              className={clsx(
                'flex min-h-0 items-center justify-center rounded-[1.25rem] bg-white p-2 shadow-lg ring-4 transition lg:rounded-[2rem] lg:p-6',
                correctSelected && 'ring-emerald-300',
                wrongSelected && 'ring-rose-300',
                !selected && 'ring-white/70',
              )}
            >
              <img
                src={card.imageSrc}
                alt={card.title[language]}
                className="h-[min(22vw,7.5rem)] w-[min(22vw,7.5rem)] object-contain lg:h-[min(24vw,14rem)] lg:w-[min(24vw,14rem)]"
                draggable={false}
              />
            </motion.button>
          )
        })}
      </div>

      <AnimatePresence>
        {isCorrect && praiseText && (
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 18, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.96 }}
            whileTap={{ scale: 0.96 }}
            onClick={onNext}
            className="fixed inset-x-5 bottom-7 mx-auto max-w-sm rounded-[2rem] bg-emerald-300 px-6 py-5 text-center text-4xl font-black text-emerald-950 shadow-2xl"
          >
            {praiseText}
          </motion.button>
        )}

        {isWrong && (
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.96 }}
            className="fixed inset-x-5 bottom-7 mx-auto max-w-sm rounded-[2rem] bg-rose-300 px-6 py-5 text-center text-4xl font-black text-rose-950 shadow-2xl"
          >
            {uiText.tryAgain[language]}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
