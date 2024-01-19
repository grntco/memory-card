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
                <div className='card-btn__image-container'>
                    <img
                        className='card-btn__image'
                        src={card.image}
                        alt={card.name}
                    />
                </div>
                <div className="card-btn__primary-info-container">
                    <h3 className='card-btn__name'>{card.name}</h3>
                    <div className='card-btn__birth-year'>b. {card.yearOfBirth}</div>
                </div>
                <ul className="card-btn__secondary-info-container">
                    <li>Ancestry: {card.ancestry}</li>
                    <li>Hogwarts House: {card.house}</li>
                    <li>Wand: {card.wand.wood}, {card.wand.core}</li>
                </ul>
            </button>
        </li>
    )
}
