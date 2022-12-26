const botoes = document.querySelectorAll(".container button");

botoes.forEach((botao) => {
  botao.addEventListener("click", (e) => {
    console.log(e.target.className);
  });
});
console.log("oi");
