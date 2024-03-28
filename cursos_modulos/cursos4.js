// ARQUIVO RELACIONADO A AULA 95

export default class Cursos{
    static cursos = ["Javascript", "HTML", "CSS", "C++","c#","Java"];

    static getTodosCursos =()=>{
        return this.cursos;
    }

    static getCurso =(i_curso)=>{
        return this.cursos[i_curso];
    }

    static criarCurso = (novoCurso)=>{
        this.cursos.push(novoCurso);
    }

    static apagarCursos = ()=>{
        this.cursos = [];
    }
}

//export default {Cursos};



