//ARROW FUNCTION

/*const soma = function(v1,v2){
    return v1+v2
}*/

const soma =(v1,v2)=>{ // MESMA COISA QUE O DE CIMA PORÉM DE FORMA MAIS DINÂMICA 
    let res = v1+v2;
    return res;
} 


const nome = n=> n; // APENAS UM PARÂMETRO NÃO PRECISA DE ()

const add = val => val+10; // OPERAÇÕES MAIS SIMPLES NÃO PRECISAM DE RETURN E {}

console.log(soma(10,5));
console.log(nome("Caio"));
console.log(add(10));