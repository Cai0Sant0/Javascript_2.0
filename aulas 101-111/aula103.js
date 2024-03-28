// MANIPULAÇÃO DE STRINGS PT.3

const nome = new String("Caio Santo");

let parte_string = nome.substring(0,4); // BASICAMENTE IGUAL AO SLICE
console.log(parte_string);

let parte_string2 = nome.substr(5,5); // PEGA A POSIÇÃO PARA COMEÇAR E DEPOIS VC INFORMA QUANTOS CARACTERES DEPOIS DESSA POSIÇÃO VC QUER PEGAR
console.log(parte_string2);

console.log(nome.toUpperCase()); //MAIUSCULO
console.log(nome.toLowerCase());// MINUSCULO

console.log(nome.toLocaleUpperCase()); // MESMA COISA QUE O DE CIMA
console.log(nome.toLocaleLowerCase()); // MESMA COISA QUE O DE CIMA

console.log(nome);
console.log(nome.valueOf()) //PARA PEGAR O VALOR DO OBJETO

let num = 10;
console.log(typeof(toString(num))); // CONVERSÃO DE VALOR NUMBER PARA STRING

