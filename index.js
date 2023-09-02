const express = require("express")
const app = express()
const Route = require("./src/Router")


app.use(Route)
app.listen(process.env.PORT || 3000)

