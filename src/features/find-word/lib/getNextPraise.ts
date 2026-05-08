import type { LanguageCode } from '../../../entities/language'

const praiseText = 'ЙОЙОЙО, Марк'

export const getNextPraise = (
  language: LanguageCode,
  remainingIndexes: number[],
): { text: string; remainingIndexes: number[] } => {
  void language
  void remainingIndexes

  return {
    text: praiseText,
    remainingIndexes: [],
  }
}
