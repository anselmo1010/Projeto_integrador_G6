var express = require('express');
var router = express.Router();
const LoginController = require('../controllers/LoginController');
const ChampionshipController = require('../controllers/ChampionshipController');
let auth = require('../middlewares/auth')


router.get("/login",auth, LoginController.signIn)
router.post("/login", LoginController.signIn)
router.post("/signUp", LoginController.signUpAthlete)
router.post("/signUpRecruiter", LoginController.signUpRecruiter)
router.get('/logout', LoginController.signOut)
router.get('/adminobs', LoginController.admin)
router.post('/adminobs', ChampionshipController.getChampionship)


module.exports = router;
