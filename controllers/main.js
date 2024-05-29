const User = require('../models/users')
const pool = require('../config/db')

//Route         /
//Method        GET
// Description  Get main page
const getMainPage = async (req, res) => {
    try {
        const users = await pool.query('SELECT * FROM user_info')
        console.log(users.rows);
        res.render('main', {
            title:'Users',
            users: users.rows
        })
    }catch (error) {
        console.log(error);
    }
}

//Route         /:uid
//Method        GET
// Description  Get user page by uid
const getUserPageByUid = (req, res) => {
    const user = User.findByUid(req.params.uid)
    res.render('user-page', {
        title: user.username,
        user
    })
}

module.exports = {
    getMainPage,
    getUserPageByUid
}