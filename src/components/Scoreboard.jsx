export function Scoreboard({ currentScore, highScore }) {
    return (
        <div className='scoreboard'>
            <p className='scoreboard__current-score'>
                Current Score: {currentScore}
            </p>
            <p className='scoreboard__high-score'>High Score: {highScore}</p>
        </div>
    )
}
