const {Athlete} = require("../models");
const AtletasController = {
    index: (req, res) => {
        return res.render("atletas");
    },
    getAthletes: async (req, res) => {
        const athletes = Athlete.findAll();

        
    }

};

module.exports = AtletasController;

