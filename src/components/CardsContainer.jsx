import { shuffle } from '../utils/shuffle'
import { useState } from 'react'
import { cardData } from '../cardData'
import { Card } from './Card'

export function CardsContainer() {
    const [cards, setCards] = useState([...shuffle(cardData)])

    return (
        <ul className='cards-container'>
            {cards.map((card, index) => {
                return (
                    <Card
                        key={index}
                        value={card.value}
                        handleCardClick={handleCardClick}
                    ></Card>
                )
            })}
        </ul>
    )

    function handleCardClick() {
        setCards((prevCards) => [...shuffle(prevCards)])
    }
}
