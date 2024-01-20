export async function fetchCharacterData() {
    try {
        const response = await fetch(
            'https://hp-api.onrender.com/api/characters',
        )
        const data = await response.json()
        return data.slice(0, 16)
    } catch (error) {
        console.error(error)
    }
}
