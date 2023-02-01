import  express  from "express";
import db from "./config/dbConnect.js"
import routes from "./routes/index.js"

db.on("error", console.log.bind(console, "Erro de conexão"))
db.once("open", () => {
    console.log('conexão com o banco feita com sucesso')
})

const app = express();

app.use(express.json())

routes(app);

export default app

/*Este código é escrito em JavaScript e configura uma aplicação web usando o framework Express. 
Aqui está uma explicação detalhada das principais partes deste código:

import express from "express";: Esta linha importa o framework Express, que fornece uma série
de ferramentas para criar aplicações web em Node.js.

import db from "./config/dbConnect.js": Esta linha importa o arquivo dbConnect.js presente no
diretório config. Este arquivo é responsável por conectar o aplicativo ao banco de dados.

import routes from "./routes/index.js": Esta linha importa o arquivo index.js presente no 
diretório routes. Este arquivo define as rotas da aplicação web.

db.on("error", console.log.bind(console, "Erro de conexão")): Aqui, 
um manipulador de eventos é registrado na conexão com o banco de dados. 
Se ocorrer um erro de conexão, uma mensagem de erro será exibida no console.

db.once("open", () => { ... });: Aqui, outro manipulador de eventos é registrado na conexão
com o banco de dados. Se a conexão for bem-sucedida, a mensagem 
"conexão com o banco feita com sucesso" será exibida no console.

const app = express();: Aqui, uma constante chamada app é inicializada com o 
objeto retornado pela função express(). Este objeto é usado para configurar a aplicação web.

app.use(express.json()): Aqui, o método use é chamado no objeto app e registra um middleware 
para processar as requisições HTTP com o corpo em formato JSON.

routes(app);: Aqui, a função routes é chamada com o objeto app como argumento. 
Isso configura as rotas da aplicação web.

export default app: Finalmente, o objeto app é exportado como o módulo padrão. 
Isso significa que ele pode ser importado por outros arquivos do aplicativo.

Em resumo, este código configura uma aplicação web usando o framework Express e define 
as rotas da aplicação, bem como a conexão com o banco de dados.*/
