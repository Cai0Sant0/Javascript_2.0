// DOM (getElementByClassName)

const todosCursos= [...document.getElementsByClassName("curso")];
const cursosC1 = [...document.getElementsByClassName("c1")];
const cursosC2 = [...document.getElementsByClassName("c2")];
const cursoEspecial = document.getElementsByClassName("curso")[6];

console.log(todosCursos);
console.log(cursosC1);
console.log(cursosC2);
console.log(cursoEspecial);

cursosC2.map((elemento)=>{
    elemento.classList.add("destaque")
})