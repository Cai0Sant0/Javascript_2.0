// DOM (querySelector) e (querySelectorAll)

const todosDiv= [...document.getElementsByTagName("div")];
const todosCursos= [...document.getElementsByClassName("curso")];
const cursosC1 = [...document.getElementsByClassName("c1")];
const cursosC2 = [...document.getElementsByClassName("c2")];
const cursoEspecial = document.getElementById("c1");

//const query_todosDiv = [...document.querySelectorAll("div[class]")];
const query_todosDiv = [...document.querySelectorAll("div > p")];
const query_todosCursos = [...document.querySelectorAll(".curso")];
const query_cursosC1 = [...document.querySelectorAll("p,.c1")];
const query_cursosC2 = [...document.querySelectorAll(".c2")];
const query_cursoEspecial = document.querySelector("#c1");

console.log(query_todosDiv);

// console.log(query_cursosC1);
// console.log(query_cursosC2);

// console.log(todosDiv);
// console.log(todosCursos);
// console.log(cursosC1);
// console.log(cursosC2);
// console.log(cursoEspecial);

// cursosC2.map((elemento)=>{
//     elemento.classList.add("destaque")
// })