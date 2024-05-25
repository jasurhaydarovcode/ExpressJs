const express = require('express');

const app = express();

// All Route Request Log
app.use('/', (req, res, next) => {
    console.log('This forever run');
    next(); 
})

// Users Page Request 
app.use('/users', (req, res, next) => {
    res.send(`<p>Users List</p>`);
})

// Home Page Request 
app.use('/', (req, res, next) => {
    res.send(`<h1>Home Page</h1>`);
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('https://localhost:3000 \nServer is running on port 3000');
});