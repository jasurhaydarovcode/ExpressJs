const User = require('../models/users')
const pool = require('../config/db')

//Route         /
//Method        GET
// Description  Get main page
const getMainPage = async (req, res) => {
    try {
        const users = await pool.query('SELECT * FROM user_info')
        res.render('main', {
            title:'Users',
            users: users.rows
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
        const user = await pool.query('SELECT * FROM user_info WHERE id = $1', [req.params.id])
        res.render('user-page', {
            title: user.rows[0].username,
            user: user.rows[0]
        })
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getMainPage,
    getUserPageByUid
}