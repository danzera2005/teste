const myqsl = require("mysql2")


const conn = myqsl.createConnection({
    host:"db4free.net",
    user:"danilo_souza",
    database:"api_web",
    password:"api_web005",
    port:"3306"
})

module.exports = conn