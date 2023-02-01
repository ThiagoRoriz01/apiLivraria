import mongoose from "mongoose";

mongoose.connect("mongodb+srv://alura:123@alura.dqcv5mc.mongodb.net/");

let db = mongoose.connection;

export default db;

/*Esse código importa o módulo "mongoose" e o usa para se conectar
a um banco de dados MongoDB remoto usando a string de conexão 
"mongodb+srv://alura:123@alura.dqcv5mc.mongodb.net/". Depois, 
uma variável "db" é definida como a conexão do mongoose. 
Finalmente, a conexão é exportada como um módulo padrão.*/