export type LanguageCode = 'ru' | 'es' | 'en'

export type LocalizedText = Record<LanguageCode, string>

export interface LanguageOption {
  code: LanguageCode
  nativeName: string
  shortName: string
}
