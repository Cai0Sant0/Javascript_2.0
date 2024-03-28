// MÉTODO FILTER

const idades = [10,20,40,18,30,5,6,7];
const maior = idades.filter((valor)=>{ // pode colocar Valor, indice e o próprio array iterado
    if(valor >=18){
        return valor;
    }
});
const menor = idades.filter((valor)=>{
    if(valor < 18){
        return valor
    }
});

console.log(idades);
console.log(maior);
console.log(menor);