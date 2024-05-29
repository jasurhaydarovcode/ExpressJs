const users = []

module.exports = class User {
    constructor(username, age) {
        this.username = username;
        this.age = age;
    }

    save(){
        users.push({ username: this.username, age: this.age });
    }

    static findAll(){
        return users;
    }
}