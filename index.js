const express = require('express');

const app = express();


app.use((req, res, next) => {
    console.log('Middleware 1 is running');
    next() // next is used to move to the next middleware, keyingi middleware ni o'qib ketishi uchun
})

app.use((req, res, next) => {
    console.log('Middleware 2');
    res.send(`<h1><center>Middleware 2 view</center></h1>`);
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('https://localhost:3000 \nServer is running on port 3000');
});