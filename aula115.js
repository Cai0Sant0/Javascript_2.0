// ENTENDENDO SOBRE DESTRUTURAÇÃO(PT.2)

let numeros = [10,20,30,40,50,60,70,80,90];

let[a,b,c,...d] = numeros; // DESESTRUTURAÇÃO USANDO PARÂMETRO REST

console.log(a);
console.log(b);
console.log(c);
console.log(d);


let obj = {nome:"Caio", canal:"CFBcursos", curso: "Javascript"}; 


let {nome,canal} = obj; // AS VARIAVEIS PRECISAM TER O MESMO NOME DOS ATRIBUTOS DO OBJETO

console.log("------------------");
console.log(nome);
console.log(canal);

const cores = ()=>{
    return ["verde", "Amarelo", "Azul","Branco"]
}

let [c1,c2,  ,c3] = cores(); // SE EU DEIXAR UM ESPAÇO VAZIO O VALOR VAI SER ASSOCIADO A ELE, NESSE EXEPLO O AZUL NÃO IRÁ PARA C3 E SIM PRO VAZIO

console.log("------------------");
console.log(c1);
console.log(c2);
console.log(c3);

console.log("------------------");
let texto = "Curso de Javascript";
let [p1,p2,p3] = texto.split(" ");

console.log(p1);
console.log(p2);
console.log(p3);
