// MANIPULAÇÃO DE STRINGS

let nome = new String("Caio Santo"); // ISSO É QUASE IGUAL A ISSO LET NOME = CAIO, A ÚNICA DIFERENÇA É Q É UM OBJETO
let canal = new String("CFBCursos");

console.log(nome);
console.log(typeof(nome));

console.log(nome.charAt(0)); // MOSTRA O CARACTER NA POSIÇÃO INDICADA
console.log(nome.charCodeAt(1)); // MOSTRA O CÓDIGO FDO CARÁCTER NA POSICAO INDICADA

console.log(nome.concat(canal)); // PARA CONCATENAR

console.log(nome.indexOf("o")); // RETORNA A POSIÇÃO DO CARÁCTER NA STRING
console.log(nome.lastIndexOf("o")); // RETORNA A POSIÇÃO DO ÚLTMIMO CARÁCTER ENCONTRADO

