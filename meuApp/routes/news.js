var express = require('express');
const NewsController = require('../controllers/NewsController');
var router = express.Router();


router.get('/', NewsController.index);

module.exports = router;
