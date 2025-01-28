const prompt = require('prompt-sync')()

function ehpar(n) {
    // if (n%2 === 0) {
    //     return true
    // } else {
    //     return false
    // }
    return n % 2 == 0
}

var n1 = Number(prompt(`Digite aqui o número 1: `))
var n2 = Number(prompt(`Digite aqui o número 2: `))
var resultado1 = ehpar(n1)
var resultado2 = ehpar(n2)
console.log(resultado1);
console.log(resultado2); 
