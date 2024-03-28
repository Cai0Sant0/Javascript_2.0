// PRÁTICA COM O MÉTODO FILTER

const caixaCursos = document.querySelector("#caixaCursos");
const btn_c = [...document.querySelectorAll(".curso")];
const c1_2 = document.querySelector("#c1_2");
const cursos = ["HTML","CSS","Javascript","PHP","React","MySQL","ReactNative"];
const btnCursoSelecionado = document.querySelector("#btnCursoSelecionado");
const btnRemoveCurso = document.querySelector("#btnRemoverCurso");

cursos.map((elemento,indice)=>{
    const novoElemento = document.createElement("div");
    novoElemento.setAttribute("id","c"+indice);
    novoElemento.setAttribute("class","curso c1");
    novoElemento.innerHTML = elemento;

    const comandos = document.createElement("div");
    comandos.setAttribute("class","comandos");

    const rb = document.createElement("input");
    rb.setAttribute("type","radio");
    rb.setAttribute("name", "rb_curso");

    comandos.appendChild(rb);

    novoElemento.appendChild(comandos);

    caixaCursos.appendChild(novoElemento);
});

const radioSelecionado=()=>{
    const todosRadios = [...document.querySelectorAll("input[type=radio]")];
    const radioSelecionado = todosRadios.filter((elemento)=>{
        return elemento.checked;
    });
    return radioSelecionado[0];
}

btnCursoSelecionado.addEventListener("click",(evento)=>{

    const rs = radioSelecionado();

    try{
        const cursoSelecionado = rs.parentNode.previousSibling.textContent;
        alert("Curso selecionado: "+cursoSelecionado);
    }
    catch(exc){
        alert("[ERRO!!!] NENHUMA OPÇÃO SELECIONADA");
    }
});

btnRemoveCurso.addEventListener("click",()=>{

    const selecionado = radioSelecionado();

     try {
        const cursoRemover = selecionado.parentNode.parentNode;
        cursoRemover.remove(); // pra remover  :)
     } 
     catch (error) {
        alert("[ERRO!!!] NENHUMA OPÇÃO SELECIONADA");
     }
});

//ParentNode  -> Pai do elemento 
//childNodes[nodeNumber] -> número de filhos
//firstChild -> primeiro filho
//lastChild -> último filho
//nextSibling -> próximo irmão
//previousSibling -> irmão anterior