import '../styles/Card.css'
import { useState } from 'react'

export function Card({ card, handleClick }) {
    const [mouseOver, setMouseOver] = useState(false)

    return (
        <li className='card'>
            <button
                className='card-btn'
                style={{ backgroundImage: `url(${card.image}` }}
                onClick={() => {
                    handleClick(card)
                }}
                onMouseOver={() => {
                    handleHover(true)
                }}
                onMouseLeave={() => {
                    handleHover(false)
                }}
            >
                {mouseOver && (
                    <div className='card-btn__info-container'>
                        <div className='card-btn__primary-info'>
                            <h3 className='card-btn__name'>{card.name}</h3>
                            <div className='card-btn__birth-year'>
                                (b. {card.yearOfBirth})
                            </div>
                        </div>
                        <ul className='card-btn__secondary-info'>
                            <li>
                                <span>Hogwarts House:</span> {card.house}
                            </li>
                            {card.ancestry && (
                                <li>
                                    <span>Ancestry:</span> {card.ancestry}
                                </li>
                            )}
                            {(card.wand.wood || card.wand.core) && (
                                <li>
                                    <span>Wand:</span> {card.wand.wood ?? ''}
                                    {card.wand.wood && card.wand.core
                                        ? ', '
                                        : ''}
                                    {card.wand.core ?? ''}
                                </li>
                            )}
                        </ul>
                    </div>
                )}
            </button>
        </li>
    )

    function handleHover(isMouseOver) {
        setMouseOver(isMouseOver)
    }
}
