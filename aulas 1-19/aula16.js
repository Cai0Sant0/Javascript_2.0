// FOR IN E FOR OF

//let num = [10,20,30,40,50];

/*for(n in num){
    console.log(num[n]); // pega posições
}*/


/*for(n of num){
    console.log(n); // pega diretamente os elementos
}*/

/*for(let i = 0; i<num.length; i++){
    console.log(num[i]);
} FOR IN E FOR TEM A MESMA FUNÇÃO QUE ESSE COMANDO */

const objs = document.getElementsByTagName('div');

for(o in objs){
    console.log(objs[o].innerHTML = "po");
}
for(o of objs){
    console.log(o.innerHtml = "sei la");
}