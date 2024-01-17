import './styles/App.css'
import { shuffle } from './utils/shuffle'
import { cardData } from './cardData'
import Card from './components/Card'

function App() {
    shuffle(cardData)

    return (
        <div className='app'>
            <ul className='cards-container'>
                {cardData.map((card, index) => {
                    return <Card key={index} value={card.value}></Card>
                })}
            </ul>
        </div>
    )
}

export default App
