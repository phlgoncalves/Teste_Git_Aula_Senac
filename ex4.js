const prompt = require('prompt-sync')()

var ano = Number(prompt('Digite o ano aqui: '))


if (ano %4 == 0) {
    if (ano%100 == 0) {
        if (ano%400 == 0) {
            console.log(`O ano ${ano} é bissexto`);
        }else{
            console.log(`O ano ${ano} não é bissexto`);
        }
    } else {
        console.log(`O ano ${ano} é bissexto`);
    }

} else {
    console.log(`O ${ano} não é bissexto`);
}