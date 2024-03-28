// RemoveElement -> removendo elemento pelo js

const caixa1 = document.querySelector("#caixa1");
const btn_c = [...document.querySelectorAll(".curso")];
const c1_2 = document.querySelector("#c1_2");
const cursos = ["HTML","CSS","Javascript","PHP", "React", "MySQL", "ReactNative"];

cursos.map((elemento, indice)=>{

    const novoElemento = document.createElement("div");
    novoElemento.setAttribute("id","c"+indice);
    novoElemento.setAttribute("class", "curso c1");
    novoElemento.innerHTML = elemento;

    const btn_lixeira = document.createElement("img");
    btn_lixeira.setAttribute("src","../img/lixo_aula41.png");
    btn_lixeira.setAttribute("class","lixeira");
    novoElemento.appendChild(btn_lixeira);

    btn_lixeira.addEventListener("click",(evento)=>{
        const elemento = evento.target.parentElement;
        caixa1.removeChild(elemento);
    })
    caixa1.appendChild(novoElemento);
});

