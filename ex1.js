const prompt = require('prompt-sync')()

var metros = Number(prompt('Digite aqui o número de m: '))

var convertido = metros / 1000

console.log('A conversão é', convertido, 'km');