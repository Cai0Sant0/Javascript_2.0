//POPULANDO ARRAYS COM FUNÇÕES

let numero_um = document.querySelector("#num1");
const numero_dois = document.querySelector("#num2");

const soma = document.querySelector("#soma");
const subtracao = document.querySelector("#subtração");
const multi = document.querySelector("#multiplicação");
const divi = document.querySelector("#divisão");
const resposta = document.querySelector("#res")

let opera = [
    (val)=>{
        let resposta = 0;
        for (const i of val) {
            resposta+=i;
        }
        return resposta;
    },
    (val)=>{
        let resposta = 0;
        for (const i of val) {
           resposta = i-resposta;
        }
        return resposta;
    },
    (val)=>{
        let resposta = 1;
        for (const i of val) {
            resposta*=i;
        }
        return resposta;
    },
    (val)=>{
        let resposta = 1;
        for (const i of val) {
            resposta = i/resposta;
        }
        return resposta;
    }
];

soma.addEventListener("click",()=>{
    let n1 = Number(numero_um.value);
    let n2 = Number(numero_dois.value);
    let valores = [n1,n2];
     resposta.innerHTML = "Resposta: "+opera[0](valores);
});

subtracao.addEventListener("click",()=>{
    let n1 = Number(numero_um.value);
    let n2 = Number(numero_dois.value);
    let valores = [n2,n1];
    resposta.innerHTML = "Resposta: "+opera[1](valores);
});

multi.addEventListener("click",()=>{
    let n1 = Number(numero_um.value);
    let n2 = Number(numero_dois.value);
    let valores = [n1,n2];
    resposta.innerHTML = "Resposta: "+opera[2](valores);
});

divi.addEventListener("click",()=>{
    let n1 = parseInt(numero_um.value);
    let n2 = parseInt(numero_dois.value);
    let valores = [n2,n1];
    resposta.innerHTML = "Resposta: "+opera[3](valores);
});
