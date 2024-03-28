// AULA SOBRE ANIMAÇÃO PT.3 (SetINTERVAL VS SetTIMEOUT) --> USANDO SetTIMEOUT

const carro = document.querySelector("#carro");
const botaoEsquerda = document.querySelector("#btn_esquerda");
const botaoDireita = document.querySelector("#btn_direita");
const botaoPara = document.querySelector("#parar")

const init = ()=>{
    carro.style.position = "relative";
    carro.style.left = "0px";
    carro.style.right = "0px";
};

let anima = null;

const mover = (direcao)=>{
    carro.style.left = parseInt(carro.style.left)+(10*direcao)+"px";
    anima = setTimeout(mover,20,direcao);
}

botaoPara.addEventListener("click",()=>{
   clearTimeout(anima);
});

botaoEsquerda.addEventListener("click",()=>{
    clearTimeout(anima);
    mover(-1);
});

botaoDireita.addEventListener("click",()=>{
    clearTimeout(anima);
    mover(1);
});


//window.onload = init();
window.addEventListener("load",init());