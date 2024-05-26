const { users } = require('./users');

//Route         /
//Method        GET
// Description  Get main page
const getMainPage = (req, res) => {
    res.render('main', {
        title:'User List',
        users
    })
}

module.exports = {
    getMainPage
}