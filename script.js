const mensagem = `Amada Any,

Hoje é que escrever algo especial para alguém que a pouco tempo conheci e já admiro muito.

Você não apenas tocar instrumentos...
Você carrega nas melodias e acordes um unção do Senhor, que transmite a alegria do evangelho e do Reino
em cada canção e louvor.

Que sua vida possa cada dia refletir a essencia de Cristo em tudo que você fizer,
e o Senhor continue multiplicando seus dons e talento e te faça crecer na Graça e conhecimento Dele.

🎹🎸🎻🥁🎷🎶`

let i = 0;
 function escrever (){
    const texto = document.getElementById("texto");

    if(i < mensagem.length){
        texto.innerHTML =
            mensagem.substring(0, i+1) + '<span style"color:#ff9dfc">|</span>';
        i++;
        setTimeout(escrever, 50);
    }
 }
escrever();