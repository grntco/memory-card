import '../styles/App.css'
import { Scoreboard } from './Scoreboard'
import { CardsContainer } from './CardsContainer'
import { shuffle } from '../utils/shuffle'
import { useState, useEffect } from 'react'
import { cardData } from '../cardData'

function App() {
    const [currentScore, setCurrentScore] = useState(0)
    const [highScore, setHighScore] = useState(0)
    const [cards, setCards] = useState([...shuffle(cardData)])

    useEffect(() => {
        const baseUrl = 'https://api.potterdb.com/v1/characters'
        const character = 'Harry Potter'
        const fullUrl = `${baseUrl}?filter[name_cont]=${character}`
        fetchCharacterData(fullUrl)
    }, [])

    async function fetchCharacterData(url) {
        try {
            const response = await fetch(url)
            const json = await response.json()
            return json
        } catch (error) {
            console.error(error)
        }
    }

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
