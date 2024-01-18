import { useState } from 'react'

export function Scoreboard() {
    const [currentScore, setCurrentScore] = useState(0)
    const [highScore, setHighScore] = useState(0)

    return (
        <div className='scoreboard'>
            <p className='scoreboard__current-score'>
                Current Score: {currentScore}
            </p>
            <p className='scoreboard__high-score'>High Score: {highScore}</p>
        </div>
    )
}
