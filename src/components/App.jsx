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
    const [dealtCards, setDealtCards] = useState([])

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

    useEffect(() => {
        if (cards.length > 0) {
            setDealtCards([...deal(8, shuffle(cards))])
        }
    }, [cards])

    return (
        <div className='app'>
            <Scoreboard
                cards={cards}
                currentScore={currentScore}
                highScore={highScore}
            />
            <CardsContainer cards={dealtCards} handleClick={handleClick} />
        </div>
    )

    function handleClick(card) {
        if (card.clicked) {
            resetGame()
        } else {
            console.log(card)
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
