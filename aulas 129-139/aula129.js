// FAZENDO UM CRONÔMETRO COM USO DO TIMESTAMP

import { Cxmsg } from "./Cxmsg.js";

const config ={
    cor : "#080",
    tipo: "ok"
}


const timer = document.querySelector("#timer");
const btn_play = document.querySelector("#play");
const btn_stop= document.querySelector("#stop");
const btn_reset = document.querySelector("#reset");
const btn_tempos = document.querySelector("#tempo")
const tempos = document.querySelector("#temposRegistrados");

let intervalo = null;
let tmpInicial = null;

const contador =()=>{
    const tmpAtual = Date.now();
    let cont = tmpAtual-tmpInicial;
    let seg = cont/1000; // AQUI DIVIDO POR 1000 PARA PEGAR OS SEGUNDOS NA DIFERENÇA ENTRE UM TIMESTAMP E OUTRO
    timer.innerHTML = converter(seg); // AQUI É UMA FUNÇÃO DENTRO DA OUTRA (CONVERTER --DENTRO--> CONTADOR)
}

const converter =(seg)=>{

    const hora = Math.floor(seg/3600);//////////
    const resto = seg%3600;/////////////////////// ESSAS 4 VARIÁVEIS SÃO RESPONSÁVEIS POR MODULAR O TEMPO
    const minuto = Math.floor(resto/60);////////// PRIMEIRO SE PEGA A HORA, DEPOIS O RESTO PARA SE ACHAR OS MIN E OS SEG
    const segundo = Math.floor(resto%60);////////

    const formatado = `${hora>=10?hora:"0"+hora}:${minuto>=10?minuto:"0"+minuto}:${segundo>=10?segundo:"0"+segundo}`;

    return formatado;

}

btn_play.addEventListener("click",()=>{
     tmpInicial = Date.now();
     intervalo = setInterval(contador,1000);
});


btn_reset.addEventListener("click",()=>{
    timer.innerHTML = `00:00:00`;
    tmpInicial = Date.now();
    intervalo = setInterval(contador,1000);
    tempos.innerHTML = "";
});

btn_stop.addEventListener("click",()=>{
    clearInterval(intervalo);
    Cxmsg.mostrar(config,"CRONOMETRO","CRONOMETRO PARADO!!!");
});

btn_tempos.addEventListener("click",()=>{
    tempos.innerHTML+= `${timer.innerHTML} <br>` //--> UM DOS JEITOS DE FAZER OS TEMPOS USANDO O INNERHTML

    // let paragrafo = document.createElement("p");
    // paragrafo.innerHTML += timer.innerHTML;      ----> ESSE SERIA O MODO CRIANDO UMA TAG
    // tempos.appendChild(paragrafo);
});