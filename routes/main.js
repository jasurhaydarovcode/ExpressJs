const { Router } = require('express');
const router = Router();
const path = require('path');

const users = require('./users');

router.get('/', (req, res) => {
    console.log(users.users);
    res.sendFile(path.join(__dirname, '..', 'views', 'main.html'));
})

module.exports = router;