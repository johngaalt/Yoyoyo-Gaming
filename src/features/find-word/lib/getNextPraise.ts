import type { LanguageCode, LocalizedText } from '../../../entities/language'

export const praisePhrases: LocalizedText[] = [
  {
    ru: 'Молодец, Марк!',
    es: '¡Muy bien, Mark!',
    en: 'Great job, Mark!',
  },
  {
    ru: 'Умничка!',
    es: '¡Qué listo!',
    en: 'Smart choice!',
  },
  {
    ru: 'Ты лучший!',
    es: '¡Eres el mejor!',
    en: 'You are the best!',
  },
  {
    ru: 'Отличный выбор!',
    es: '¡Excelente elección!',
    en: 'Excellent choice!',
  },
  {
    ru: 'Правильный выбор!',
    es: '¡Buena elección!',
    en: 'Right choice!',
  },
  {
    ru: 'Правильно!',
    es: '¡Correcto!',
    en: 'Correct!',
  },
  {
    ru: 'Вау!',
    es: '¡Guau!',
    en: 'Wow!',
  },
]

const getRandomIndex = (max: number) => Math.floor(Math.random() * max)

export const getNextPraise = (
  language: LanguageCode,
  remainingIndexes: number[],
): { text: string; remainingIndexes: number[] } => {
  const availableIndexes =
    remainingIndexes.length > 0
      ? remainingIndexes
      : praisePhrases.map((_, index) => index)
  const selectedPosition = getRandomIndex(availableIndexes.length)
  const selectedIndex = availableIndexes[selectedPosition]

  return {
    text: praisePhrases[selectedIndex][language],
    remainingIndexes: availableIndexes.filter(
      (index) => index !== selectedIndex,
    ),
  }
}
