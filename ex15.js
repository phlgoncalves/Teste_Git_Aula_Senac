const prompt = require('prompt-sync')()

function media(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3
}

var resultado = media(10, 8, 7)

console.log(resultado);