const express = require("express")
const Route = express.Router()

const Home = require("../controller/HomeController/home")

///rotas home
Route.get('/',Home.home)
Route.post('/',Home.CadastrarUsuario)
/////////////

Route.get('/dados',Home.dados)
Route.post('/delete', Home.DeletarUsuario)

module.exports = Route