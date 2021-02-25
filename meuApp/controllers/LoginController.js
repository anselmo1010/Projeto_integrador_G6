const LoginController = {
    index: (req, res) =>{
        res.render('login')
    },
    sigin: (req, res) =>{
        res.render('admin-page')
    }
}

module.exports = LoginController;