//PRATICA ADDEVENTLISTENER

const caixa1 = document.querySelector("#caixa1");
const caixa2 = document.querySelector("#caixa2");
const botao = document.querySelector("#btn_transferir");
const todosCursos = [...document.querySelectorAll(".curso")];

todosCursos.map((elemento)=>{
    elemento.addEventListener("click",(evento)=>{
        const curso  = evento.target;
        curso.classList.toggle("selecionado");
        curso.classList.remove("c2");
    });
});

botao.addEventListener("click",()=>{
    const cursosSelecionados =[... document.querySelectorAll(".selecionado")];
    const cursosNaoSelecionados = [...document.querySelectorAll(".c2")]
    //const cursosNaoSelecionados =[...document.querySelectorAll(".curso:not(.selecionado)")]; -> jeito q o cara fez

    cursosSelecionados.map((elemento)=>{
        elemento.classList.add("c2");
        caixa2.appendChild(elemento);
        elemento.classList.remove("selecionado");
    });

    cursosNaoSelecionados.map((elemento)=>{
        caixa1.appendChild(elemento);
    })
});


