const CadastrarUsuario = require("../../model/CadastrarUsuarios")

module.exports.home = (req,res) =>{
    res.send("ola povo")
}

module.exports.CadastrarUsuario = (req,res) =>{

    const valores = new CadastrarUsuario()
    
    let dados = {
        nome:req.query.nome,
        email:req.query.email,
        senha:req.query.senha
    }

    valores.CadUser(dados)

}