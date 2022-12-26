const opcoesBox = document.querySelector(".option");
const opcoes = document.querySelectorAll(".option div");
const fonteSelecionada = document.querySelector(".textBox");
const dropdown = document.querySelector(".dropdown");
const exemplo = document.querySelector(".exemplo");
const exemploInput = document.querySelector(".exemploInput");
const conteudo = document.querySelector(".container2");

opcoes.forEach((opcao) => {
  opcao.style.fontFamily = opcao.innerText;
  opcao.addEventListener("click", (e) => {
    console.log(conteudo);
    fonteSelecionada.value = opcao.innerText;
    fonteSelecionada.style.fontFamily = opcao.innerText;
    exemplo.style.fontFamily = opcao.innerText;
    conteudo.style.fontFamily = opcao.innerText;
  });
});

dropdown.addEventListener("click", () => {
  dropdown.classList.toggle("active");
});

const colorpick = document.querySelector("#color");
const prevcolor = document.querySelector("#hexcolor");

colorpick.addEventListener("change", () => {
  prevcolor.value = colorpick.value;
  exemplo.style.color = colorpick.value;
  conteudo.style.color = colorpick.value;
});

prevcolor.addEventListener("change", () => {
  colorpick.value = prevcolor.value;
  if (prevcolor.value.substr(0, 1) !== "#")
    colorpick.value = "#" + prevcolor.value;
  exemplo.style.color = colorpick.value;
  conteudo.style.color = colorpick.value;
});

exemploInput.addEventListener("change", () => {
  exemplo.innerText = exemploInput.value;
});
