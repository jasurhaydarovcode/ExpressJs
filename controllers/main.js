const User = require('../models/users')
const pool = require('../config/db')

//Route         /
//Method        GET
// Description  Get main page
const getMainPage = async (req, res) => {
    try {
        const users = await User.findAll()
        res.render('main', {
            title:'Users',
            users: users
        })
    }catch (err) {
        console.log(err);
    }
}

//Route         /:id
//Method        GET
// Description  Get user page by uid
const getUserPageByUid = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.render('user-page', {
            title: user.username,
            user: user
        })
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getMainPage,
    getUserPageByUid
}