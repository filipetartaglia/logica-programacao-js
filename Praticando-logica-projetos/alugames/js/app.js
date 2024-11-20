function alterarStatus(id) {
    let jg = document.getElementById(`game-${id}`);
    let imagem = jg.querySelector('.dashboard__item__img');
    let botao = jg.querySelector('.dashboard__item__button');
    let nomeJogo = jg.querySelector('.dashboard__item__name');

    if(imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.textContent = 'Alugar';
        botao.classList.remove('dashboard__item__button--return');
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
    }

}