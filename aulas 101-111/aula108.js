// AULA SOBRE ANIMAÇÃO PT.2 (SetINTERVAL VS SetTIMEOUT) --> USANDO SetINTERVAL

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
}

botaoPara.addEventListener("click",()=>{
    clearInterval(anima);
});

botaoEsquerda.addEventListener("click",()=>{
    clearInterval(anima);
   anima = setInterval(mover,20,-1);  //MILISEGUNDO
});

botaoDireita.addEventListener("click",()=>{
    clearInterval(anima);
    anima = setInterval(mover,20,1); // ESSE 1 E -1 SÃO OS ARGUMENTOS PARA A FUNÇÃO MOVER
});


//window.onload = init();
window.addEventListener("load",init());