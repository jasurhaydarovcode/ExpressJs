const express = require('express');
const router = express.Router();
const { 
    getAddUsersPage, 
    addNewUser, 
    updateUserPage, 
    updateUser,
    deleteUser 
} = require('../controllers/users');

router.get('/add-users', getAddUsersPage)
router.get('/edit/:id', updateUserPage)

router.post('/edit/:id', updateUser)
router.post('/delete/:id', deleteUser)
router.post('/users', addNewUser)

exports.router = router;