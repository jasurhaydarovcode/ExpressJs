const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// All Route Request Log
app.use('/', (req, res, next) => {
    next(); 
})

// Users Page Request 
app.use('/add-users', (req, res, next) => {
    res.send(`
        <form action="/users" method="POST">
            <input type="text" name="username">
            <input type="number" name="age">
            <button type="submit">Send</button>
        </form>
    `); 
});

app.use('/users', (req, res, next) => {
    console.log(req.body.username);
    res.redirect('/');
});

// Home Page Request 
app.use('/', (req, res, next) => {
    res.send(`<h1>Home Page</h1>`);
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('https://localhost:3000 \nServer is running on port 3000');
});