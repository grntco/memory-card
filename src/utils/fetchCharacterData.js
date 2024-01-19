export async function fetchCharacterData() {
    // const baseUrl = 'https://api.potterdb.com/v1/characters'
    // const fullUrl = `${baseUrl}?filter[name_cont]=${name}`
    const url = 'https://hp-api.onrender.com/api/characters'

    try {
        const response = await fetch(url)
        const data = await response.json()
        // console.log(json)
        return data.slice(0, 4)
    } catch (error) {
        console.error(error)
    }
}
