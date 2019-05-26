var express = require('express')
var router = express.Router()
var connect = require('../controllers/apiconnect')

router.get('/:idPelicula', connect.APIFilmByID)
router.post('/:idPelicula/like', connect.likeInFilm)

module.exports = router;