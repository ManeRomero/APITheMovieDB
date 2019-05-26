var express = require('express');
var router = express.Router();
var connect = require('../controllers/apiconnect')

router.get('/', connect.APIPopular)

module.exports = router;