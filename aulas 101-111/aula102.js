// MANIPULAÇÃO DE STRINGS PT.2

let nome = new String("Caio Santo"); 
let nome2 = new String("Caio Santo");
let canal = new String("CFBCursos");

console.log(nome);
console.log(typeof(nome));

console.log(nome.charAt(0)); 
console.log(nome.charCodeAt(1)); 

console.log(nome.concat(canal)); 

console.log(nome.indexOf("o")); 
console.log(nome.lastIndexOf("o")); 

console.log(nome.localeCompare(nome2)); // RETORNO 0 SIGNIFICA QUE AS DUAS SÃO IGUAS, 1 OU MENOS -1 SIGNIFICA QUE SÃO DIFERENTES

console.log(nome.replace("Caio","Caioba")); // SUBSTITUIR UM TEXTO ESPECIFICADO

console.log(nome.search("Santo")); // PROCURA POR UM TETXO ESPECIFICADO

console.log(nome.slice(0,4)); // CORTA O TETXO NA PRIMEIRA POSIÇÃO ESPECIFICADA ATÉ A ÚLTIMA

let sobrenome = nome.slice(5,10);
console.log(sobrenome);

let arr_nome = nome.split(" "); // ESSA FUNÇÃO RECORTA E RETORNA UM ARRAY (vc tem que especificar onde quer recortar) 
console.log(arr_nome);