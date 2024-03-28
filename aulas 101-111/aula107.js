// AULA SOBRE ANIMAÇÃO PT.1

const carro = document.querySelector("#carro");
const botaoEsquerda = document.querySelector("#btn_esquerda");
const botaoDireita = document.querySelector("#btn_direita");

const init = ()=>{
    carro.style.position = "relative";
    carro.style.left = "0px";
    carro.style.right = "0px";
};

botaoEsquerda.addEventListener("click",()=>{
   carro.style.left = parseInt(carro.style.left)-10+"px";
});

botaoDireita.addEventListener("click",()=>{
    let pos = parseInt(carro.style.left);
    pos+=10
    carro.style.left = pos+"px";
});

//window.onload = init();
window.addEventListener("load",init());