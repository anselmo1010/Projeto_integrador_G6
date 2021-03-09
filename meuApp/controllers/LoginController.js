const Sequelize = require('sequelize');
const config = require('../config/database')

const LoginController = {
    index: (req, res) => {
        res.render('login')
    },
    signIn: (req, res) => {
        if (!req.session.user) {

            let { email, password } = req.body;

            let user = {
                name: "Airton",
                email,
                password
            }

            req.session.user = user;

            console.log("Email", email)
            console.log("Senha", password)            
        }
        res.render('admin-page', { user: req.session.user })
    },
    signOut: (req, res) => {
        req.session.destroy();
        res.redirect('login');  
    }
}

module.exports = LoginController;