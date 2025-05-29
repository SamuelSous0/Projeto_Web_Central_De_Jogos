function jogar() {
    const res = document.getElementById("res");
    const escolha = document.querySelector('input[name="caraoucoroa"]:checked');
  
    if (!escolha) {
      res.innerHTML = "<p>🚨 Escolha CARA ou COROA!</p>";
      res.className = "resultado";
      return;
    }
  
    const sorteio = Math.random() < 0.5 ? "cara" : "coroa";
    const emoji = sorteio === "cara" ? "😃" : "👑";
  
    if (escolha.value === sorteio) {
      res.innerHTML = `<p>${emoji} Deu <strong>${sorteio.toUpperCase()}</strong>! 🎉 <br>Você VENCEU!</p>`;
      res.className = "resultado vitoria";
    } else {
      res.innerHTML = `<p>${emoji} Deu <strong>${sorteio.toUpperCase()}</strong>! 😢 <br>Você PERDEU!</p>`;
      res.className = "resultado derrota";
    }
  }