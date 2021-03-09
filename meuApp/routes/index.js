var express = require('express');
var router = express.Router();
var AtletasController = require("../controllers/AtletasController");
var HomeController = require("../controllers/HomeController");
var AdminTableController = require("../controllers/AdminTableController");
var AdminObsController = require("../controllers/AdminObsController");





router.get("/adminobs", AdminObsController.index);
router.get("/admintable", AdminTableController.index);
router.get("/atletas", AtletasController.index);
router.get("/", HomeController.index);
router.post("/saveContact", HomeController.saveContact);


module.exports = router;


