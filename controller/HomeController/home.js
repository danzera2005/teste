const CadastrarUsuario = require("../../model/Usuarios")

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


module.exports.dados = (req,res) =>{
    res.send("aqui ficam os dados")
}