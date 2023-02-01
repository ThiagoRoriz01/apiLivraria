import livros from "../models/Livro.js";

class LivroController {

    static listarLivros = (req, res) => {
        livros.find()
        .populate('autor')
        .exec((err, livros) => {
          res.status(200).json(livros)
          }) 
        }

        static listarLivroPorId = (req, res) => {
          const id = req.params.id;

          livros.findById(id) 
            .populate('autor', 'nome')
          .exec((err, livros) => {
            if(err) {
              res.status(400).send({message: `${err.message} - Id do livro não localizado`})
            } else {
              res.status(200).send(livros);
            }
          })
        }
        static cadastrarLivro = (req, res) => {
          let livro = new livros(req.body);

          livro.save((err) => {

            if(err) {
              res.status(500).send({message: `${err.message} - falha ao cadastrar livro.`})
            } else {
              res.status(201).send(livro.toJSON())
            }
          })
        }

        static atualizarLivro = (req, res) => {
          const id = req.params.id;

          livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
              res.status(200).send({message: 'Livro atualizado com sucesso'})
            } else {
              res.status(500).send({message: err.message})
            }
          })
        }

        static excluirLivro = (req, res) => {
          const id = req.params.id;

          livros.findByIdAndDelete(id, (err) => {
            if(!err){
              res.status(200).send({message: 'Livro removido com sucesso'})
            } else {
              res.status(500).send({message: err.message})
            }
          })
        }

        static listarLivroPorEditora = (req, res) => {
          const editora = req.query.editora

          livros.find({'editora': editora}, {}, (err, livros) => {
            res.status(200).send(livros);
          })
        }
    }
export default LivroController 

/*Este é um código de um controlador de livros em uma aplicação Node.js 
utilizando o framework Express. 
Ele importa o modelo de livros e define uma classe chamada "LivroController".

Esta classe possui vários métodos estáticos, cada um com uma funcionalidade diferente:

listarLivros: Lista todos os livros do banco de dados populando também o autor de cada livro.
listarLivroPorId: Lista um livro específico por ID, também populando o autor.
cadastrarLivro: Cria um novo livro a partir dos dados fornecidos na requisição.
atualizarLivro: Atualiza um livro existente pelo seu ID com os dados fornecidos na requisição.
excluirLivro: Exclui um livro existente pelo seu ID.
listarLivroPorEditora: Lista os livros que possuem uma determinada editora especificada 
como parâmetro na requisição.
Todos esses métodos retornam uma resposta para a requisição HTTP com o status HTTP adequado 
e a informação relevante.

Finalmente, a classe é exportada para ser usada em outras partes da aplicação.


Uma classe com métodos estáticos é uma classe em que os métodos não precisam ser 
instanciados
para serem acessados. Eles são acessados diretamente a partir do nome da classe. 
Os métodos estáticos são úteis quando você deseja criar métodos que não precisem 
ser associados a uma instância da classe e que não tenham acesso aos dados de 
instância da classe. Em outras palavras, eles são acessados diretamente na classe, 
sem precisar criar uma instância da classe.


Populate é um recurso do Mongoose que permite preencher dados de outros documentos
a partir de referências. 
É como se fosse uma espécie de "junta" entre dois ou mais documentos em uma coleção 
no MongoDB, permitindo recuperar dados relacionados sem a necessidade de 
múltiplas consultas ou armazenamento duplicado de dados. 
É uma maneira eficiente de consultar e exibir dados relacionados em aplicações 
baseadas em documentos.*/