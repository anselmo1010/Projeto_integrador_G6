const {Athlete} = require("../models");
const AtletasController = {
    index: (req, res) => {
        return res.render("atletas");
    },
    getAthlete: async (req, res) => {
        let id = req.params.id;


        const athlete = await Athlete.findOne({
            where: {
                id_atleta: id
            }
        });

        console.log('Atleta:', athlete)

        res.render('admin-profile', {"athlete": athlete, user: req.session.user})

        
    }

};

module.exports = AtletasController;

