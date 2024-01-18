import '../styles/Card.css'

export function Card({ value, handleCardClick, index }) {
    return (
        <li className='card'>
            <button className='card-btn' onClick={() => {handleCardClick(index)}}>
                {value}
            </button>
        </li>
    )
}
