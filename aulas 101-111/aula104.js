// MANIPULAÇÃO DE STRINGS PT.4

const nome = new String("Caio Santo");

console.log(nome.startsWith("C")); // SERVE PARA SABER SE A STRING COMEÇA COM CERTO TEXTO OU CARACTER
console.log(nome.endsWith("o")); // SERVE PARA SABER SE A STRING TERMINA COM CERTO TEXTO OU CARACTER

console.log(nome.includes("a")) // VE SE EM ALGUMA PARTE DA STRING EXISTA O CARACTER OU TEXTO ESPECIFICADO

console.log(nome.repeat(2)); // REPETE QUANTAS VEZES VC ESPECIFICAR
console.log(nome.valueOf().repeat(3));

console.log(nome.charCodeAt(0));
console.log(nome.charCodeAt(1));
console.log(nome.charCodeAt(2));
console.log(nome.charCodeAt(3));

console.log(String.fromCharCode(67, 97, 105, 111)); //RETORNA O CARACTER USANDO O CÓDIGO DELA 

let nome_ts = "Caio";

console.log(`Nome: ${nome_ts}`);