import '../styles/App.css'
import { Scoreboard } from './Scoreboard'
import { CardsContainer } from './CardsContainer'
import { shuffle } from '../utils/shuffle'
import { deal } from '../utils/deal'
import { useState, useEffect } from 'react'
import { fetchCharacterData } from '../utils/fetchCharacterData'

function App() {
    const [currentScore, setCurrentScore] = useState(0)
    const [highScore, setHighScore] = useState(0)
    const [cards, setCards] = useState([])
    const dealtCards = deal(shuffle(cards), 8)
    // Can this check for ones that have not been clicked?
    // It needs to add at least one card that has not been clicked to the dealtCard array. cards.some(card => card.clicked === true)

    useEffect(() => {
        ;(async () => {
            const characterData = await fetchCharacterData(16)
            setCards(() => {
                return characterData.map((character) => {
                    return {
                        name: character.name,
                        image: character.image,
                        yearOfBirth: character.yearOfBirth,
                        ancestry: character.ancestry,
                        house: character.house,
                        wand: character.wand,
                        clicked: false,
                    }
                })
            })
        })()
    }, [])

    return (
        <div className='app'>
            <Scoreboard
                currentScore={currentScore}
                highScore={highScore}
            ></Scoreboard>
            <CardsContainer cards={dealtCards} handleClick={handleClick} />
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
        // setCards((prevCards) => [...shuffle(prevCards)])
    }
}

export default App
