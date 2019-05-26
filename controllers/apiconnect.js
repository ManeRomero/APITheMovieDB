const axios = require('axios')
const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '?api_key=8a91f689a2a058d84eef64d25fa79756';
const API_POPULAR_URL = 'movie/popular'
const fs = require('fs')

const favDir = __dirname + '/../data/favList'
const URL_IMAGE = 'http://image.tmdb.org/t/p/w185/'

APIPopular = async (req, res, next) => {
    const generate = await axios.get(API_URL + API_POPULAR_URL + API_KEY)
    let results = generate.data.results

    try {
        res.render('index', {
            results,
            URL_IMAGE
        })

    } catch (error) {
        console.error(error);
    }
}

giveResults = async () => {
        console.log('FUNCIONANDO')
        const generate = await axios.get(API_URL + API_POPULAR_URL + API_KEY)
        return generate.data
}

APIFilmByID = (req, res) => {
    let idReq = req.params.idPelicula

    fs.readFile(favDir, function read(err, data) {
        if (err) {
            throw err
        }

        favListContent = data.toString()
        consulta = favListContent.search(`favorita: ${idReq}`)
        console.log(consulta, 'THIS IS CONSULTA')
        console.log(favListContent)

        getIDFromAPI()
    })

    async function getIDFromAPI() {

        let pelicula = []
        const URL_BASE = 'http://image.tmdb.org/t/p/w185/'

        const API_URL = 'https://api.themoviedb.org/3/';
        const API_PREFIX = 'movie/'
        const API_KEY = '?api_key=8a91f689a2a058d84eef64d25fa79756';
        const API_POST = '&language=es-ES'

        try {

            let generate = await axios.get(API_URL + API_PREFIX + idReq + API_KEY + API_POST)
            pelicula = generate.data

            res.render('idpeli', {
                pelicula,
                URL_BASE
            })

        } catch (error) {
            res.render('error', {
                error: err,
                message: 'ERROR FATAL!!'
            })
        }
    }
}

likeInFilm = async (req, res) => {
    let id = req.params.idPelicula
    let objectToWrite = `favorita: ${id}\n`

    fs.appendFile(favDir, objectToWrite, (err) => {
        if (err) {
            res.render('error', {
                error: err,
                message: 'ERROR FATAL!!'
            })
        } else {
            res.redirect(`/pelicula/${id}`)
        }
    })
}

module.exports = {
    APIPopular,
    giveResults,
    APIFilmByID,
    likeInFilm
}