// APRENDENDO SOBRE SYMBOL PT.2

class Jogador{
    constructor(nome){
        this.nome = nome;
        this.id = Symbol();
    }
}

let jogares = [new Jogador("Jogador 1"),new Jogador("Jogador 2"),new Jogador("Jogador 3"),new Jogador("Jogador 4"),new Jogador("Jogador 1"),new Jogador("Jogador 3")];

//let s1 = jogares[2].nome;

let simbolos_j1 = []

// jogares = jogares.filter((jogado)=>{
//     return jogado.id != s1;
// });

let jogares1 = jogares.filter((j)=>{
    return j.nome == "Jogador 1";
});

simbolos_j1 = jogares1.map((j)=>{
    return j.id;
});

console.log(jogares);
console.log(jogares1);
console.log(simbolos_j1);