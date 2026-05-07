import type { LocalizedText } from '../../language'

export type CategoryId =
  | 'transport'
  | 'food'
  | 'animals'
  | 'toys'
  | 'clothes'
  | 'body'
  | 'bathroom'
  | 'emotions'

export interface Category {
  id: CategoryId
  title: LocalizedText
  emoji: string
  colorClassName: string
}
