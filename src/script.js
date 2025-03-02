const texto = "ㅤWeb Developer";
const elemento = document.querySelector(".typing");
let index = 1;
let apagando = false;

function digitar() {
  if (!apagando) {
    elemento.textContent = texto.slice(0, index);
    index++;
    if (index > texto.length) {
      apagando = true;
      setTimeout(digitar, 1000); // Espera antes de apagar
      return;
    }
  } else {
    elemento.textContent = texto.slice(0, index);
    index--;
    if (index < 2) {
      apagando = false;
    }
  }
  setTimeout(digitar, apagando ? 100 : 300); // Velocidade de apagar e escrever
}

document.addEventListener("DOMContentLoaded", digitar);
