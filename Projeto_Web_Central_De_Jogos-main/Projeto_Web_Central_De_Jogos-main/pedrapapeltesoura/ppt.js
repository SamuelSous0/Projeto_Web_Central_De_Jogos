function jogar() {
    const resppt = document.getElementById("resppt");
    const escolha = document.querySelector('input[name="pedrapapeltesoura"]:checked');
    let sorteio = "";
    const numeroaleatorio = Math.floor(Math.random() * 3);

    if (!escolha) {
        resppt.innerHTML = "<p>⚠️ ESCOLHA UMA OPÇÃO!</p>";
        resppt.className = "resultado";
        return;
    }

    // Sorteio do computador
    if (numeroaleatorio === 0) {
        sorteio = "pedra";
    } else if (numeroaleatorio === 1) {
        sorteio = "papel";
    } else {
        sorteio = "tesoura";
    }

    const jogador = escolha.value;

    let resultadoTexto = "";
    let classeResultado = "resultado";

    const emotes = {
        pedra: "✊",
        papel: "📄",
        tesoura: "✂️"
    };

    if (jogador === sorteio) {
        resultadoTexto = `🤝 EMPATE! Ambos jogaram ${emotes[jogador]} ${jogador.toUpperCase()}`;
    } else if (
        (jogador === "pedra" && sorteio === "tesoura") ||
        (jogador === "papel" && sorteio === "pedra") ||
        (jogador === "tesoura" && sorteio === "papel")
    ) {
        resultadoTexto = `🎉 VOCÊ VENCEU! ${emotes[jogador]} ${jogador.toUpperCase()} vence ${emotes[sorteio]} ${sorteio.toUpperCase()}`;
        classeResultado += " vitoria";
    } else {
        resultadoTexto = `💀 VOCÊ PERDEU! ${emotes[sorteio]} ${sorteio.toUpperCase()} vence ${emotes[jogador]} ${jogador.toUpperCase()}`;
        classeResultado += " derrota";
    }

    resppt.innerHTML = `<p>${resultadoTexto}</p>`;
    resppt.className = classeResultado;
}
