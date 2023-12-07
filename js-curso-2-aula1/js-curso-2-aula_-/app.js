let listaNumerosSorteados = [];

function exibirMensagemInicial() {
    exibirTextoNatela('h1', 'Jogo do número secreto');
    exibirTextoNatela('p', 'Escolha um número entre 1 a 10');
}
exibirMensagemInicial();

function gerarNumeroAleatorio() {
    let numeroEscolido = parseInt((Math.random() * 10 + 1));
    let qdtElementosNaLista = listaNumerosSorteados.length;

    if (qdtElementosNaLista == listaNumerosSorteados.length) {
        listaNumerosSorteados = [];
    }
    if (listaNumerosSorteados.includes(numeroEscolido)) {
        return gerarNumeroAleatorio();
    }
    else {
        listaNumerosSorteados.push(numeroEscolido);
        return numeroEscolido;
    }
}
numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNatela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNatela('h1', 'Acertou!!!');
        exibirTextoNatela('p', 'Você descobriu o número secreto!');
        document.getElementById('reiniciar').removeAttribute('disabled');   
        document.getElementById('chutar').setAttribute('disabled', false);
    } else {
        if (chute < numeroSecreto) {
            exibirTextoNatela('p', 'O número secreto é maior!');  
        } else {
            exibirTextoNatela('p', 'O número secreto é menor!');  
        }
        limparCampo();
    }
}

function novoJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true); 
    document.getElementById('chutar').removeAttribute('disabled');  
}

