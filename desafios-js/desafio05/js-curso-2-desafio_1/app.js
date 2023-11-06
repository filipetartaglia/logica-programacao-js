let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio!';

function botaoConsole() {
    console.log('O botão foi clicado!');
}

function botaoAlert() {
    alert('Eu amo JS!');
}

function botaoPrompt() {
    let cidadeDoBrasil = prompt('Diga o nome de uma cidade do Brasil:');
    alert(`Estive em ${cidadeDoBrasil} e lembrei de você!`);
}

function botaoSoma() {
    let numero1 = parseInt(prompt('Escolha um número:'));
    let numero2 = parseInt(prompt('Escolha outro número:'));
    let resultado = numero1 + numero2;
    alert(`A soma dos números ${numero1} e ${numero2} é igual a: ${resultado}`);
}

