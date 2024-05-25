const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

const userRouts = require('./routes/users');
const mainRouts = require('./routes/main');

app.use('/users', userRouts);
app.use(mainRouts);

app.use((req, res, next) => {
    res.status(404).send(`
        <head>
            <title>404 Page Not Found</title>
            <style>
                body {
                    background-color: #000;
                    color: #fff;
                    font-family: Arial, Helvetica, sans-serif;

                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 90vh;
                }
            </style>
        </head>
        <body>
            <h1>404 Page not found</h1>
        </body>
    `)
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('https://localhost:3000 \nServer is running on port 3000');
});