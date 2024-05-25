const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const userRoutes = require('./routes/users');
const mainRoutes = require('./routes/main');

app.use('/users', userRoutes.router);
app.use(mainRoutes);

app.use((req, res, next) => {
    res.status(404).render('404'), { title: '404 Page Not Found' };
})

const PORT = process.env.PORT || 3300;

app.listen(PORT, () => {
    console.log('https://localhost:3300 \nServer is running on port: ' + PORT);
})