const mysql = require('mysql')

const conexao = mysql.createConnection
({
    host: '3.93.17.18',
    port:3306,
    user: 'gusta',
    password: 'bcd127',
    database: 'brabank'
})

module.exports = conexao