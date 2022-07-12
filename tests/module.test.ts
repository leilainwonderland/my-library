import { getRandomQuote } from '../src'
import { quotes } from '../src/citations'

test('It gets a random quote', () => {
  const randomQuote = getRandomQuote()

  // on vérifie que l'on récupère bien une citation
  expect(quotes).toContain(randomQuote)
})
