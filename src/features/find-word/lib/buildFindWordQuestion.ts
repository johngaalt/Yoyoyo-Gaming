import type { LearningCard } from '../../../entities/card'
import type { LanguageCode } from '../../../entities/language'

const spanishFemininePluralTargets = new Set([
  'botas',
  'botas altas',
  'botas de lluvia',
  'burbujas',
  'canicas',
  'gafas',
  'manoplas',
  'medias',
  'uñas',
])

const spanishMasculinePluralTargets = new Set([
  'aros',
  'bloques',
  'calcetines',
  'dientes',
  'guantes',
  'nervios',
  'pantalones',
  'pantalones cortos',
  'vaqueros',
])

const spanishFeminineTargets = new Set([
  'leche',
  'mano',
  'moto',
  'nariz',
  'serpiente',
])

const spanishMasculineTargets = new Set([
  'cortauñas',
  'gorila',
  'pijama',
  'rompecabezas',
])

const feminineSpanishEndings = ['a', 'ción', 'sión', 'dad', 'tad', 'ez']

const getSpanishArticle = (word: string) => {
  const normalizedWord = word.toLocaleLowerCase('es')
  const firstWord = normalizedWord.split(' ')[0]

  if (spanishFemininePluralTargets.has(normalizedWord)) {
    return 'las'
  }

  if (spanishMasculinePluralTargets.has(normalizedWord)) {
    return 'los'
  }

  if (spanishFeminineTargets.has(normalizedWord)) {
    return 'la'
  }

  if (spanishMasculineTargets.has(normalizedWord)) {
    return 'el'
  }

  if (feminineSpanishEndings.some((ending) => firstWord.endsWith(ending))) {
    return 'la'
  }

  return 'el'
}

const buildSpanishTarget = (word: string) => {
  if (/^(el|la|los|las)\s/i.test(word)) {
    return word
  }

  return `${getSpanishArticle(word)} ${word}`
}

const buildEnglishTarget = (word: string) => {
  if (/^the\s/i.test(word)) {
    return word
  }

  return `the ${word}`
}

export const buildFindWordQuestion = (
  card: LearningCard,
  language: LanguageCode,
) => {
  const word = card.questionTitle?.[language] ?? card.title[language]

  if (language === 'ru') {
    return `Выбери ${word}`
  }

  if (language === 'es') {
    return `Elige ${buildSpanishTarget(word)}`
  }

  return `Choose ${buildEnglishTarget(word)}`
}
