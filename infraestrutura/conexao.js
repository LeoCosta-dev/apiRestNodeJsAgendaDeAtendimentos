//importação do mysql
require('dotenv').config

const mysql = require('mysql2');
//configuração da conexão do mysql
const conexao = mysql.createConnection({
    host: HOSTNAME_BD,
    port: 3306,
    user: LOGIN_BD,
    password: SENHA_BD,
    database: BANCO_DE_DADOS
});

// exportar conexão.
module.exports = conexao;