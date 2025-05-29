let vitoriasPlayer = 0;
let vitoriasMaquina = 0;
const limiteVitorias = 5;

function jogarDados() {
    return Math.floor(Math.random() * 6) + 1;
}

function somaJogada() {
    const dado1 = jogarDados();
    const dado2 = jogarDados();
    const dado3 = jogarDados();
    const total = dado1 + dado2 + dado3;

    return { dados: [dado1, dado2, dado3], total };
}

function somaDados() {
    const res = document.getElementById("res");
    const res2 = document.getElementById("res2");
    const placar = document.getElementById("placar");

    const player = somaJogada();
    const maquina = somaJogada();

    res.innerHTML = `👤 Player: ${player.dados.join(' + ')} = ${player.total}`;
    res2.innerHTML = `🤖 Máquina: ${maquina.dados.join(' + ')} = ${maquina.total}`;

    // Limpar classes antigas
    res.className = 'resultado';
    res2.className = 'resultado';

    // Atraso de 1 segundo (1000 ms) para mostrar quem venceu
    setTimeout(() => {
        if (player.total > maquina.total) {
            res.className = 'resultado vitoria';
            res2.className = 'resultado derrota';
            vitoriasPlayer++;
        } else if (player.total < maquina.total) {
            res.className = 'resultado derrota';
            res2.className = 'resultado vitoria';
            vitoriasMaquina++;
        } else {
            res.innerHTML += '<br>😲 Empate!';
            res2.innerHTML += '<br>😲 Empate!';
        }

        atualizarPlacar();
        verificarCampeao();

    }, 300); // 1 segundo de atraso
}

function atualizarPlacar() {
    const placar = document.getElementById("placar");
    placar.innerHTML = `🏆 Placar → Player: ${vitoriasPlayer} | Máquina: ${vitoriasMaquina}`;
}

function verificarCampeao() {
    const placar = document.getElementById("placar");
    if (vitoriasPlayer >= limiteVitorias) {
        alert("🎉 Parabéns! Player venceu o jogo!");
        zerarPlacar();
    } else if (vitoriasMaquina >= limiteVitorias) {
        alert("💻 A Máquina venceu o jogo! Tente novamente.");
        zerarPlacar();
    }
}

function zerarPlacar() {
    vitoriasPlayer = 0;
    vitoriasMaquina = 0;
    atualizarPlacar();

    const res = document.getElementById("res");
    const res2 = document.getElementById("res2");

    res.innerHTML = '';
    res2.innerHTML = '';

    res.className = 'resultado';
    res2.className = 'resultado';
}
