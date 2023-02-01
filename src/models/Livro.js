import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
    {
        id: {type: String},
        titulo: {type: String, required: true},
        autor: {type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: true},
        editora: {type: String, required: true},
        numeroPaginas: {type: Number}
    }
        
)

const livros = mongoose.model('livros', livroSchema);

export default livros;

/*Esse código importa o módulo "mongoose". Em seguida, 
define um novo schema para livros, que inclui cinco campos: 
"id", "titulo", "autor", "editora", e "numeroPaginas". 
O campo "titulo", "autor", e "editora" são definidos como obrigatórios. 
O campo "autor" é definido como um tipo de objeto com o tipo de ID do MongoDB 
e usa o atributo "ref" para fazer referência ao modelo "autores". 
Depois, um novo modelo de livros é criado com base no schema "livroSchema" 
usando o método "mongoose.model()". 
Finalmente, o modelo é exportado como um módulo padrão.*/