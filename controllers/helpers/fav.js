const fs = require('fs')
const favDir = __dirname + '/../../data/favList'

readFav = () => {
    let resource = fs.readFileSync(favDir, (err, data) => {
        try {
            return data.toString()
        } catch {
            throw err
        }
    })
    return resource
}

likeInFilm = (req, res) => {
    let id = req.params.idPelicula
    let objectToWrite = `${id}\n`

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
    readFav,
    likeInFilm
}