import type { CategoryId } from '../../category'
import type { LocalizedText } from '../../language'

export interface LearningCard {
  id: string
  categoryId: CategoryId
  imageSrc: string
  title: LocalizedText
  questionTitle?: Partial<LocalizedText>
}
