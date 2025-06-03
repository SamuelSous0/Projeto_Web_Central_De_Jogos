let numJogadores = 2;
let jogadores = [];
let pontuacoes = [];
let cores = ['#ff4d4d', '#4d79ff', '#4dff4d', '#ffff4d'];
let icones = ['🔴', '🔵', '🟢', '🟡'];
let jogadorAtual = 0;
let jogoAtivo = false;

function iniciarJogo() {
  numJogadores = parseInt(document.getElementById('numJogadores').value);
  jogadores = Array.from({ length: numJogadores }, (_, i) => `${icones[i]} Jogador ${i + 1}`);
  pontuacoes = Array(numJogadores).fill(0);
  jogadorAtual = 0;
  jogoAtivo = true;

  document.getElementById('jogo').style.display = 'block';
  document.getElementById('resultado').innerHTML = '';
  atualizarInterface();
}

function atualizarInterface() {
  let vezText = `${jogadores[jogadorAtual]} — Pontuação: ${pontuacoes[jogadorAtual]}`;
  document.getElementById('vezJogador').innerHTML = vezText;
  document.getElementById('vezJogador').style.color = cores[jogadorAtual];
  document.getElementById('pontuacaoAtual').innerText = pontuacoes[jogadorAtual];
}

function comprarCarta() {
  if (!jogoAtivo) return;
  
  const carta = Math.floor(Math.random() * 11) + 1;
  pontuacoes[jogadorAtual] += carta;

  if (pontuacoes[jogadorAtual] > 21) {
    alert(`${jogadores[jogadorAtual]} estourou com ${pontuacoes[jogadorAtual]}!`);
    proximoJogador();
  } else {
    atualizarInterface();
  }
}

function parar() {
  proximoJogador();
}

function proximoJogador() {
  if (jogadorAtual < numJogadores - 1) {
    jogadorAtual++;
    atualizarInterface();
  } else {
    finalizarJogo();
  }
}

function finalizarJogo() {
  jogoAtivo = false;

  let vencedor = '';
  let melhorPontuacao = 0;

  for (let i = 0; i < numJogadores; i++) {
    const p = pontuacoes[i];
    if (p <= 21 && p > melhorPontuacao) {
      melhorPontuacao = p;
      vencedor = jogadores[i];
    }
  }

  let res = '<h2>🎯 Resultado Final</h2>';
  
  for (let i = 0; i < numJogadores; i++) {
    res += `<p style="color:${cores[i]};">${jogadores[i]}: ${pontuacoes[i]} pontos</p>`;
  }

  if (vencedor) {
    res += `<p class="vitoria">🏆 ${vencedor} venceu com ${melhorPontuacao} pontos!</p>`;
  } else {
    res += `<p class="derrota">😢 Todos estouraram! Sem vencedores.</p>`;
  }

  document.getElementById('resultado').innerHTML = res;
}
