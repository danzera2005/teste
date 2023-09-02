const conn = require("../config/conexao")


class CadastrarUsuarios{


    CadUser(object){

        const sql = "INSERT INTO usuarios (nome,email,senha) VALUES (?,?,?)"
        const url = "localhost:3000"

        const data = {
            mensagem: 'Olá, isso é um alerta!',
          };

        const values = [
            object.nome,
            object.email,
            object.senha
        ]

        conn.query(sql,values,(err)=>{
            if(err){
                if(err.code == "ER_DUP_ENTRY"){
                    console.log("este email ja esta cadastrado")
                }
            }else{
                console.log("cadastrou")
            }
        })
    }

}

module.exports = CadastrarUsuarios