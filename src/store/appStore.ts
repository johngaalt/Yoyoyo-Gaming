import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { LanguageCode } from '../entities/language'
import type { ProgressByCardId } from '../shared/types/progress'

interface AppState {
  language: LanguageCode | null
  progress: ProgressByCardId
  setLanguage: (language: LanguageCode) => void
  markHeard: (cardId: string) => void
  markCorrect: (cardId: string) => void
}

const getCardProgress = (progress: ProgressByCardId, cardId: string) =>
  progress[cardId] ?? { heardCount: 0, correctCount: 0 }

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      language: null,
      progress: {},
      setLanguage: (language) => set({ language }),
      markHeard: (cardId) =>
        set((state) => {
          const current = getCardProgress(state.progress, cardId)

          return {
            progress: {
              ...state.progress,
              [cardId]: {
                ...current,
                heardCount: current.heardCount + 1,
              },
            },
          }
        }),
      markCorrect: (cardId) =>
        set((state) => {
          const current = getCardProgress(state.progress, cardId)

          return {
            progress: {
              ...state.progress,
              [cardId]: {
                ...current,
                correctCount: current.correctCount + 1,
              },
            },
          }
        }),
    }),
    {
      name: 'yoyoyo-learning-state',
      partialize: (state) => ({
        language: state.language,
        progress: state.progress,
      }),
    },
  ),
)
