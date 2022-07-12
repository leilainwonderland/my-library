import { quotes } from './citations.js'
import { randomElement } from './random-element.js'

/**
 * Récupère une citation aléatoire de TRIPTOK
 */
export function getRandomQuote () {
  return randomElement(quotes)
}
