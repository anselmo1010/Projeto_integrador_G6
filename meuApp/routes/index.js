var express = require('express');
var router = express.Router();
var AtletasController = require("../controllers/AtletasController");
var HomeController = require("../controllers/HomeController");





router.get("/atletas", AtletasController.index);
router.get("/", HomeController.index);
router.post("/saveContact", HomeController.saveContact);


module.exports = router;


