// AULA SOBRE ANIMAÇÃO PT.5 (AUMENTANDO E DIMINUINDO A CAIXA)

const carro = document.querySelector("#carro");
const botaoRodar = document.querySelector("#btn_rodar");
const botaoPara = document.querySelector("#parar")

const init = ()=>{
    carro.style.position = "relative";
    carro.style.left = "0px";
    carro.style.width =  "100px";
    carro.style.height = "40px";
    tamMax = window.innerWidth-parseInt(carro.style.width);
};

let anima = null;

let tamMax = null;

let largCarro = null;

let direcao = null

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

botaoPara.addEventListener("click",()=>{
   clearTimeout(anima);
});

botaoRodar.addEventListener("click",()=>{
    clearTimeout(anima);
    mover();
});


//window.onload = init();
window.addEventListener("load",init());
window.addEventListener("resize",()=>{
    tamMax = window.innerWidth-parseInt(carro.style.width);
});
window.addEventListener("keydown",(evt)=>{
    if(evt.code == "ArrowUp"){//ESSE EVENTO.CODE SERVE PARA PEGAR O EVENTO SE ALGUMA TECLA FOR CLICADA NESSE CASO SETA PRA CIMA
        carro.style.width = parseInt(carro.style.width) + 10 + "px";
        carro.style.height = parseInt(carro.style.height) + 10 + "px";
    }
    else if(evt.code == "ArrowDown"){ // SETA PRA BAIXO
        carro.style.width = parseInt(carro.style.width) - 10 + "px";
        carro.style.height = parseInt(carro.style.height) - 10 + "px";
    }

    largCarro = parseInt(carro.style.width); // A GENTE PEGA ESSE VALOR PRA RECALCULAR PRO CARRO NÃO VAZAR DA TELA
    tamMax = window.innerWidth - largCarro;
});