const {News, Contact, Match, Result} = require("../models");
const Sequelize = require('sequelize');

const Op = Sequelize.Op;

const HomeController = {
    index:  async (req, res, next) => {   
       
        const matchs = await Match.findAll({
            where: {
                fk_resultado: {
                    [Op.not]: null
                }
            },
            include: ['resultado', 'clube_casa', 'clube_visitante'],
            //order:['data_partida','DESC'], 
            limit: 4
        });

        //console.log(matchs[0].resultado);
        
        
        const news = await News.findAll({
            limit: 4
        });
        console.log(news)    
        

        return res.render("home", {"news": news, matchs: matchs});
    },
    saveContact: async (req, res) => {
        const {c_fname, c_lname, c_email, c_phone, c_message} = req.body;
        
        Contact.create({
            nome: c_fname,
            sobrenome: c_lname,
            telefone: c_phone,
            mensagem: c_message,
            emai: c_email,
            created_at: 'now()',
            update_at: 'now()'
        })
        const matchs = await Match.findAll({
            where: {
                fk_resultado: {
                    [Op.not]: null
                }
            },
            include: ['resultado', 'clube_casa', 'clube_visitante'],
            //order:['data_partida','DESC'], 
            limit: 4
        });

        //console.log(matchs[0].resultado);
        
        
        const news = await News.findAll({
            limit: 4
        });

        res.render('home',  {"news": news, matchs: matchs})
       

    }
};

module.exports = HomeController;