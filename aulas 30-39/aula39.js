// RELAÇÃO DE ELEMENTOS DOM PT.2

const caixa1 = document.querySelector("#caixa1");
const btn_c = [...document.querySelectorAll(".curso")];
const c1_2 = document.querySelector("#c1_2");

console.log(c1_2.parentNode.parentNode.children[4]);



// console.log(btn_c[0].children.length > 0 ? "Possui filhos":"Não possui filhos");

// console.log(caixa1.children[1].innerHTML = "TESTE");

// console.log(caixa1.firstElementChild);
// console.log(caixa1.lastElementChild);
// console.log(caixa1.children);