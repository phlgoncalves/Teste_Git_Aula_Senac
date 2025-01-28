const prompt = require('prompt-sync')()
let senha = prompt('Digite uma senha')

var tamanho = senha.length >= 8
var temNum = /\d/.test(senha)
var temMaiusc = /[A-Z]/.test(senha)
var temMinusc = /[a-z]/.test(senha)
var temCharacter = /[$*&@#]/.test(senha)

if (tamanho && temNum && temMaiusc && temMinusc) {
    console.log(`Senha criada com sucesso! sua senha é ${senha}`);
} else {
    console.log(`Senha fraca!`);
}

if(!tamanho){
    console.log(`Senha curta, digite pel menos 8 caracteres`);
}
if (!temNum) {
    console.log(`Senha deve conter pelo menos 1 número`);
}