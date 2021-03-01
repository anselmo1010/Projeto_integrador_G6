const {Noticia} = require('../models');

const NewsController = {
    index: async (req, res) => {
        let notices = await Noticia.findAll();
        console.log(notices);

    }
}

module.exports = NewsController;

