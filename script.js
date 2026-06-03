const mensagem = `Amada Any,

Hoje quero escrever algo especial para alguém que há pouco tempo conheci e já admiro muito.

Você não apenas toca instrumentos...
Você carrega nas melodias e acordes uma unção do Senhor, que transmite a alegria do evangelho e do Reino
em cada canção e louvor.

Que sua vida possa cada dia refletir a essência de Cristo em tudo que você fizer,
e o Senhor continue multiplicando seus dons e talentos e te faça crescer na Graça e no conhecimento Dele.

🎹🎸🎻🥁🎷🎶`

let i = 0;
function escrever() {
  const texto = document.getElementById("texto");

  if (i < mensagem.length) {
    texto.innerHTML =
      mensagem.substring(0, i + 1) + '<span style="color:#ff9dfc">|</span>';
    i++;
    setTimeout(escrever, 50);
  }
}
escrever();