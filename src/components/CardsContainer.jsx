import { Card } from './Card'

export function CardsContainer({ cards, handleClick }) {
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
