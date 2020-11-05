var express = require('express');
var router = express.Router();
var ContatoController = require("../controllers/ContatoController");
var HomeController = require("../controllers/HomeController");




router.get("/contato", ContatoController.index);
router.get("/home", HomeController.index);
router.get("/", HomeController.index);

module.exports = router;


