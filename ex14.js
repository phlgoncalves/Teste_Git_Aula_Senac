const prompt = require('prompt-sync')()

function quadrado(n) {
    return n * n
}


var n1 = Number(prompt(`Digite aqui um número: `))

var resultado = quadrado(n1)

console.log(resultado);