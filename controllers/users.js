const User = require('../models/users');
const pool = require('../config/db')
const uuid = require('uuid');

//Route         /add-users
//Method        GET
// Description  Get add-users page
const getAddUsersPage = (req, res) => {
    res.render('add-users', {
        title: 'Add new user'
    })
}

//Route         /users
//Method        POST
// Description  add new user
const addNewUser = async (req, res) => {
    try {
        const newUser = await pool.query(`
            INSERT INTO user_info (username, age) VALUES ($1, $2)
        `, [req.body.username, req.body.age])
        res.redirect('/')
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getAddUsersPage,
    addNewUser,
}