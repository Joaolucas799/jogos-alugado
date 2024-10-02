let jogosAlugados = 1;

function contarEExibirJogosAlugados() {
    alert (`total de jogos alugados "${jogosAlugados}"`)
    console.log(`total de jogos alugados ${jogosAlugados}`)
}
function devolverJogo(nomeJogo) {
    if (confirm(`Deseja devolver esse jogo "${nomeJogo}"?`)) {
        console.log(`Você confirmou a devolução do jogo "${nomeJogo}".`);
        alert(`Você devolveu o jogo "${nomeJogo}".`);
    } else {
        console.log(`Você cancelou a devolução do jogo "${nomeJogo}".`);
    }
}
function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name').textContent.trim();

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        // Devolver o jogo
        if (confirm(`Deseja devolver esse jogo "${nomeJogo}"?`)) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
            jogosAlugados--;
            console.log(`Você confirmou a devolução do jogo "${nomeJogo}".`);
        } else {
            console.log(`Você cancelou a devolução do jogo "${nomeJogo}".`);
        }
    } else {
        // Alugar o jogo
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        jogosAlugados++;
        console.log(`Você alugou o jogo "${nomeJogo}".`);
    }
    
    contarEExibirJogosAlugados();
}




function essaPalavraEUmPalindromo(palavra) {
    // Remove espaços e transforma em minúsculas para uma comparação insensível a maiúsculas/minúsculas
    var palavraNormalizada = palavra.toLowerCase().replace(/[^a-z0-9]/gi, '');
  
    // Separa as letras da palavra e inverte
    var separandoAsLetrasDaPalavra = palavraNormalizada.split("");
    var palavraInvertida = sepagitrandoAsLetrasDaPalavra.reverse().join("");

    // Compara a palavra original com a palavra invertida
    if (palavraNormalizada === palavraInvertida) {
        console.log("A palavra \"" + palavra + "\" é um palíndromo.");
    } else {
        console.log("A palavra \"" + palavra + "\" não é um palíndromo.");
    }
}

// Teste a função com diferentes palavras
essaPalavraEUmPalindromo("Monopoly");   // Não é um palíndromo
essaPalavraEUmPalindromo("Ticket to Ride"); // Não é um palíndromo
essaPalavraEUmPalindromo("Takenoko");   // É um p
