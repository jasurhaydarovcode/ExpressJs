const express = require('express');
const router = express.Router();

router.get('/add-users', (req, res) => {
    res.send(`
        <form action="/users" method="POST">
            <input type="text" name="username">
            <input type="number" name="age">
            <button type="submit">Send</button>
        </form>
    `) 
})

router.get('/delete-users', (req, res) => {
    res.send(`
        <h1>Delete Users</h1>
    `) 
})

router.post('users', (req, res) => {
    console.log(req.body);
    res.redirect('/');
})

module.exports = router;