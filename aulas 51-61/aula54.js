//APRENDENDO SOBRE A COLEÇÃO MAP (QUE É DIFERENTE DO MÉTODO .MAP())

const caixa = document.querySelector("#caixa");

let mapa = new Map();

mapa.set("curso","Javascript");
mapa.set(10,"CFB Cursos");
mapa.set(1,100);
mapa.set("idade",18);

mapa.delete("idade");

let pes = 10
let res = "";

console.log(mapa);
if(mapa.has(pes)){
    res = "A chave existe na coleção com o valor: "+mapa.get(pes);
   
}
else{
    res = "A chave não existe na coleção";
}
// caixa.innerHTML = mapa.get("Idade");

res+= "</br> O tamanho da coleção é: "+mapa.size
caixa.innerHTML = res;
mapa.forEach((elemento)=>{
    console.log(elemento);
})