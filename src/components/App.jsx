import '../styles/App.css'
import { Scoreboard } from './Scoreboard'
import { CardsContainer } from './CardsContainer'
import { shuffle } from '../utils/shuffle'
import { useState } from 'react'
import { cardData } from '../cardData'

function App() {
    const [currentScore, setCurrentScore] = useState(0)
    // const [highScore, setHighScore] = useState(0)
    const [cards, setCards] = useState([...shuffle(cardData)])

    return (
        <div className='app'>
            <Scoreboard currentScore={currentScore}></Scoreboard>
            <CardsContainer cards={cards} handleClick={handleClick} />
        </div>
    )

    function handleClick(card) {
        if (card.clicked) {
            resetGame()
            console.log(cards)
        } else {
            card.clicked = true
            setCurrentScore((prevCurrentScore) => prevCurrentScore + 1)
            setCards((prevCards) => [...shuffle(prevCards)])
            console.log(cards)
        }
    }

    function resetGame() {
        setCurrentScore(0)
        setCards((prevCards) =>
            prevCards.map((card) => {
                return { ...card, clicked: false }
            }),
        )
    }
}

export default App
