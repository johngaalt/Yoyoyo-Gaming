import type { LearningCard } from '../../../entities/card'

export interface FindWordRound {
  target: LearningCard
  choices: LearningCard[]
}

const getSeededValue = (seed: number) => {
  const value = Math.sin(seed) * 10000

  return value - Math.floor(value)
}

const shuffleCards = (cards: LearningCard[], seed: number) =>
  [...cards]
    .map((card, index) => ({
      card,
      sortValue: getSeededValue(seed + index + card.id.length),
    }))
    .sort((first, second) => first.sortValue - second.sortValue)
    .map(({ card }) => card)

export const createFindWordRound = (
  cards: LearningCard[],
  choiceCount = 3,
  roundSeed = 0,
): FindWordRound => {
  const [target] = shuffleCards(cards, roundSeed)
  const distractors = shuffleCards(
    cards.filter((card) => card.id !== target.id),
    roundSeed + 17,
  ).slice(0, choiceCount - 1)

  return {
    target,
    choices: shuffleCards([target, ...distractors], roundSeed + 31),
  }
}
