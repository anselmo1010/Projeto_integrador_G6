const {Noticia} = require("../models");

const HomeController = {
    index:  async (req, res, next) => {   
        const news = await Noticia.findAll();
        console.log(news)    


        return res.render("home", {"news": news});
    }
};

module.exports = HomeController;