export async function fetchCharacterData(amount) {
    try {
        const response = await fetch(
            'https://hp-api.onrender.com/api/characters',
        )
        const data = await response.json()
        return data.slice(0, amount)
    } catch (error) {
        console.error(error)
    }
}
