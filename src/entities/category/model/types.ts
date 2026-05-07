import type { LocalizedText } from '../../language'

export type CategoryId = 'transport' | 'food' | 'animals'

export interface Category {
  id: CategoryId
  title: LocalizedText
  emoji: string
  colorClassName: string
}
