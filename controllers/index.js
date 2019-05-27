const favModule = require('./helpers/fav')
const slider = require('./helpers/getSlider')
const connect = require('./connections')

APIPopular = async (req, res, next) => {
    connect.getPopularFilms()
        .then((peliculas) => {
            let results = peliculas.results
            let arraySlider = slider.getInfo(results)
            let objInicial = arraySlider[0]
            arraySlider.splice(0, 1)

            console.log('AQUÍI OBJ INICIAL', objInicial)
            console.log('AQUÍ EL ARRAY ENTERO', arraySlider)

            res.render('index', {
                objInicial,
                arraySlider,
                results
            })
        })
        .catch((error) => {
            console.error(error)
        })
}

APIFilmByID = (req, res) => {
    const URL_BASE = 'http://image.tmdb.org/t/p/w185/'
    let idReq = req.params.idPelicula

    connect.getFilmByID(idReq)
        .then((item) => {
            let pelicula = item

            let dataRead = favModule.readFav().toString()
            let checkIndex = dataRead.search(idReq)

            let iconClass = ''
            if (checkIndex < 0) {
                iconClass = 'far fa-heart'
            } else {
                iconClass = 'fas fa-heart'
            }

            res.render('idpeli', {
                pelicula,
                URL_BASE,
                iconClass
            })
        })
}

module.exports = {
    APIPopular,
    APIFilmByID
}