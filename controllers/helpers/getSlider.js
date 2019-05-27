const connect = require('../connections')

getInfo = (peliculas) => {

    peliculas.sort((a, b) => {
        if (a.vote_average > b.vote_average) {
            return -1
        } else if (a.vote_average < b.vote_average) {
            return 1
        }
        return 0
    })
    
    let arraySlider = peliculas.splice(0, 4)

    arraySlider.forEach(pelicula => {
        pelicula.IMG_PATH = 'http://image.tmdb.org/t/p/w185/'
    })

    return arraySlider
}


module.exports = {
    getInfo
}