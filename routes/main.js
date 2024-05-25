const { Router } = require('express');
const router = Router();
const path = require('path');

const { users } = require('./users');

router.get('/', (req, res) => {
    res.render('main', {
        title:'User List',
        users 
    })
})

module.exports = router;