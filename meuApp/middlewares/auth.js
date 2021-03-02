function auth(req, res, next){

    console.log("Chamou auth")
    if(typeof(req.session.user) != 'undefined'){
        return next()
    }else{
        return res.render('login');
    }
}

module.exports = auth;