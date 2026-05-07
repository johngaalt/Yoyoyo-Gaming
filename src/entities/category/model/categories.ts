import type { Category } from './types'

export const categories: Category[] = [
  {
    id: 'transport',
    title: {
      ru: 'Транспорт',
      es: 'Transporte',
      en: 'Transport',
    },
    emoji: '🚗',
    colorClassName: 'bg-sky-100 text-sky-950 ring-sky-200',
  },
  {
    id: 'food',
    title: {
      ru: 'Еда',
      es: 'Comida',
      en: 'Food',
    },
    emoji: '🍎',
    colorClassName: 'bg-amber-100 text-amber-950 ring-amber-200',
  },
  {
    id: 'animals',
    title: {
      ru: 'Животные',
      es: 'Animales',
      en: 'Animals',
    },
    emoji: '🐶',
    colorClassName: 'bg-emerald-100 text-emerald-950 ring-emerald-200',
  },
]
