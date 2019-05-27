const axios = require('axios')

getPopularFilms = async () => {
    const API_URL = 'https://api.themoviedb.org/3/';
    const API_KEY = '?api_key=8a91f689a2a058d84eef64d25fa79756';
    const API_POPULAR_URL = 'movie/popular'

    const generate = await axios.get(API_URL + API_POPULAR_URL + API_KEY)
    return generate.data
}

getFilmByID = async (id) => {

    const API_URL = 'https://api.themoviedb.org/3/';
    const API_PREFIX = 'movie/'
    const API_KEY = '?api_key=8a91f689a2a058d84eef64d25fa79756';
    const API_POST = '&language=es-ES'
    let generate = await axios.get(API_URL + API_PREFIX + id + API_KEY + API_POST)
    let pelicula = generate.data
    return pelicula
}

module.exports = {
    getPopularFilms,
    getFilmByID
}