import '../styles/Card.css'

export function Card({ card, handleClick }) {
    console.log(card.image)
    return (
        <li className='card'>
            <button
                className='card-btn'
                onClick={() => {
                    handleClick(card)
                }}
            >
                {card.name}
                {card.patronus}
            </button>
        </li>
    )
}
