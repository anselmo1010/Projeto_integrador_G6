const Sequelize = require('sequelize');
const config = require('../config/database')

const LoginController = {
    index: (req, res) =>{
        res.render('login')
    },
    sigin: (req, res) =>{
        res.render('admin-page')
    },
    teste: async (req, res) => {
        const db = new Sequelize(config);
        const teste = await db.query('select * from Teste');

        
    }
}

module.exports = LoginController;