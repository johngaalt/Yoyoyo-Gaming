import type { LearningCard } from '../../../entities/card'
import type { LanguageCode } from '../../../entities/language'

export const buildFindWordQuestion = (
  card: LearningCard,
  language: LanguageCode,
) => {
  const word = card.questionTitle?.[language] ?? card.title[language]

  if (language === 'ru') {
    return `Выбери ${word}`
  }

  if (language === 'es') {
    return `Elige ${word}`
  }

  return `Choose ${word}`
}
