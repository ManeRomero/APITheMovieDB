var express = require('express')
var router = express.Router()
var connect = require('../controllers/index')
var favModule = require('../controllers/helpers/fav')

router.get('/:idPelicula', connect.APIFilmByID)
router.post('/:idPelicula/like', favModule.likeInFilm)

module.exports = router;