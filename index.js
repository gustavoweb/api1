const express = require('express')//chama a dependencia express
const server = express()//cria o servidor usando o express
const carros = require('./src/cars.json')//atribui o arquivo cars.json na constante carros

//chamada do servidor sem parametro localhost:5000
server.get('/', (req,res) => {
    return res.json({mensagem: 'API OK'})//irá retornar esta mensagem no formato json
})

//configura a chama do servidor na porta 5000
server.listen(5000, () => {
    console.log('Servidor OK na Porta 5000')//exibe no console a mensagem
})

//chama o servidor na rota /carros e exibe o cars.json
server.get('/carros', (req,res) => {
    return res.json(carros)//exibe o cars.json
})
