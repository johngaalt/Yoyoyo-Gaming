import type { LearningCard } from '../../../entities/card'
import type { LanguageCode } from '../../../entities/language'
import { speakWord } from '../../../shared/lib/speech'

export const playCardSound = (card: LearningCard, language: LanguageCode) =>
  speakWord(card.title[language], language)
