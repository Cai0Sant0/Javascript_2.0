// PARÂMETROS REST

// SPREAD = ...

function Soma(...valores){
    let tam = valores.length;
    let soma = 0;
    for(n of valores){
        soma += n;
    }
    return soma;
}

console.log(Soma(10,5,2,8,15));