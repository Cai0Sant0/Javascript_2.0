// MÉTODO FIND (PARA ENCONTRAR ELEMENTOS EM UMA ARRAY)

const vetor = document.querySelector("#array");
const textoPesquisar = document.querySelector("#txt_pesquisar");
const btnPesquisa = document.querySelector("#btnPesquisar");
const resultado = document.querySelector("#resultado");

const elementos_vet = ["html","css","java"];

vetor.innerHTML = "["+ elementos_vet + "]";

btnPesquisa.addEventListener("click",()=>{
    resultado.innerHTML = "Valor não encontrado";
    const retorno = elementos_vet.find((elemento,indice)=>{
        if(elemento.toUpperCase() == textoPesquisar.value.toUpperCase()){
            resultado.innerHTML = "Valor encontrado "+ elemento + " na posição "+indice;
            return elemento;
        }
    });
    console.log(retorno);
});