// AULA SOBRE ANIMAÇÃO PT.4 (LIMITANDO O MOVIMENTO DA CAIXA)

const carro = document.querySelector("#carro");
const botaoEsquerda = document.querySelector("#btn_esquerda");
const botaoDireita = document.querySelector("#btn_direita");
const botaoPara = document.querySelector("#parar")

const init = ()=>{
    carro.style.position = "relative";
    carro.style.left = "0px";
    carro.style.right = "0px";
    carro.style.width =  "100px";
    tamMax = window.innerWidth-parseInt(carro.style.width);
};

let anima = null;

let tamMax = null;

const mover = (direcao)=>{
    if(direcao > 0){
        if(parseInt(carro.style.left)<= tamMax){
            carro.style.left = parseInt(carro.style.left)+(10*direcao)+"px";
            anima = setTimeout(mover,20,direcao);
        }
        else{
            clearTimeout(anima);
        }
    }
    else if(direcao<0){
        if(parseInt(carro.style.left) >= 0){
            carro.style.left = parseInt(carro.style.left)+(10*direcao)+"px";
            anima = setTimeout(mover,20,direcao);
        }
        else{
            clearTimeout(anima);
        }
    }
    console.log(tamMax);
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
window.addEventListener("resize",()=>{
    tamMax = window.innerWidth-parseInt(carro.style.width);
});