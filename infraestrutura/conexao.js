require('dotenv').config()
//importação do mysql
const mysql = require('mysql2');
//configuração da conexão do mysql
const conexao = mysql.createConnection({
    host: process.env.HOSTNAME_BD,
    port: 3306,
    user: process.env.LOGIN_BD,
    password: process.env.SENHA_BD,
    database: process.env.BANCO_DE_DADOS
});

// exportar conexão.
module.exports = conexao;