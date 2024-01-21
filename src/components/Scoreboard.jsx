import '../styles/Scoreboard.css'

export function Scoreboard({ cards, currentScore, highScore }) {
    return (
        <div className='scoreboard'>
            <div className='scoreboard__score-container'>
                <div className='scoreboard__current-score'>
                    Current Score: {currentScore}
                </div>
                <div className='scoreboard__high-score'>
                    High Score: {highScore}
                </div>
            </div>
            <p className='scoreboard__game-rules'>
                Don&apos;t click the same card twice! (max score: {cards.length})
            </p>
        </div>
    )
}
