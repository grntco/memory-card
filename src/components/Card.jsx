import '../styles/Card.css'

export default function Card({ value }) {
    return (
        <li className='card'>
            <button className='card-btn'>{value}</button>
        </li>
    )
}
