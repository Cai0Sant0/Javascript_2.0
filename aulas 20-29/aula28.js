// MÉTODO MAP (DIFERENTE DO FOR PERCORRE TODA COLEÇÃO DE UMA VEZ)

/*const cursos = ['html', 'css', 'js'];
 let c  = cursos.map((elemento,indice)=>{
    return "Curso: "+elemento+" - Posição: "+ indice;
})

console.log(c);*/

/*let el = document.getElementsByTagName("div");
el = [...el];
console.log(el);
el.map((e,i)=>{
    e.innerHTML = "Caioba";
});*/

/*const elemento = document.getElementsByTagName("div");
const valores = Array.prototype.map.call(elemento,({innerHTML})=>innerHTML);
console.log(valores);*/

const dobrar=(e)=>e*2;
let num = ['1','2','4','5'].map(dobrar);
console.log(num);

// O map pode receber 3 parametros, o elemento, a posicao dele, e o próprio array que ele vai iterar




