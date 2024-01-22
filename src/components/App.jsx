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
    const [deck, setDeck] = useState([])
    const [dealtCards, setDealtCards] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        ;(async () => {
            const characterData = await fetchCharacterData(16)
            setDeck(() => {
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
        if (deck.length > 0) {
            setDealtCards([...deal(8, shuffle(deck))])
        }
    }, [deck])

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true)
        }, 1000)
    }, [])

    return (
        <div className='app'>
            <Scoreboard
                cards={deck}
                currentScore={currentScore}
                highScore={highScore}
            />
            {loaded && <CardsContainer cards={dealtCards} handleClick={handleClick} />}
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
        setDeck((prevCards) =>
            prevCards.map((card) => {
                return { ...card, clicked: false }
            }),
        )
    }

    function moveToNextPlay(card) {
        card.clicked = true
        setCurrentScore((prevCurrentScore) => prevCurrentScore + 1)
        setDeck((prevCards) => [...shuffle(prevCards)])
    }
}

export default App
