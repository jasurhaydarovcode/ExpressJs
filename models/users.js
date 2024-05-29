const fs = require('fs');
const path = require('path');

const pathToFile = path.join(__dirname, '../data/users.json')


module.exports = class User {
    constructor(username, age) {
        this.username = username;
        this.age = age;
    }

    save(){
        let users = []
        fs.readFile(pathToFile, 'utf8', (err, data) => {
            if(err) throw err;
            users = JSON.parse(data);
            users.push({ username: this.username, age: this.age });

            fs.writeFile(pathToFile, JSON.stringify(users), (err) => {
                if(err) throw err;
            });
        })
    }

    static findAll(){
        const data = () => fs.readFileSync(pathToFile, 'utf8')
        return JSON.parse(data())
    }
}