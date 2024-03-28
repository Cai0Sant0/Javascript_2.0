// CreateElement e SetAttribute -> criando elementos e setando class e id 

const caixa1 = document.querySelector("#caixa1");
const btn_c = [...document.querySelectorAll(".curso")];
const c1_2 = document.querySelector("#c1_2");
const cursos = ["HTML","CSS","Javascript","PHP", "React", "MySQL", "ReactNative"];

cursos.map((elemento, indice)=>{
    const novoElemento = document.createElement("div");
    novoElemento.innerHTML = elemento;
    novoElemento.setAttribute("class", "curso c1");
    novoElemento.setAttribute("id","c"+indice);
    caixa1.appendChild(novoElemento);
});

