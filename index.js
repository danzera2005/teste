const express = require("express")
const app = express()
const port = 3000


app.listen(port,(err)=>{
    if(err) throw err;
    console.log(`Servidor rodando na porta ${port}`)
})

app.get('/',(req,res)=>{
    res.send("ola")
})