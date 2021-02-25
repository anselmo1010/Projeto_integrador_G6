const LoginController = {
    index: (req, res) =>{
        res.render('login')
    },
    admin: (req, res) =>{
        res.render('admin-page')
    }
}

module.exports = LoginController;