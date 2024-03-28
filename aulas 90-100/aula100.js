// APRENDENDO SOBRE SYMBOL PT.3

const nome = Symbol("Nome");
const numero = Symbol("Numero");
const corUniforme = Symbol("Cor do uniforme");

const jogador = {
    nome: "j1" // FAZENDO DESSE MODO O FAZEMOS COM QUE OS ATRIBUTOS SE TORNEM AS VARIÁVEIS
}

jogador[numero]= 10, 
jogador[corUniforme] = "Amarelo"

for( j in jogador){{
    console.log(j); // EXIBE TODAS AS PROPRIEDADES DO OBJETO
}}

//console.log(nome.description) --> PARA MOSTRAR O QUE ESTÁ DENTRO DOS PARENTESES

console.log(jogador);
console.log(jogador.nome); 
console.log(jogador[numero]); // AGORA ELES SÓ PODEM SER IMPRIMIDOS SE MOSTRADOS DESSA FORMA
console.log(jogador[corUniforme]); 