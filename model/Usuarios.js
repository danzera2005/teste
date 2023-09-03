const conn = require("../config/conexao")


class Usuarios{


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

    Deletar(object){

        const values = [
            object.id
        ]

        console.log(values)
    }

    VerUsuario(){
       
            return new Promise((resolve, reject) => {
              const sql = "SELECT * FROM usuarios";
          
              conn.query(sql, (err, result, fields) => {
                if (err) {
                  reject(err); // Rejeita a Promise em caso de erro
                } else {
                  resolve(result); // Resolve a Promise com os dados obtidos
                }
              });
            });
          
          
    }

}

module.exports = Usuarios