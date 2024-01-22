import { shuffle } from './shuffle'

export function deal(amount, deck) {
    const dealtCards = deck.slice(0, amount - 1)
    const restOfDeck = deck.slice(amount - 1)
    const unclickedCard = restOfDeck.find((card) => !card.clicked)

    if (unclickedCard) {
        dealtCards.push(unclickedCard)
    } else {
        dealtCards.push(restOfDeck[0])
    }

    return shuffle(dealtCards)
}
