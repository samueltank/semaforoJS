"use strict";

/* Variables */

const semaforo       = document.querySelector("#semaforo");
const btnVerde       = document.querySelector("#btnVerde");
const btnAmarelo     = document.querySelector("#btnAmarelo");
const btnVermelho    = document.querySelector("#btnVermelho");
const btnAuto        = document.querySelector("#btnAuto");
let idAlternarCor    = null;

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
  const conteudoSrc = semaforo.getAttribute("src");

  function checarCont(src, search) {
    return src.includes(search);
  };

  // resolução 'funcional':
  if(checarCont(conteudoSrc, "desligado")) {
    mudarCorPraVerde(semaforo);
  } else if(checarCont(conteudoSrc, "verde")) {
    mudarCorPraAmarelo(semaforo);
  } else if(checarCont(conteudoSrc, "amarelo")) {
    mudarCorPraVermelho(semaforo);
  } else {
    mudarCorPraVerde(semaforo);
  }
}

function alternarAuto() {
  if(idAlternarCor == null) {
    idAlternarCor = setInterval(() => alternarCor(semaforo), 1200);
    btnAuto.innerHTML = "Parar";  
    btnAuto.style.color = "red";
  } else {
    clearInterval(idAlternarCor); // cancela o temporizador
    idAlternarCor = null;
    btnAuto.innerHTML = "Automático";
    btnAuto.style.color = "royalblue";
  }
}

/* Listeners */

semaforo.addEventListener("click", null);
// para funções com parâmetros usar: () => function(parameter);
btnVerde.addEventListener("click", () => mudarCorPraVerde(semaforo)); 
btnAmarelo.addEventListener("click", () => mudarCorPraAmarelo(semaforo));
btnVermelho.addEventListener("click", () => mudarCorPraVermelho(semaforo));
btnAuto.addEventListener("click", alternarAuto);