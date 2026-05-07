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
  {
    id: 'toys',
    title: {
      ru: 'Игрушки',
      es: 'Juguetes',
      en: 'Toys',
    },
    emoji: '🧸',
    colorClassName: 'bg-violet-100 text-violet-950 ring-violet-200',
  },
  {
    id: 'clothes',
    title: {
      ru: 'Одежда',
      es: 'Ropa',
      en: 'Clothes',
    },
    emoji: '👕',
    colorClassName: 'bg-pink-100 text-pink-950 ring-pink-200',
  },
  {
    id: 'body',
    title: {
      ru: 'Тело',
      es: 'Cuerpo',
      en: 'Body',
    },
    emoji: '👋',
    colorClassName: 'bg-lime-100 text-lime-950 ring-lime-200',
  },
  {
    id: 'bathroom',
    title: {
      ru: 'Ванная',
      es: 'Baño',
      en: 'Bathroom',
    },
    emoji: '🛁',
    colorClassName: 'bg-cyan-100 text-cyan-950 ring-cyan-200',
  },
  {
    id: 'emotions',
    title: {
      ru: 'Эмоции',
      es: 'Emociones',
      en: 'Emotions',
    },
    emoji: '😊',
    colorClassName: 'bg-orange-100 text-orange-950 ring-orange-200',
  },
]
