import '../styles/App.css'
import { Scoreboard } from './Scoreboard'
import { CardsContainer } from './CardsContainer'


function App() {
    return (
        <div className='app'>
            <Scoreboard></Scoreboard>
            <CardsContainer />
        </div>
    )
}

export default App
