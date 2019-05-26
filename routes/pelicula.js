const fs = require('fs')
var express = require('express')
var router = express.Router()
const axios = require('axios')

var favListContent = ''
const favDir = __dirname + '/../data/favList'

router.get('/:idPelicula', (req, res) => {
  let idReq = req.params.idPelicula
  readFavList()


  function readFavList() {
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
  }

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

})

router.post('/:idPelicula/like', async (req, res) => {
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
})



module.exports = router;