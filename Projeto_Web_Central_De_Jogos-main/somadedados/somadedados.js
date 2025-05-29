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

    const player = somaJogada();
    const maquina = somaJogada();

    res.innerHTML = `👤 Player: ${player.dados.join(' + ')} = ${player.total}`;
    res2.innerHTML = `🤖 Máquina: ${maquina.dados.join(' + ')} = ${maquina.total}`;

    res.className = 'resultado';
    res2.className = 'resultado';

    if (player.total > maquina.total) {
            res.className = 'resultado vitoria';
            res2.className = 'resultado derrota';
    } else if (player.total < maquina.total) {
            res.className = 'resultado derrota';
            res2.className = 'resultado vitoria';
    } else {
            res.innerHTML += '<br>😲 Empate!';
            res2.innerHTML += '<br>😲 Empate!';
    }   
}



