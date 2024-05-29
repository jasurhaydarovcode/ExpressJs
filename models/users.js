const pool = require('../config/db');

module.exports = class User {
    constructor(username, age) {
        this.username = username;
        this.age = age;
    }

    async save(){
        await pool.query(`
            INSERT INTO user_info (username, age) VALUES ($1, $2)
        `, [this.username, this.age])
    }

    static async findAll(){
        const users = await pool.query('SELECT * FROM user_info')
        return users.rows
    }
    static async findById(id){
        const user = await pool.query('SELECT * FROM user_info WHERE id = $1', [id])
        return user.rows[0]
    }

    static async findByIdAndDelete(id, username, age){
        await pool.query('UPDATE user_info SET username = $1, age = $2 WHERE id = $3', 
            [username, age, id]
        )
    }

    static async findByIdAndRemove(id){
        await pool.query('DELETE FROM user_info WHERE id = $1', 
            [id]
        )
    }
}