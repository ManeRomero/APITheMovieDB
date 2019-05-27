const connect = require('./connections')
const URL_IMAGE = 'http://image.tmdb.org/t/p/w185/'

byTitle = (req, res) => {
    connect.getPopularFilms()
        .then((peliculas) => {

            let results = peliculas.results
            results.sort((a, b) => {
                let it1 = a.title
                let it2 = b.title

                if (it1 > it2) {
                    return 1
                } else if (it1 < it2) {
                    return -1
                }

                return 0
            })

            res.render('index', {
                URL_IMAGE,
                results
            })
        })
}

byRating = (req, res) => {
    connect.getPopularFilms()
        .then((peliculas) => {

            let results = peliculas.results
            results.sort((a, b) => {
                let it1 = a.vote_average
                let it2 = b.vote_average

                if (it1 > it2) {
                    return -1
                } else if (it1 < it2) {
                    return 1
                }

                return 0
            })

            res.render('index', {
                URL_IMAGE,
                results
            })
        })

        .catch(err => console.error(err))
}

byRelease = (req, res) => {
    connect.getPopularFilms()
        .then((peliculas) => {

            let results = peliculas.results

            results.sort((a, b) => {

                let it1 = a.release_date
                let it2 = b.release_date

                if (it1 > it2) {
                    return -1
                } else if (it1 < it2) {
                    return 1
                }

                return 0
            })

            res.render('index', {
                URL_IMAGE,
                results
            })
        })
}

module.exports = {
    byTitle,
    byRating,
    byRelease
}