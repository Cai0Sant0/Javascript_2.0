// ENTENDENDO SOBRE DESTRUTURAÇÃO (PT.1)

// const numeros = [1,2,3,4,5];

// const [primeiro,segundo,terceiro,quarto, quinto] = numeros; DESTRUTURAÇÃO DE ARRAY

// console.log(primeiro);
// console.log(segundo);        //NO ARRAY EU POSSO COLOCAR O NOME QUE EU QUISER NA HORA DE DESTRUTURAR PARA AS VARIÁVEIS
// console.log(terceiro);
// console.log(quarto);
// console.log(quinto);


const Pessoa = {nome: "Caio", idade: "18", sexo: "Masculino"}; // DESTRUTURAÇÃO DE OBJETO
const {nome,idade} = Pessoa; //NO OBJETO EU NÃO POSSO COLOCAR O NOME QUE EU QUISER NA HORA DE DESTRUTURAR PARA AS VARIÁVEIS


console.log(nome,idade);

// [a,b=0,c=0,d=0] = [10];

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

let a = 10
let b = 20;

[a,b] = [b,a]; // TROCANDO VALORES COM DESTRUTURAÇÃO

console.log("------------------------");
console.log(a);
console.log(b);

let numeros = ()=>{
    return [10,20,30,40,50];
}

let [n1,n2,n3,n4,n5] = numeros(); // DESTRUTURANDO NÚMEROS RETORNADOS DE UMA FUNÇÃO

console.log("------------------------");
console.log(n1);
console.log(n2);
console.log(n3);
console.log(n4);
console.log(n5);

