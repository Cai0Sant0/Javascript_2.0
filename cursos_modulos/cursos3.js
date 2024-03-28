// ARQUIVO RELACIONADO A AULA 94

/*export*/ const cursos = ["Javascript", "HTML", "CSS", "C++","c#","Java"];

/*export const getTodosCursos = ()=>{
    return cursos;
}*/

export default function getTodosCursos(){ // OUTRO MÉTODO PARA EXPORTAR UMA FUNÇÃO
    return cursos;
}

/*export*/ function getCurso(i_curso){ // É IMPOSSÍVEL EXPORTAR DOIS MÉTODOS COMO PADRÃO
    return cursos[i_curso];
}

//export {cursos, getCurso}; --> EXISTEM 2 JEITOS DE EXPORTAR, ESSE E DO JEITO COMENTADO
//export default getTodosCursos;

export {getCurso};

