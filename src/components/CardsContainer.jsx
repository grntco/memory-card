import { Card } from './Card'

export function CardsContainer({ cards, handleClick }) {
    if (cards.length > 0) {
        return (
            <ul className='cards-container'>
                {cards.map((card, index) => {
                    return (
                        <Card
                            key={index}
                            card={card}
                            handleClick={handleClick}
                        ></Card>
                    )
                })}
            </ul>
        )
    }
}
