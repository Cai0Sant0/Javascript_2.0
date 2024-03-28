/* OPERADOR SPREAD ...

const jogador1 = {nome: "Caio", energia : 100, vidas:3, magia:150}; // Objeto em JS
const jogador2 = {nome: "Bruce", energia : 100, vidas:5, velocidade:80};
const jogador3 = {...jogador1,...jogador2};


/*let n1 =  [10,20,40];
let n2 = [20,30,44,55];
let n3 = [...n1,...n2]*/

/*console.log("n1: " + n1);
console.log("n2: " + n2);


console.log(jogador3); */

const objs1 = document.getElementsByTagName("div");
const objs2 =[...objs1];

objs2.forEach(element => {
    element.innerHTML = "Complicado";
});

console.log(objs1);
console.log(objs2);

/*const soma = (v1,v2,v3)=>{
    return v1+v2+v3;
}

let valores = [1,5,4];

console.log(soma(...valores));*/