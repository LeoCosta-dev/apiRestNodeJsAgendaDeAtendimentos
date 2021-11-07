# Desenvolvimento de uma api do tipo Rest em node js utilizando a framework express.

## Descrição da aplicação:
A aplicação é um ambiente back-end que gerencia e automatiza uma agenda de atendimentos, para qualquer tipo de serviço. Para isso foi utilizado o banco de dados relacional MySQL, onde o exemplo para as variaveis de ambiente que definem a conexão se encontra <a href = 'https://github.com/LeoCosta-dev/apiRestNodeJsAgendaDeAtendimentos/blob/master/.env.exemplo'>aqui</a>, foi utilizado o padrão do tipo REST e como organização conceitos de MVC.

## Ferramentas utilizadas:
Para o desenvolvimento como já mencionado foi utilizado JavaScript com NodeJS como linguagem da aplicação e o Express como framework, além do banco de dados relacional MySQL hospedado pela ferramenta de cloud Heroku.

## Dependencias necessárias:
```js
"dependencies": {
    "consign": "^0.1.6",
    "express": "^4.17.1",
    "moment": "^2.29.1",
    "mysql2": "^2.3.2"
}
```
As dependencias podem ser encontradas <a href = 'https://github.com/LeoCosta-dev/apiRestNodeJsAgendaDeAtendimentos/blob/master/package.json'>neste arquivo</a> do qual o trecho acima foi extraído para instalar basta rodar o comando abaixo selecionando e copiando o mesmo com as teclas "Ctrl + c" e em seguida colar no terminal com as telas "Ctrl + Shift + v" o comando abaixo já irá fazer o clone deste repositório e instalar as dependencias necessárias.

```
git clone https://github.com/LeoCosta-dev/apiRestNodeJsAgendaDeAtendimentos.git && cd apiRestNodeJsAgendaDeAtendimentos && npm install consign && npm install express && npm install moment && npm install mysql2
```
## Dependencias de desenvolvimento:
```js
"devDependencies": {
    "dotenv": "^10.0.0",
    "nodemon": "^2.0.14"
  }
```
Em outra parte do <a href = 'https://github.com/LeoCosta-dev/apiRestNodeJsAgendaDeAtendimentos/blob/master/package.json'>arquivo</a> de configuração é possível encontrar o código acima que foi extraído do mesmo, essas são as dependencias necessárias para o ambiente de desenvolvimento da aplicação, caso deseje instalar utilize os comandos abaixo em seu terminal logo após o comando das dependencias obrigatórias.

```
npm install dotenv && npm install nodemon
```
## Observações importantes:

A versão NodeJs utilizada para desenvolvimento é a 14.x LTS, logo é necessário intalação de versão igual ou superior para a perfeita execução da mesma.