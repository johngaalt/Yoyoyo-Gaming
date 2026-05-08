import { useEffect, useMemo, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { categories, type CategoryId } from '../entities/category'
import { getCardsByCategory, type LearningCard } from '../entities/card'
import { uiText } from '../entities/language'
import { createFindWordRound } from '../features/find-word/lib/createFindWordRound'
import { buildFindWordQuestion } from '../features/find-word/lib/buildFindWordQuestion'
import { getNextPraise } from '../features/find-word/lib/getNextPraise'
import { FindWordGame } from '../features/find-word/ui/FindWordGame'
import { speakText } from '../shared/lib/speech'
import { BackLink } from '../shared/ui/BackLink'
import { Page } from '../shared/ui/Page'
import { PrimaryButton } from '../shared/ui/PrimaryButton'
import { useAppStore } from '../store/appStore'

const isCategoryId = (value: string | undefined): value is CategoryId =>
  categories.some((category) => category.id === value)

export function FindWordPage() {
  const { categoryId } = useParams()
  const language = useAppStore((state) => state.language)
  const markCorrect = useAppStore((state) => state.markCorrect)
  const markHeard = useAppStore((state) => state.markHeard)
  const [roundNumber, setRoundNumber] = useState(0)
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null)
  const [praiseText, setPraiseText] = useState<string | null>(null)
  const [remainingPraiseIndexes, setRemainingPraiseIndexes] = useState<
    number[]
  >([])
  const resolvedCategoryId = isCategoryId(categoryId) ? categoryId : null
  const categoryCards = useMemo(
    () => (resolvedCategoryId ? getCardsByCategory(resolvedCategoryId) : []),
    [resolvedCategoryId],
  )
  const round = useMemo(
    () =>
      categoryCards.length > 0
        ? createFindWordRound(categoryCards, 3, roundNumber)
        : null,
    [categoryCards, roundNumber],
  )
  const question = useMemo(
    () => (language && round ? buildFindWordQuestion(round.target, language) : ''),
    [language, round],
  )

  useEffect(() => {
    if (!language || !question) {
      return
    }

    speakText(question, language)
  }, [language, question])

  if (!language) {
    return <Navigate to="/" replace />
  }

  if (!resolvedCategoryId || !round) {
    return <Navigate to="/categories" replace />
  }

  const isCorrect = selectedCardId === round.target.id
  const isWrong = selectedCardId !== null && !isCorrect

  const handleChoose = (card: LearningCard) => {
    setSelectedCardId(card.id)

    if (card.id === round.target.id) {
      const nextPraise = getNextPraise(language, remainingPraiseIndexes)

      markCorrect(card.id)
      setPraiseText(nextPraise.text)
      setRemainingPraiseIndexes(nextPraise.remainingIndexes)
      speakText(nextPraise.text, language)
      markHeard(card.id)
      return
    }

    speakText(uiText.tryAgain[language], language)
  }

  const handleNextRound = () => {
    setSelectedCardId(null)
    setPraiseText(null)
    setRoundNumber((value) => value + 1)
  }

  const handleTryAgain = () => {
    setSelectedCardId(null)
    setPraiseText(null)
  }

  return (
    <Page className="fixed inset-0 h-[100dvh] min-h-0 max-w-none gap-2 overflow-hidden bg-[#f1ffe9] px-3 py-3 lg:mx-auto lg:h-[100dvh] lg:max-w-6xl lg:gap-5 lg:px-10 lg:py-6">
      <header className="flex shrink-0 items-center justify-between gap-3">
        <BackLink to="/categories" language={language} />
        {isCorrect && (
          <PrimaryButton
            tone="sky"
            className="min-h-12 px-5 text-lg"
            onClick={handleNextRound}
          >
            {uiText.next[language]}
          </PrimaryButton>
        )}
        {isWrong && (
          <PrimaryButton
            tone="rose"
            className="min-h-12 px-5 text-lg"
            onClick={handleTryAgain}
          >
            {uiText.tryAgain[language]}
          </PrimaryButton>
        )}
      </header>

      <FindWordGame
        language={language}
        target={round.target}
        question={question}
        choices={round.choices}
        selectedCardId={selectedCardId}
        isCorrect={isCorrect}
        isWrong={isWrong}
        praiseText={praiseText}
        onChoose={handleChoose}
        onNext={handleNextRound}
      />
    </Page>
  )
}
