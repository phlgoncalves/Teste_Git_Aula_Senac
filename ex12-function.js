const prompt = require('prompt-sync')()

function saudar(nome) {
    console.log(`Olá ${nome}`);
}

saudar('Pedro')

function somar(n1, n2) {
    return n1 + n2
}

var n1 = Number(prompt(`Digite aqui o número 1: `))
var n2 = Number(prompt(`Digite aqui o número 2: `))
var resultado = somar(n1, n2)
console.log(resultado);