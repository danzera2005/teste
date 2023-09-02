const express = require("express")
const app = express()
const Route = require("./src/Router")
const conn = require("./config/conexao")

app.use(Route)
app.listen(process.env.PORT || 3000)

conn.connect((err) =>{
    if(err) throw err;
    console.log("banco de dados conectado")
})