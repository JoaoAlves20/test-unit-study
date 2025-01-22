import axios from 'axios'

const URL = 'https://swapi.dev/api/people'

export async function getPeople(nameCharacter) {
    try {
        const url = `${URL}/?search=${nameCharacter}&format=json`
        const { data } = await axios.get(url)
        return data.results.map((person) => (
            {
                nome: person.name,
                peso: person.height
            }
        ))
    } catch (error) {
        console.error(error)
    }
}