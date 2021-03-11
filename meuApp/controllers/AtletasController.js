const {Athlete} = require("../models");
const AtletasController = {
    index: (req, res) => {
        return res.render("atletas");
    },
    getAthlete: async (req, res) => {
        const athletes = Athlete.findAll();

        res.render('login')

        
    }

};

module.exports = AtletasController;

