// PRÁTICA COM CLASSES (Aula 82 - 86)

const numero_Objt = document.querySelector("#num_objetos");
const txt_Quant = document.querySelector("#txt_qtde");
const botaoAdiciona = document.querySelector("#btn_add");
const botaoRemove = document.querySelector("#btn_remover");
const palco = document.querySelector("#palco");

let larguraPalco = palco.offsetWidth;//ESSE OffseeetWidth SERVE PARA PEGAR A LARGURA 
let alturaPalco =  palco.offsetHeight; //ESSE OffseeetHeight SERVE PARA PEGAR A ALTURA
let bolinhas = [];
let numBolinha = 0;

class Bola{
    constructor(arrayBolinhas,palco){
     this.tam = Math.floor(Math.random()*15)+10; // FAZER A BOLINHA TER UM TAMANHO ALEATÓRIO
     this.r = Math.floor(Math.random()*255);
     this.g = Math.floor(Math.random()*255);
     this.b = Math.floor(Math.random()*255);
     this.px = Math.floor(Math.random()*(larguraPalco-this.tam));
     this.py = Math.floor(Math.random()*(alturaPalco-this.tam)); // PRA FAZER A BOLINHA NASCER EM UM LUGAR ALEATÓRIO DO PALCO
     this.velx = Math.floor(Math.random()*2)+0.5; // VELOCIDADE
     this.vely = Math.floor(Math.random()*2)+0.5;
     this.dirx = (Math.random()*10) > 5?1:-1;
     this.diry = (Math.random()*10) > 5?1:-1;
     this.palco = palco;
     this.arrayBolinhas = arrayBolinhas;
     this.id = Date.now()+"_"+Math.floor(Math.random()*10000000000000);
     this.desenharBolinha();
     numBolinha++;
     this.controle = setInterval(this.controlarMovi,10);
     this.eu = document.getElementById(this.id);
     numero_Objt.innerHTML = numBolinha;
    }

    minhaPosicao = ()=>{
        return this.arrayBolinhas.indexOf(this); // PARA PEGAR A POSIÇÃO DA BOLINHA DENTRO DO ARRAY BOLINHAS
    }

    removerBolinha = ()=>{
        clearInterval(this.controle); // TIRAR O INTERVALO
        bolinhas = bolinhas.filter((bolinha)=>{ //ISSO SERVE PARA TIRAR A BOLINHA QUANDO TEM UM ID IGUAL
            if(bolinha.id != this.id){
                return bolinha;
            }
        });
        this.eu.remove();
        numBolinha--;
        numero_Objt.innerHTML = numBolinha;
    }

    desenharBolinha = ()=>{
        const div = document.createElement("div");
        div.setAttribute("id",this.id);
        div.setAttribute("class","bola");
        div.setAttribute("style",`left:${this.px}px; top: ${this.py}px; width: ${this.tam}px; height: ${this.tam}px; background-color: rgb(${this.r},${this.g},${this.b})`); // ESTILO BOLINHA
        this.palco.appendChild(div);
    }

    controlarMovi = ()=>{
        this.colisao_Bordas();
        this.px += this.dirx*this.velx;
        this.py += this.diry*this.vely;
        this.eu.setAttribute("style",`left:${this.px}px; top: ${this.py}px; width: ${this.tam}px; height: ${this.tam}px; background-color: rgb(${this.r},${this.g},${this.b})`);
        if((this.px > larguraPalco)||(this.py > alturaPalco)){
            this.removerBolinha();
        }
    }

    colisao_Bordas = ()=>{
        if(this.px+this.tam >= larguraPalco){
            this.dirx = -1;
        }
        else if(this.px+this.tam <= 0){
            this.dirx = 1
        }
        if(this.py+this.tam >= alturaPalco){
            this.diry = -1
        }
        else if(this.py+this.tam <= 0){
            this.diry = 1
        }
    }

}

window.addEventListener("resize",(evento)=>{ // ESSE EVENTO SE ATIVA QUANDO REDIMENSIONAMOS A JANELA DO NAVEGADOR
    larguraPalco = palco.offsetWidth;
    alturaPalco = palco.offsetHeight;
});

botaoAdiciona.addEventListener("click",(evento)=>{
    const quantidade_bolinhas = txt_Quant.value;
    for(let i = 0; i<quantidade_bolinhas; i++){
       bolinhas.push(new Bola(bolinhas,palco));
    }
    txt_Quant.value = "";
});

botaoRemove.addEventListener("click",(evento)=>{
    bolinhas.map((bola)=>{
       bola.removerBolinha();
    });
});





