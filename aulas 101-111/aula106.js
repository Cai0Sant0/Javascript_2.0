// EXPRESSÕES REGULARES (RegEX) PT.2

let nome = new String("Caiooooo Barbosaaaa 2006");
let email = "Caioba@gmail.com";
let numeros = "1, 10, 100, 1000";

console.log(nome.search(/c/i)); 

console.log(nome.match(/O/gi)); 

console.log(nome.replace(/o/ig,"Teste"));

console.log(nome.match(/[oa]/ig)); //PARA ENCONTRAR O "o" E O "a" POR ISSO AS []
console.log(nome.match(/[a-b]/ig)); //PARA ENCONTRAR TODOS OS CARACTERES DE "a" A "o" (USE "-" PARA ISSO)

console.log(nome.match(/[a-b]|[0-9]/ig)); // USANDO O "|" PARA TAMBÉM PROCURAR OS NÚMEROS

console.log(nome.match(/\d/g)); //USANDO "\d" VOCÊ É CAPAZ DE PEGAR APENAS OS NÚMEROS DA STRING
console.log(nome.match(/\s/ig)); //USANDO "\s" VOCÊ É CAPAZ DE PEGAR APENAS OS ESPAÇOS DA STRING
console.log(nome.match(/\bc/ig)); //USANDO "\d" VOCÊ É CAPAZ DE PEGAR APENAS O CARACTER ESPECIFICADO DA STRING

console.log(nome.match(/o+|a+/ig)); // O QUANTIFICADOR "+" SERVE PARA NÃO SEPARAR OS CARACTERES QUANDO ESTIVEREM JUNTO

console.log(numeros);
console.log(numeros.match(/10/ig));
console.log(numeros.match(/10+/ig));
console.log(numeros.match(/10*/ig)); // O QUANTIFICADOR "*" RETORNA TODOS OS CASOS QUE TEM OCORRÊNCIA DO NÚMERO 10 E O PRIMEIRO NÚMERO
console.log(numeros.match(/10?/ig)); // O QUANTIFICADOR "?" FAZ O MESMO A ÚNICA DIFERENÇA É QUE ELE N RETORNA OS NÚMEROS INTEIROS SOMENTE 10


/* 
META-CARACTERES
\d - \s - \b

MODIFICADORES
i - g

QUANTIFICADORES
+ - * - ?
*/