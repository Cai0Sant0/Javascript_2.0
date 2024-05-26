// Caixa Personalizada porém agora com módulo 

import { Cxmsg } from "./Cxmsg.js";

const config={
    cor : "#48f",
    tipo: "ok"
}



const botaoCx01 = document.querySelector("#btn_caixa1");
const botaoCx02 = document.querySelector("#btn_caixa2");
const botaoCx03 = document.querySelector("#btn_caixa3");

botaoCx01.addEventListener("click",()=>{
    Cxmsg.mostrar(config,"Caio","Curso JS");
});

botaoCx02.addEventListener("click",()=>{
    Cxmsg.mostrar(config,"ba","Testando...");
});

botaoCx03.addEventListener("click",()=>{
    Cxmsg.mostrar(config,"600","Deu certo :)");
});