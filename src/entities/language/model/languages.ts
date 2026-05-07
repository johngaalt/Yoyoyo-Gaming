import type { LanguageOption, LocalizedText } from './types'

export const languages: LanguageOption[] = [
  { code: 'ru', nativeName: 'Русский', shortName: 'RU' },
  { code: 'es', nativeName: 'Español', shortName: 'ES' },
  { code: 'en', nativeName: 'English', shortName: 'EN' },
]

export const uiText = {
  appName: {
    ru: 'Йо-йо слова',
    es: 'Yoyoyo palabras',
    en: 'Yoyoyo words',
  },
  chooseLanguage: {
    ru: 'Выбери язык',
    es: 'Elige idioma',
    en: 'Choose language',
  },
  chooseCategory: {
    ru: 'Выбери',
    es: 'Elige',
    en: 'Choose',
  },
  listen: {
    ru: 'Слушать',
    es: 'Escuchar',
    en: 'Listen',
  },
  play: {
    ru: 'Играть',
    es: 'Jugar',
    en: 'Play',
  },
  findPrefix: {
    ru: 'Выбери:',
    es: 'Elige:',
    en: 'Choose:',
  },
  correct: {
    ru: 'Молодец, Марк!',
    es: '¡Muy bien, Mark!',
    en: 'Great job, Mark!',
  },
  tryAgain: {
    ru: 'Ещё раз',
    es: 'Otra vez',
    en: 'Try again',
  },
  next: {
    ru: 'Дальше',
    es: 'Siguiente',
    en: 'Next',
  },
  back: {
    ru: 'Назад',
    es: 'Atrás',
    en: 'Back',
  },
} satisfies Record<string, LocalizedText>
