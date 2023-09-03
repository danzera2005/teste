const express = require("express")
const app = express()
const Route = require("./src/Router")
const conn = require("./config/conexao")
const cors = require("cors")
const session = require("express-session")
const fileupload = require("express-fileupload")
const fs = require("fs")
const path = require("path")


app.use(Route)
app.listen(process.env.PORT || 5000)

app.use(session({secret: 'jjokockokxzokxkpczxpkpkpdadsdafsadsdsdafasfsffadvadd'}))
app.use(express.json())
app.use(fileupload({
    useTempFiles:true,
    tempFileDir: path.join(__dirname, 'temp')
}))
app.use(cors({
    origin: "http://localhost:3000",
}))
express.urlencoded()


conn.connect((err) =>{
    if(err) throw err;
    console.log("banco de dados conectado")
})

