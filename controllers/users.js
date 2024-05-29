const User = require('../models/users');
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
const addNewUser = (req, res) => {
    const uid = uuid.v4()
    const users = new User(uid, req.body.username, req.body.age)
    users.save()
    res.redirect('/')
}

module.exports = {
    getAddUsersPage,
    addNewUser,
}