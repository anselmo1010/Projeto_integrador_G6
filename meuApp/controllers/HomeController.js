const {News, Contact} = require("../models");

const HomeController = {
    index:  async (req, res, next) => {   
        const news = await News.findAll();
        console.log(news)    


        return res.render("home", {"news": news});
    },
    saveContact: (req, res) => {
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
        console.log('Contato salvo com sucesso')

        res.render('home')
       

    }
};

module.exports = HomeController;