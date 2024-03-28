// EXPRESSÕES REGULARES (RegEX)

let nome = new String("Caio Barbosa");

console.log(nome.search(/c/i)); // i (MODIFICADOR) = SIGNIFICA QUE ELE NÃO VAI CONSIDERAR SE TA MAIUSCULO OU MINUSCULO

console.log(nome.match(/O/gi)); // G (MODIFICADOR) = RETORNA TODOS OS "O" NÃO SOMENTE O PRIMEIRO ENCONTRADO

// PODEMOS COLOCAR MAIS DE UM MODIFICADOR

console.log(nome.replace(/o/ig,"Teste"));