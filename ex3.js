const prompt = require('prompt-sync')()

var num = Number(prompt('Digite um número para realizar o calculo: '))

for (let i = 1; i < 10; i++) {
    // var resultado = i * num
    // console.log(i, 'x', num, '=', resultado);
    console.log(`${i} x ${num} = ${i * num}`);
}


