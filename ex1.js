const prompt = require('prompt-sync')()

var metros = Number(prompt('Digite aqui o número de m: '))
prompt('Testando Merge de Branchs')

var convertido = metros / 1000

console.log('A conversão é', convertido, 'km');

console.log(`teste main!`);

console.log(`Testando Pedro`);
