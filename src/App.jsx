import './styles/App.css'
import { shuffle } from './utils/shuffle'
import { cardData } from './cardData'

function App() {
    shuffle(cardData)

    return (
        <>
            <ul>
                {cardData.map((card, index) => {
                    return <li key={index}>{card.value}</li>
                })}
            </ul>
        </>
    )
}

export default App
