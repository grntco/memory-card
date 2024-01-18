import { Card } from './Card'

export function CardsContainer({ cards, handleCardClick }) {

    return (
        <ul className='cards-container'>
            {cards.map((card, index) => {
                return (
                    <Card
                        key={index}
                        value={card.value}
                        handleCardClick={handleCardClick}
                        index={index}
                    ></Card>
                )
            })}
        </ul>
    )
}
