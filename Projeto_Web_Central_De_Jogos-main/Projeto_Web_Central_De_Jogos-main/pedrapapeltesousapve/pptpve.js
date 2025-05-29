function jogar() {
    const jogador1 = document.querySelector('input[name="pedrapapeltesourap1"]:checked');
    const jogador2 = document.querySelector('input[name="pedrapapeltesourap2"]:checked');
    const res = document.getElementById("res");

    const valorjogador1 = jogador1.value;
    const valorjogador2 = jogador2.value;

    let resultadoTexto = "";
    let classeResultado = "resultado";

    if (!jogador1 && !jogador2) {
        res.innerHTML = "FAÇAM SUAS ESCOLHAS"
        res.className = " derrota"
    }


    const emotes = {
        pedra: "✊",
        papel: "📄",
        tesoura: "✂️"
    };

    if (valorjogador1 === valorjogador2) {
        resultadoTexto = `🤝 EMPATE! Ambos jogaram ${emotes[valorjogador1]} ${valorjogador2.toUpperCase()}`;
    } else if (
        (valorjogador1 === "pedra" && valorjogador2 === "tesoura") ||
        (valorjogador1 === "papel" && valorjogador2 === "pedra") ||
        (valorjogador1 === "tesoura" && valorjogador2 === "papel")
    ) {
        resultadoTexto = `🔴 JOGADOR 1 VENCEU! ${emotes[valorjogador1]} ${valorjogador1.toUpperCase()} vence ${emotes[valorjogador2]} ${valorjogador2.toUpperCase()} 🔴`;
        classeResultado += " vitoriap1";
    } else {
        resultadoTexto = `🔵 JOGADOR 2 VENCEU! ${emotes[valorjogador2]} ${valorjogador2.toUpperCase()} vence ${emotes[valorjogador1]} ${valorjogador1.toUpperCase()} 🔵`;
        classeResultado += " vitoriap2";
    }

    res.innerHTML = `<p>${resultadoTexto}</p>`;
    res.className = classeResultado;
}
