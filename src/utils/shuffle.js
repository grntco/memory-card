export function shuffle(cards) {
    const shuffledCards = []

    cards.forEach((card) => {
        card.position = _changePosition(cards.length)
    })

    for (let i = 0; i < cards.length; i++) {
        const card = cards.find((card) => card.position === i)
        shuffledCards.push(card)
    }

    return shuffledCards
}

function _changePosition(limit, usedPositions = []) {
    const newPosition = Math.floor(Math.random() * limit)
    if (usedPositions.includes(newPosition)) {
        return _changePosition(limit, usedPositions)
    }
    usedPositions.push(newPosition)
    return newPosition
}
