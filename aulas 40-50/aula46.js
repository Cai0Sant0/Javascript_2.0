// PRÁTICA COM O MÉTODO FILTER

const caixaCursos = document.querySelector("#caixaCursos");
const btn_c = [...document.querySelectorAll(".curso")];
const c1_2 = document.querySelector("#c1_2");
const cursos = ["HTML","CSS","Javascript","PHP","React","MySQL","ReactNative"];
const btnCursoSelecionado = document.querySelector("#btnCursoSelecionado");
const btnRemoveCurso = document.querySelector("#btnRemoverCurso");
const btnAdicionarDepois = document.querySelector("#btnAdicionarDepois");
const btnAdicionarAntes = document.querySelector("#btnAdicionarNovoCurso");
const nomeCurso = document.querySelector("#nomeCurso");

let indice = 0;
const tirarSelecao = ()=>{
    const cursosSelecionados = [...document.querySelectorAll(".selecionado")];
    cursosSelecionados.map((elemento)=>{
        elemento.classList.remove("selecionado");
    });
}

const criarNovoCurso=(curso)=>{
    const novoElemento = document.createElement("div");
    novoElemento.setAttribute("id","c"+indice);
    novoElemento.setAttribute("class","curso c1");
    novoElemento.innerHTML = curso;
    novoElemento.addEventListener("click",(evento)=>{
        tirarSelecao();
       evento.target.classList.toggle("selecionado");
    });

    return novoElemento;
};


cursos.map((elemento)=>{
    const novoElemento = criarNovoCurso(elemento);
    caixaCursos.appendChild(novoElemento);
    indice++
});

const cursosSelecionados = ()=>{
    const selecionado = [...document.querySelectorAll(".selecionado")];
    return selecionado[0];
}

btnCursoSelecionado.addEventListener("click",(evento)=>{
    try{
        alert("Curso selecionado: "+cursosSelecionados().innerHTML);
    }
    catch(exc){
        alert("[ERRO!!!] NENHUMA OPÇÃO SELECIONADA");
    }
});

btnRemoveCurso.addEventListener("click",()=>{

     try {
        cursosSelecionados().remove();
     } 
     catch (error) {
        alert("[ERRO!!!] NENHUMA OPÇÃO SELECIONADA");
     }
});

btnAdicionarAntes.addEventListener("click",()=>{

    try{
        if(nomeCurso.value!=""){
            const novoCurso = criarNovoCurso(nomeCurso.value);
            caixaCursos.insertBefore(novoCurso,cursosSelecionados());
        }
        else{
            alert("DIGITE O NOME DO CURSO!!!");
        }
    }
    catch(exc){
        alert("[ERRO!!!] NENHUMA OPÇÃO SELECIONADA");
    }
});

btnAdicionarDepois.addEventListener("click",()=>{

    try{
        if(nomeCurso.value!=""){
            const novoCurso = criarNovoCurso(nomeCurso.value);
            caixaCursos.insertBefore(novoCurso,cursosSelecionados().nextSibling);
        }
        else{
            alert("DIGITE O NOME DO CURSO!!!");
        }
    }
    catch(exc){
        alert("[ERRO!!!] NENHUMA OPÇÃO SELECIONADA");
    }
});

//ParentNode  -> Pai do elemento 
//childNodes[nodeNumber] -> número de filhos
//firstChild -> primeiro filho
//lastChild -> último filho
//nextSibling -> próximo irmão
//previousSibling -> irmão anterior