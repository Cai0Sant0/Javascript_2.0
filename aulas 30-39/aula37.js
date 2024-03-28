// STOP PROPAGATION (Parando a propagação de um evento)

const caixa1 = document.querySelector("#caixa1");
const btn_c1 = document.querySelector("#c1"); 
const cursos = [...document.querySelectorAll(".curso")];

caixa1.addEventListener("click",(evento)=>{
    console.log("clicou");
    console.log(evento);
})

cursos.map((elemento)=>{
    elemento.addEventListener("click",(evento)=>{
        evento.stopImmediatePropagation();
    })
})

