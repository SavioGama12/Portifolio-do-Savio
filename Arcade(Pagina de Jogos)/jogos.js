document.addEventListener("DOMContentLoaded", function () {
    const addFriendButton = document.getElementById("addFriendButton");
    addFriendButton.addEventListener("click", function () {
        alert("Pedido de amizade enviado");
    });
});
const nomes = ["Savio", "João", "Debora"];
const nomesJSON = JSON.stringify(nomes);
const comentarios = [
    "É um dos melhores jogos que eu ja joguei, fácil. Porém não significa que ele seja perfeito, acho que os principais problemas que eu possa citar é que as sidequests/mundo,é bem repetitivo/mediocre e o Atreus não calar a boca durante os puzzles, porém tu só não vai curtir se não gostar de jogo com foco em narrativa e cinemático.",
    "SIMPLESMENTE UMA OBRA OBRA DE ARTE, gameplay, gráficos, história, trama, personagens tudoo é perfeito. só achei meio repetitivo os reinos, mas é algo pessoal.",
    "O começo foi épico, como sempre, e me impressionou muito, gostei. Gráfico incrível, design, arte, jogabilidade boa, sons e trilha sonora impecáveis como sempre, feeling badass. Depois ficou um tanto repetitiva a jogabilidade e comecei a me decepcionar com o modo como o Kratos tinha ficado mais calmo, como o jogo tinha ficado menos violento e com menos brutalidade nas finalizações."
];
const comentariosJSON = JSON.stringify(comentarios);

localStorage.setItem("user-name", nomesJSON);
localStorage.setItem("user-comments", comentariosJSON);
const dados = localStorage.getItem("user-name");
if (dados) {
  console.log("Nomes armazenados com sucesso.");
} 
else {
  console.log("Houve um problema ao armazenar os nomes.");
}
const comentariosArmazenados = localStorage.getItem("user-comments");
if (comentariosArmazenados) {  
  const nomesRecuperados = JSON.parse(dados);
  const comentariosRecuperados = JSON.parse(comentariosArmazenados);
  const btnNomeDivs = document.querySelectorAll(".btnNome");
  const ComentarioDivs = document.querySelectorAll(".comentario");  
  btnNomeDivs.forEach((btnNomeDiv, index) => {
    if (index < nomesRecuperados.length && index < comentariosRecuperados.length) {
        const nomeElement = document.createElement("div");
        nomeElement.textContent = `Nome: ${nomesRecuperados[index]}`;
        nomeElement.style.color = "black"; // Altera a cor do texto para preto
        nomeElement.style.backgroundColor = "white"; // Altera a cor de fundo para branco
        btnNomeDivs[index].appendChild(nomeElement);

        const comentariosElement = document.createElement("div");
        comentariosElement.textContent = `${comentariosRecuperados[index]}`;
        comentariosElement.style.color = "black"; // Altera a cor do texto para preto
        comentariosElement.style.backgroundColor = "white"; // Altera a cor de fundo para branco
        comentariosElement.style.fontSize = "10px";        
        ComentarioDivs[index].appendChild(comentariosElement);           
    }    
  });
} 
else {
  console.log("Nenhum dado encontrado no Local Storage")
}








