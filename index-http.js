const http = require('http')
//onde se devine a resposta q o servidor vai mandar
const server = http.createServer((req, res) => {
    
    res.end('<h1>Atendendo a requisicao</h1>')


})


//ouvinte para quando o servidor for criado
server.listen(3000,()=>{
    console.log('Servidor rodando na porta 3000')
})