const express = require('express');
const router = express.Router();
const { getAddUsersPage, addNewUser } = require('../controllers/users');

router.get('/add-users', getAddUsersPage)


router.post('/users', addNewUser)

exports.router = router;