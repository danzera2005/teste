const CadastrarUsuario = require("../../model/Usuarios")
const valores = new CadastrarUsuario()

module.exports.home = (req,res) =>{
    const dados = valores.VerUsuario()

    async function minhaFuncao() {
        try {
          const resultados = await dados; // Espera pelos dados
          res.send(resultados) // Faça algo com os dados obtidos
        } catch (err) {
          console.error(err); // Lida com erros, se houver
        }
      }
      
      minhaFuncao()
}

module.exports.CadastrarUsuario = (req,res) =>{

    let dados = {
        nome:req.query.nome,
        email:req.query.email,
        senha:req.query.senha
    }

    valores.CadUser(dados)
    res.send("STATUS 200")
}


module.exports.dados = (req,res) =>{
    res.send("aqui ficam os dados")
}

module.exports.DeletarUsuario = (req,res) =>{

    const dados = {
        id: req.query.id
    }

    valores.Deletar(dados)
    res.send("STATUS 200")
}