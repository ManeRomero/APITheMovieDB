const axios = require('axios')
const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '?api_key=8a91f689a2a058d84eef64d25fa79756';
const API_POPULAR_URL = 'movie/popular'

async function connectAPI(resolve, reject) {
    try {
        console.log('FUNCIONANDO')
        const generate = await axios.get(API_URL + API_POPULAR_URL + API_KEY)
        let results = generate.data.results
        return results

    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    connectAPI
}