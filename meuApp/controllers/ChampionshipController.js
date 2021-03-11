const {Athlete} = require("../models");
const ChampionshipController = {
   getChampionship: (req, res) => {

    let {championship} = req.body;
    let clubs = []

    let martinsNeto = [{name:"Flamengo", v: 21, e: 8, d: 9},{name:"Internacional", v: 20, e: 10, d: 8}, {name:"Atlético-MG", v: 20, e: 8, d: 10}, {name:"Atlético-MG", v: 20, e: 8, d: 10}, {name:"Atlético-MG", v: 20, e: 8, d: 10}]
    let paulistao = [ {name:"Atlético-MG", v: 20, e: 8, d: 10}, {name:"Atlético-MG", v: 20, e: 8, d: 10}, {name:"Atlético-MG", v: 20, e: 8, d: 10},{name:"Flamengo", v: 21, e: 8, d: 9},{name:"Internacional", v: 20, e: 10, d: 8}]
    let copinha =  [ {name:"Internacional", v: 20, e: 10, d: 8},{name:"Atlético-MG", v: 20, e: 8, d: 10}, {name:"Atlético-MG", v: 20, e: 8, d: 10}, {name:"Atlético-MG", v: 20, e: 8, d: 10},{name:"Flamengo", v: 21, e: 8, d: 9}]

    if(championship == "Martins Neto Cup"){
        clubs = martinsNeto
    }else if(championship == "Paulistão varzea cup"){
        clubs = paulistao;
    }else{
        clubs = copinha
    }
    

    console.log(championship)
    
    res.render('adminobs', { user: req.session.user, "clubs": clubs })
   }

};

module.exports = ChampionshipController;

