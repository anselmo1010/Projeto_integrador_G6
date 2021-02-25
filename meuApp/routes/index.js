var express = require('express');
var router = express.Router();
var AtletasController = require("../controllers/AtletasController");
var HomeController = require("../controllers/HomeController");
const LoginController = require('../controllers/LoginController');




router.get("/atletas", AtletasController.index);
router.get("/login", LoginController.index)
router.post("/login", LoginController.sigin)
router.get("/", HomeController.index);


module.exports = router;


