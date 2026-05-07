import type { LanguageCode, LocalizedText } from '../../entities/language'

export const localize = (text: LocalizedText, language: LanguageCode) =>
  text[language]
