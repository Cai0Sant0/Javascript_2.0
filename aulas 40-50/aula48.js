// MÉTODO EVERY (POR MEIO DE UMA COMPARAÇÃO VE SE TODOS OS RESULTADOS DENTRO DO ARRAY BATEM COM A REGRA IMPOSTA)

const vetor = document.querySelector("#array");
const btnVerificar = document.querySelector("#btnVerificar");
const resultado = document.querySelector("#resultado");

const elementos_vet = [21,21,19,20,18,18,22];

vetor.innerHTML = "["+ elementos_vet + "]";

btnVerificar.addEventListener("click",(evento)=>{
    const ret = elementos_vet.every((elemento, indice)=>{
        if(elemento < 18){
            resultado.innerHTML = "Array não conforme na posição "+indice;
        }
        return elemento>=18;
    });
    if(ret){
        resultado.innerHTML = "OK!";
    }
});