//Calculadora (AULAS 70-74)

const teclasNum = [...document.querySelectorAll(".num")];
const teclasOpp = [...document.querySelectorAll(".op")];
const teclaResposta = document.querySelector(".resposta");
const display = document.querySelector(".display");
const teclaOnOff = document.querySelector("#ON");
const teclaLimpa = document.querySelector("#limpa");
const tcpy = document.querySelector("#tcpy");
const teste = document.querySelector("#teste");
const aba = document.querySelector("#calc_aba");
const calc = document.getElementById("calc");
const img_aba = document.getElementById("img_aba_calc");

let sinal = false;
let ligado = false;
let decimal = false


teclasNum.map((elemento)=>{
    elemento.addEventListener("click",(evento)=>{
        sinal = false;
        if(ligado!=true){
            alert("LIGUE A CALCULADORA ! [BOTÃO ON]")
        }
        else{
            if(evento.target.innerHTML == "."){
                if(!decimal){
                    decimal = true;
                    display.innerHTML += evento.target.innerHTML;
                }
            }
            else{
                if(display.innerHTML == "0"){
                    display.innerHTML = "";
                }
                display.innerHTML += evento.target.innerHTML;
            }
        }
      

    });
});

teclasOpp.map((elemento)=>{
    elemento.addEventListener("click",(evento)=>{
        decimal = false;
        if(ligado != true){
            alert("LIGUE A CALCULADORA ! [BOTÃO ON]");
        }
        else{
            if(!sinal){
                sinal = true;
                if(display.innerHTML == "0"){
                    display.innerHTML = "";
                }
                if(evento.target.innerHTML == "X"){
                    display.innerHTML +="*";
                }
                else{
                    if(evento.target.innerHTML == "."){
                        if(!decimal){
                            decimal = true;
                            display.innerHTML += evento.target.innerHTML;
                        }
                        else{
                            display.innerHTML += evento.target.innerHTML;
                        }
                    }
                    else{
                        display.innerHTML += evento.target.innerHTML;
                    }
                }
            }
        }   
    });
});

teclaLimpa.addEventListener("click",(evento)=>{
        sinal = false;
        decimal = false;
        display.innerHTML = "0";
});

teclaOnOff.addEventListener("click",(evt)=>{
    if(display.innerHTML.length == 0){
        ligado = true;
        display.innerHTML = "0";
        teclaOnOff.innerHTML  = "OFF";
    }
    else{
        ligado = false;
        display.innerHTML = "";
        teclaOnOff.innerHTML  = "ON";
    }
});

teclaResposta.addEventListener("click",(evento)=>{
    sinal = false;
    decimal = false;
    const res = eval(display.innerHTML); // O eval serve para pegar o que está escrito em string inclusive operações aritméticas e fazer a conta
    display.innerHTML = res;
});

tcpy.addEventListener("click",(evento)=>{
   navigator.clipboard.writeText(display.innerHTML); // para colar um texto para área de transferência

//    teste.select();
//    teste.setSelectionRange(0,999999) -------------> USE ISSO PARA O MOBILE POIS AS VEZES NÃO SELECIONA O TEXTO DO INPUT PARA A AREA DE TRANSFER
//    navigator.clipboard.writeText(teste.value);
});

aba.addEventListener("click",(evento)=>{                                 
    calc.classList.toggle("calc_exibir");
    if(calc.classList.contains("calc_exibir")){
      img_aba.setAttribute("src","../img/seta_cima.png");
    }
    else{
        img_aba.setAtribute("src","../img/seta_baixo.png");
    }
});

// ELE USOU ESSE CÓDIGO AI PARA ALTERAR A DIREÇÃO DA SETA 
