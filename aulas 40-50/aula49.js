// MÉTODO SOME (POR MEIO DE UMA COMPARAÇÃO VE SE TODOS OS RESULTADOS DENTRO DO ARRAY BATEM COM A REGRA IMPOSTA MAS SE APENAS UM SEGUIR A REGRA ELE VOLTA TRUE)

const vetor = document.querySelector("#array");
const btnVerificar = document.querySelector("#btnVerificar");
const resultado = document.querySelector("#resultado");

const elementos_vet = [92,211,191,80,18,18,22,9];

vetor.innerHTML = "["+ elementos_vet + "]";

btnVerificar.addEventListener("click",(evento)=>{
    const ret = elementos_vet.some((elemento, indice)=>{
        if(elemento > 18){
            resultado.innerHTML = "Array não conforme na posição "+indice;
        }
        return elemento<18;
    });
    if(ret){
        resultado.innerHTML = "OK!";
    }
});