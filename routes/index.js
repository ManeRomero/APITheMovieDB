const fs = require('fs')
var express = require('express');
var router = express.Router();
var axios = require('axios')
var connect = require('../helpers/apiconnect')
let peliculas = []

/* GET home page. */
router.get('/', function (req, res, next) {

  connectAPI()

  async function connectAPI() {
    const API_URL = 'https://api.themoviedb.org/3/';
    const API_KEY = '?api_key=8a91f689a2a058d84eef64d25fa79756';
    const API_POPULAR_URL = 'movie/popular'

    const URL_IMAGE = 'http://image.tmdb.org/t/p/w185/'

    try {

      const generate = await axios.get(API_URL + API_POPULAR_URL + API_KEY)
      let results = generate.data.results

      res.render('index', {
        results,
        URL_IMAGE
      })

    } catch (error) {
      console.error(error);
    }
  }
})


module.exports = router;