import '../styles/Card.css'

export function Card({ card, handleClick }) {
    return (
        <li className='card'>
            <button
                className='card-btn'
                onClick={() => {
                    handleClick(card)
                }}
            >
                {card.value}
            </button>
        </li>
    )
}
