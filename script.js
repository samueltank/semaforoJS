"use strict";

/* Variables */

const semaforo       = document.querySelector("#semaforo");
const btnVerde       = document.querySelector("#btnVerde");
const btnAmarelo     = document.querySelector("#btnAmarelo");
const btnVermelho    = document.querySelector("#btnVermelho");
const btnAuto        = document.querySelector("#btnAuto");
const idAlternarCor  = null;
console.log(semaforo.getAttribute("src"));
/* Functions */

function mudarCorPraVerde(semaforo) {
  semaforo.setAttribute("src", "./img/verde.png");
}
function mudarCorPraAmarelo(semaforo) {
  semaforo.setAttribute("src", "./img/amarelo.png");
}
function mudarCorPraVermelho(semaforo) {
  semaforo.setAttribute("src", "./img/vermelho.png");
}
function alternarCor(semaforo) {
  let contentSrc = semaforo.getAttribute("src");
  if(contentSrc.includes("verde")) {
    mudarCorPraAmarelo(semaforo);
  } else if(contentSrc.includes("amarelo")) {
    mudarCorPraVermelho(semaforo);
  } else {
    mudarCorPraVerde(semaforo);
  }
}
function alternarAuto(idAlternarCor) {
  if(idAlternarCor == null) {
    idAlternarCor = setInterval(alternarCor(semaforo), 300);
    btnAuto.innerHTML = "Parar";
  } else {
    clearInterval(idAlternarCor);
    btnAuto.innerHTML = "Automático";
    idAlternarCor = null;
  }
}

/* Listeners */

semaforo.addEventListener("click", null);
// para funções com parâmetros:
btnVerde.addEventListener("click", () => mudarCorPraVerde(semaforo)); 
btnAmarelo.addEventListener("click", () => mudarCorPraAmarelo(semaforo));
btnVermelho.addEventListener("click", () => mudarCorPraVermelho(semaforo));
btnAuto.addEventListener("click", () => alternarAuto(idAlternarCor));