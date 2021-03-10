const Sequelize = require('sequelize');
const config = require('../config/database')
const { Profile, Recruiter, Athlete } = require('../models');
const { use } = require('../routes');

const LoginController = {
    index: (req, res) => {
        res.render('login')
    },
    signUpAthlete: async (req, res) => {
      let {a_fname, a_lname, a_nationaly, a_dt_nasc, a_email, a_pass, a_phone, a_pedominante, posicao, a_outrasposicoes, a_peso, a_altura} = req.body;

      const profile = await Profile.create({
          email: a_email,
          senha: a_pass,
          tipo: 1
      })

      Athlete.create(
          {
              nome: a_fname,
              sobrenome: a_lname,
              nacionalidade: a_nationaly,
              data_nascimento: '1997-01-03',
              telefone: a_phone,
              pe_dominante: a_pedominante,
              posicao: posicao,
              outras_posicoes: a_outrasposicoes,
              peso: a_peso,
              altura: a_altura,
              fk_perfil: profile.id_perfil

          }
      )



      return res.render('login', {createAthlete: true});
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
    },
    admin: (req, res) => {
        res.render('adminobs', { user: req.session.user })
    }
}

module.exports = LoginController;