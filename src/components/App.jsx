import '../styles/App.css'
import { Scoreboard } from './Scoreboard'
import { CardsContainer } from './CardsContainer'
import { shuffle } from '../utils/shuffle'
import { useState, useEffect } from 'react'
// import { cardData } from '../cardData'
import { fetchCharacterData } from '../utils/fetchCharacterData'

function App() {
    const [currentScore, setCurrentScore] = useState(0)
    const [highScore, setHighScore] = useState(0)
    const [cards, setCards] = useState([])

    useEffect(() => {
        const updateCards = async () => {
            const characterData = await fetchCharacterData()
            setCards(() => {
                return characterData.map((c) => {
                    return {
                        name: c.name,
                        image: c.image,
                        yearOfBirth: c.yearOfBirth,
                        ancestry: c.ancestry,
                        house: c.house,
                        wand: c.wand,
                    }
                })
            })
        }
        updateCards()
    }, [])

    return (
        <div className='app'>
            <Scoreboard
                currentScore={currentScore}
                highScore={highScore}
            ></Scoreboard>
            <CardsContainer cards={cards} handleClick={handleClick} />
        </div>
    )

    function handleClick(card) {
        if (card.clicked) {
            resetGame()
        } else {
            moveToNextPlay(card)
        }
    }

    function resetGame() {
        if (currentScore > highScore) {
            setHighScore(currentScore)
        }
        setCurrentScore(0)
        setCards((prevCards) =>
            prevCards.map((card) => {
                return { ...card, clicked: false }
            }),
        )
    }

    function moveToNextPlay(card) {
        card.clicked = true
        setCurrentScore((prevCurrentScore) => prevCurrentScore + 1)
        setCards((prevCards) => [...shuffle(prevCards)])
    }
}

export default App
