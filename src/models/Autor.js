import mongoose from "mongoose";

const autorSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        nacionalidade: {type: String}
    },
    {
        versionKey: false
    }
)

const autores = mongoose.model("autores", autorSchema)

export default autores;

/*Esse código importa o módulo "mongoose". Em seguida, 
define um novo schema para os autores, que inclui três campos: 
"id", "nome", e "nacionalidade". O campo "nome" é definido como obrigatório. 
A opção "versionKey: false" é definida para desabilitar o controle de versão 
do MongoDB para esse modelo. Depois, um novo modelo de autores é criado 
com base no schema "autorSchema" usando o método "mongoose.model()". 
Finalmente, o modelo é exportado como um módulo padrão.*/
    
