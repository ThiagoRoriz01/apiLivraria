import app from './src/app.js'


const port = process.env.PORT || 3000;


app.listen(port, () => {
    console.log(`Servidor escutando em: http://localhost:${port}`)
})

/*Este código é escrito em JavaScript e inicia uma aplicação web. 
Aqui está uma explicação detalhada das principais partes deste código:

import app from './src/app.js': 
Esta linha importa o arquivo app.js presente no diretório src. 
O objeto app neste arquivo é responsável por definir a estrutura da aplicação web.

const port = process.env.PORT || 3000;: Aqui, 
a constante port é inicializada com o valor de uma variável de ambiente chamada PORT. 
Se não houver nenhuma variável de ambiente PORT, o valor padrão será 3000.

app.listen(port, () => { ... });: 
Esta linha inicia o servidor da aplicação. 
O método listen é chamado no objeto app e tem dois argumentos: 
port e uma função de retorno de chamada (também conhecida como uma função anônima). 
A função de retorno de chamada é chamada uma vez que o servidor está escutando 
em um endereço específico. Neste caso, 
o endereço é http://localhost:${port}, onde ${port} é o valor da constante port. 
A mensagem Servidor escutando em: http://localhost:${port} é exibida no console quando 
o servidor é iniciado com sucesso.

Em resumo, este código é responsável por iniciar o servidor da aplicação web, 
que está escutando na porta especificada por port.*/