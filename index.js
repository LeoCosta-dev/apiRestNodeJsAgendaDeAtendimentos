// Chamo o aquivo de configuração atribuindo ele como valor de uma constante;
const customExpress = require("./config/customExpress");
// executo o arquivo de configuração dentro da constante app.
const app = customExpress()
//importar conexão com banco de dados.
const conexao = require("./infraestrutura/conexao");
//importanto a class tabelas para criação da mesma.
const tabelas = require("./infraestrutura/tabelas")
// fazendo a conexão com o callback de resposta.
const porta = process.env.PORT || 3000
conexao.connect((erro) => {
    if (erro) {
        console.log(erro)
    } else {
        console.log('conectado com sucesso')
        tabelas.init(conexao)
        // crio um evento de escuta para a porta onde irei levantar meu servidor e uma callback para as ações dessa escuta.
        app.listen(porta, () => {
            return console.log(`servidor rodando na porta ${porta}`);
        })
    }
})


