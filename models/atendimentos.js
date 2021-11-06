const moment = require("moment");
const conexao = require('../infraestrutura/conexao');

class Atendimento {
    adiciona(atendimento, res) {
        const dataCriacao = new Date();
        const data = moment(atendimento.data, "DD/MM/YYYY").format("YYYY-MM-DD HH:MM:SS")

        const validaData = moment(data).isSameOrAfter(dataCriacao);
        const validaNome = atendimento.cliente.length >= 5;

        const validacoes = [
            {
                nome: "data",
                valido: validaData,
                menssagem: "Data inferior ao dia atual."
            },
            {
                nome: cliente,
                valido: validaNome,
                menssagem: "O nome do cliente deve ter no mínimo 5 caracteres."
            }
        ];
        const erros = validacoes.filter((campo) => {!campo.valido});
        const numeroDeErros = erros.length;

        if(numeroDeErros){
            res.status(400).json(erros)
        } else {
            const atendimentoDatado = {...atendimento, dataCriacao, data}
            const sql = 'INSERT INTO Atendimentos SET ?'
    
            conexao.query(sql, atendimentoDatado, (erro, resultados) => {
                if(erro) {
                    res.status(400).json(erro)
                } else {
                    res.status(201).json(atendimento)
                }
            })
        }
    }
    lista(res){
        const sql = 'SELECT * FROM Atendimentos'

        conexao.query(sql, (erro, resutados) => {
            if(erro){
                res.status(400).json(erro);
            } else {
                res.status(200).json(resutados);
            }
        });
    }
    buscaPorId(id, res){
        const sql = `SELECT * FROM Atendimentos WHERE id = ${id}`

        conexao.query(sql, (erro, resultado) => {
            if(erro){
                res.status(400).json(erro);
            } else {
                res.status(200).json(resultado[0])
            }
        })
    }
    buscaPorId(nomeDoCliente, res){
        const sql = `SELECT * FROM Atendimentos WHERE id = ${nomeDoCliente}`

        conexao.query(sql, (erro, resultado) => {
            if(erro){
                res.status(400).json(erro);
            } else {
                res.status(200).json(resultado[0])
            }
        })
    }
    altera(id, valores, res){
        if(valores.data){
            valores.data = moment(valores.data, "DD/MM/YYYY").format("YYYY-MM-DD HH:MM:SS")
        }
        const sql = "UPDATE Atendimentos SET ? WHERE id = ?"

        conexao.query(sql, [valores, id], (erro, resutados) => {
            if (erro){
                res.status(400).json(erro)
            } else {
                res.status(200).json({...valores, id})
            }
        })
    }
    deleta(id, res){
        const sql = 'DELETE FROM Atendimentos WHERE id = ?'

        conexao.query(sql, id, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            } else {
                res.status(200).json({id})
            }
        })
    }
        }

module.exports = new Atendimento