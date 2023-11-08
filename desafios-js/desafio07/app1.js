let alturaDaPessoa = prompt('Qual a sua altura em metros?');
let pesoDaPessoa = prompt('Qual o seu peso em kg?');

function calculadoraIMC(alturaMetros, peso) {
    return parseInt(peso / (alturaMetros * alturaMetros));
}

console.log(calculadoraIMC(alturaDaPessoa, pesoDaPessoa));