// APRENDENDO SOBRE A FUNÇÃO SYMBOL

const s1 = Symbol();
const s2 = Symbol();
const s3 = Symbol.for("Caio");// ISSO SERVE PARA COLOCAR UM IDENTIFACADOR PRO SIMBOLO
const s4 = Symbol.for("Lindo");

console.log(s1);
console.log(s2);

console.log(s1==s2); // FALSE
console.log(typeof(s1));// SYMBOL
console.log(s3==s4)// TRUE

console.log(Symbol.keyFor(s3)); // PRA RETORNAR O NOME DO IDENTIFICADOR (QUE FOI POSTO PELO .FOR) CASO NÃO POSSUIA DA UNDEFINED
console.log(Symbol.keyFor(s4));
