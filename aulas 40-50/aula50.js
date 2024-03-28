// MÉTODO REDUCE (REDUZINDO O TAMANHO DO ARRAY)

const vetor = document.querySelector("#array");
const btnReduzir = document.querySelector("#btnReduzir");
const resultado = document.querySelector("#resultado");

const elementos_vet = [1,2,3,4,5];
let ant = [];
let atu = [];
let dobro = [];

vetor.innerHTML = "["+ elementos_vet + "]";

btnReduzir.addEventListener("click",(evento)=>{
    dobro.push(elementos_vet[0]*2);
   resultado.innerHTML =  elementos_vet.reduce((anterior, atual, indice)=>{
        ant.push(anterior); // PUSH = colocar elementos dentro de uma array
        atu.push(atual);
        dobro.push(atual*2);
        return atual+anterior;
    });
    resultado.innerHTML +="<br/> V.Anterior: "+ant +"<br/> V.Atual: "+atu + "<br/> Dobro val atu: "+dobro;
  
});
