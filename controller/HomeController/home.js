module.exports.home = (req,res) =>{
    res.send("ola povo")
}

module.exports.CadastrarUsuario = (req,res) =>{
    console.log(req.body)
}