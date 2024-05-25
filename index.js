const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

const userRouts = require('./routes/users');
const mainRouts = require('./routes/main');

app.use('/users', userRouts);
app.use(mainRouts);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('https://localhost:3000 \nServer is running on port 3000');
});