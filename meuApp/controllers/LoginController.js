const Sequelize = require('sequelize');
const config = require('../config/database')
const { Profile, Recruiter } = require('../models');
const { use } = require('../routes');

const LoginController = {
    index: (req, res) => {
        res.render('login')
    },
    signIn: async (req, res) => {
        if (!req.session.user) {

            try {
                let { email, password } = req.body;

                let user = null;

                let userProfile = await Profile.findOne(
                    {
                        where: {
                            email: email,
                            senha: password
                        }
                    }
                )

                if (userProfile) {
                    if (userProfile.id_perfil == 1) {
                        let recruiter = await Recruiter.findOne({
                            include: {
                                model: Profile,
                                as: 'perfil',
                                required: true,
                            },
                        })

                        console.log(recruiter)
                        user = { name: recruiter.nome, email: userProfile.email }


                    } else if (userProfile.id_perfil == 2) {

                    }



                } else {
                    res.redirect('login', );
                }

                console.log(userProfile.email)



                req.session.user = user;
            } catch (error) {

            }
        }
        res.render('admintable', { user: req.session.user })
    },
    signOut: (req, res) => {
        req.session.destroy();
        res.redirect('login');  
    }
}

module.exports = LoginController;