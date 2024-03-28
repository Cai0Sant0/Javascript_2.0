// DESAFIO AULA 110 (NÃO CONSEGUI FAZER ADMITO A DERROTA :[    )

const carro = document.querySelector("#carro");
const botaoPlay = document.querySelector("#play");
const botaoStop = document.querySelector("#stop")

const init = ()=>{
    carro.style.position = "relative";
    carro.style.left = "0px";
    carro.style.right = "0px";
    carro.style.width =  "80px";
    tamMax = window.innerWidth-parseInt(carro.style.width);
};

let anima = null;

let tamMax = null;

let direcao = null;

const mover = ()=>{
    if(parseInt(carro.style.left) >= tamMax){
        direcao = -1
    }
    else if(parseInt(carro.style.left) <= 0){
        direcao = 1
    }
    
    carro.style.left = parseInt(carro.style.left) + (direcao*10) + "px";
    anima = setTimeout(mover,20);
}

botaoStop.addEventListener("click",()=>{
   clearTimeout(anima);
});

botaoPlay.addEventListener("click",()=>{
    clearTimeout(anima);
     mover();
});

//window.onload = init();
window.addEventListener("load",init());
window.addEventListener("resize",()=>{
    tamMax = window.innerWidth-parseInt(carro.style.width);
});