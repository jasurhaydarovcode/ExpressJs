const User = require('../models/users')

//Route         /
//Method        GET
// Description  Get main page
const getMainPage = (req, res) => {
    const users = User.findAll()
    res.render('main', {
        title:'User List',
        users
    })
}

module.exports = {
    getMainPage
}