const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

const userRouts = require('./routes/users');
const mainRouts = require('./routes/main');

app.use('/users', userRouts);
app.use(mainRouts);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('https://localhost:3000 \nServer is running on port 3000');
});