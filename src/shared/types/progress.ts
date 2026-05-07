export interface CardProgress {
  heardCount: number
  correctCount: number
}

export type ProgressByCardId = Record<string, CardProgress>
