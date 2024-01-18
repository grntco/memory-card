import '../styles/Card.css'

export function Card({ value, handleCardClick }) {
    return (
        <li className='card'>
            <button className='card-btn' onClick={handleCardClick}>
                {value}
            </button>
        </li>
    )
}
