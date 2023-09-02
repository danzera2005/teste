const express = require("express")
const Route = express.Router()

const Home = require("../controller/HomeController/home")


Route.get('/',Home.home)


module.exports = Route