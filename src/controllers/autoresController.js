import autores from "../models/Autor.js";

class AutorController {

    static listarAutores = (req, res) => {
        autores.find((err, autores) => {
          res.status(200).json(autores)
          }) 
        }

        static listarAutorPorId = (req, res) => {
          const id = req.params.id;

          autores.findById(id, (err, autores) => {
            if(err) {
              res.status(400).send({message: `${err.message} - Id do Autor não localizado`})
            } else {
              res.status(200).send(autores);
            }
          })
        }
        static cadastrarAutor = (req, res) => {
          let autor = new autores(req.body);

          autor.save((err) => {

            if(err) {
              res.status(500).send({message: `${err.message} - falha ao cadastrar autor.`})
            } else {
              res.status(201).send(autor.toJSON())
            }
          })
        }

        static atualizarAutor = (req, res) => {
          const id = req.params.id;

          autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
              res.status(200).send({message: 'Autor atualizado com sucesso'})
            } else {
              res.status(500).send({message: err.message})
            }
          })
        }

        static excluirAutor = (req, res) => {
          const id = req.params.id;

          autores.findByIdAndDelete(id, (err) => {
            if(!err){
              res.status(200).send({message: 'Autor removido com sucesso'})
            } else {
              res.status(500).send({message: err.message})
            }
          })
        }
    }
export default AutorController 

/*Este código é um arquivo de controller que gerencia as operações envolvendo autores 
em uma aplicação. Ele importa o modelo de autor a partir do arquivo "../models/Autor.js".

A classe "AutorController" possui métodos estáticos que realizam as seguintes operações:

"listarAutores": retorna uma lista de todos os autores.
"listarAutorPorId": retorna um autor específico com base no id fornecido nos parâmetros
da solicitação.
"cadastrarAutor": salva um novo autor na base de dados.
"atualizarAutor": atualiza os dados de um autor existente.
"excluirAutor": remove um autor existente da base de dados.
A classe é exportada como um módulo padrão para ser usada em outros arquivos.*/