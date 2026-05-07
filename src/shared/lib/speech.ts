import type { LanguageCode } from '../../entities/language'

const speechLocales: Record<LanguageCode, string> = {
  ru: 'ru-RU',
  es: 'es-ES',
  en: 'en-US',
}

export const speakText = (text: string, language: LanguageCode) => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return false
  }

  window.speechSynthesis.cancel()

  const utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = speechLocales[language]
  utterance.rate = 0.82
  utterance.pitch = 1.08

  window.speechSynthesis.speak(utterance)
  return true
}

export const speakWord = speakText
