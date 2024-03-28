//fUNÇÃO COM RETORNO

function Nome(){
    let n1 = 10;
    let n2 = 2;
    let resultado = n1*n2;
    if(resultado%2==0){
        return "Par";
    }
    else{
        return "Impar";
    }
}

let resul = Nome();
console.log(resul);