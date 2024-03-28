// TEMPLATE STRINGS

const caixa = document.querySelector("#caixa");

const carros = ["polo","golf","hrv"];

let ol  = `<ul>`;
carros.map((el)=>{
    ol+=`<li> ${el} </li>`;
});

ol+=`</ul>`

const curso = "Javascript";
const canal = "CFB Cursos";
const frase = `Este é o curso de <br>${ curso} <br> do canal <br>${ canal}`;

caixa.innerHTML = ol;

