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
        const newUser = new User(req.body.username, req.body.age)
        await newUser.save()
        res.redirect('/')
    } catch (err) {
        console.log(err);
    }
}

//Route         /users/edit/:id
//Method        GET
// Description  edit user
const updateUserPage = async (req, res) => {
    try {
        const user = await pool.query('SELECT * FROM user_info WHERE id = $1', [req.params.id])
        res.render('edit-user', {
            title: 'Edit page',
            user: user.rows[0]
        })
    } catch (err) {
        console.log(err);
    }
}

//Route         /users/edit/:id
//Method        POST
// Description  edit user
const updateUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id, req.body.username, req.body.age)
        res.redirect('/')
    } catch (err) {
        console.log(err);
    }
}

//Route         /users/delete/:id
//Method        POST
// Description  delete user
const deleteUser = async (req, res) => {
    try {
        await User.findByIdAndRemove(req.params.id)
        res.redirect('/')
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getAddUsersPage,
    addNewUser,
    updateUserPage,
    updateUser,
    deleteUser
}