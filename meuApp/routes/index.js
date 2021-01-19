var express = require('express');
var router = express.Router();
var AtletasController = require("../controllers/AtletasController");
var HomeController = require("../controllers/HomeController");





router.get("/atletas", AtletasController.index);
router.get("/", HomeController.index);


module.exports = router;


