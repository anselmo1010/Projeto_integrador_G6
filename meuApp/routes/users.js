var express = require('express');
var router = express.Router();
const LoginController = require('../controllers/LoginController');
let auth = require('../middlewares/auth')


router.get("/login",auth, LoginController.signIn)
router.post("/login", LoginController.signIn)
router.post("/signUp", LoginController.signUpAthlete)
router.get('/logout', LoginController.signOut)
router.get('/adminobs', LoginController.admin)

module.exports = router;
