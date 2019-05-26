var express = require('express');
var router = express.Router();

var connect = require('../controllers/apiconnect')
var sorter = require('../controllers/sorters')

router.get('/', connect.APIPopular)
router.get('/byTitle', sorter.byTitle)
router.get('/byRate', sorter.byRating)
router.get('/byDate', sorter.byRelease)

module.exports = router;