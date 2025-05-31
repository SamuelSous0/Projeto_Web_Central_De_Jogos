const tabuleiro = document.getElementById('tabuleiro');
const jogadorSpan = document.getElementById('jogador');
const resultado = document.getElementById('resultado');

let jogadorAtual = '❌';
let estadoJogo = Array(9).fill('');

const combinacoesVitoria = [
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6]
];

tabuleiro.addEventListener('click', jogar);

function jogar(e) {
  const celula = e.target;
  const indice = celula.dataset.index;

  if (!indice || estadoJogo[indice] !== '') return;

  estadoJogo[indice] = jogadorAtual;
  celula.innerHTML = jogadorAtual;

  if (verificarVitoria()) {
    resultado.innerHTML = `<span class="${jogadorAtual === '❌' ? 'vitoriap1' : 'vitoriap2'}">🏆 Jogador ${jogadorAtual} venceu!</span>`;
    tabuleiro.removeEventListener('click', jogar);
    return;
  }

  if (!estadoJogo.includes('')) {
    resultado.innerHTML = `<span class="vitoria">😅 Empate!</span>`;
    return;
  }

  jogadorAtual = jogadorAtual === '❌' ? '⭕' : '❌';
  jogadorSpan.textContent = jogadorAtual;
}

function verificarVitoria() {
  return combinacoesVitoria.some(combinacao => {
    return combinacao.every(i => estadoJogo[i] === jogadorAtual);
  });
}

function reiniciar() {
  estadoJogo = Array(9).fill('');
  document.querySelectorAll('.jogo-cardjdv').forEach(cel => cel.innerHTML = '');
  jogadorAtual = '❌';
  jogadorSpan.textContent = jogadorAtual;
  resultado.innerHTML = '';
  tabuleiro.addEventListener('click', jogar);
}
