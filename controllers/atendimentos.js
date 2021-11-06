// Exporto os métodos get e post como módulo para ser usado em arquivo separado deste, atribuindo como valor a ele uma callback onde app é parametro.
// Defino os métodos get e post da aplicação, passando como parametros a rota e a callback para a ação.
// Como parametros da callback passar a requisição e a resposta.
const Atendimento = require('../models/atendimentos');
module.exports = (app) =>{
    app.get('/atendimentos', (req, res) =>{
        return Atendimento.lista(res);
    } )
    app.get('/atendimentos/:id', (req, res) =>{
        const id = parseInt(res.params.id);
        Atendimento.buscarPorId(id,res);
    })
    app.get('/atendimentos/:cliente', (req, res) =>{
        const nomeDoCliente = res.params.cliente;
        Atendimento.buscaPorNomeDoCliente(nomeDoCliente, res)
    })
    app.post('/atendimentos', (req, res) =>{
        const atendimento = req.body;

        Atendimento.adiciona(atendimento, res);
        ;
    })
    app.patch('/atendimentos/:id', (req, res) =>{
        const id = parseInt(req.params.id)
        const valores = req.body

        Atendimento.altera(id, valores, res)
    })
    app.delete('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Atendimento.deleta(id,res)
    })
}






/* Glossário:

rota é o caminho que colocamos na url após o domínio.

*/