const axios = require('axios')
const fs = require('fs').promises
const path = require('path')

const main = async () => {
    let res = await axios.get('https://rickandmortyapi.com/api/character')
    let { data: {results} } = res
    let personajes = results.map((personaje) => {
        return {
            id: personaje.id,
            name: personaje.name,
            status: personaje.status,
            species: personaje.species
        }
    }).map((personaje) => Object.values(personaje).join(',')).join('\n')
    await fs.writeFile(path.join(__dirname, 'data.csv'), personajes)


    /**
     * PRUEBAS
     */
    //console.log(personajes)
    // Devuelve el path en donde nos encontramos
    //console.log(__dirname)
    //console.log(path.join(__dirname, 'data.csv'))
}

main()