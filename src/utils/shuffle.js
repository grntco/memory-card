export function shuffle(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        let temp = deck[j]
        deck[j] = deck[i]
        deck[i] = temp
    }

    return deck
}


