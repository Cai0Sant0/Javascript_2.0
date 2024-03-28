// ITERADORES E ELEMENTOS ITERÁVEIS

const valores = [10,9,8];
const it_valores = valores[Symbol.iterator]();

const texto = "Caio";
const it_texto = texto[Symbol.iterator]();
console.log(texto);

console.log(it_texto.next());
console.log(it_texto.next());
console.log(it_texto.next());
console.log(it_texto.next());
console.log(it_texto.next());

// ELEMENTOS ITERÁVEIS -> ARRAYS, STRINGS, COLEÇÃO MAP, SETS