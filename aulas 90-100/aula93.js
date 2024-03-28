// APRENDENDO MÓDULOS EM JS ---> EXPORTANDO FUNÇÕES E APRENDENDO DOBRE O USO DE DEFAULT

import getTodosCursos, {cursos, getCurso} from "../cursos_modulos/cursos2.js"; // O GET FICA FORA DA CHAVE PQ É O PADRÃO

//import getTodosCursos from "./cursos_modulos/cursos2.js";
//import { cursos } from "./cursos_modulos/cursos2.js";  OUTROS MODOS DE IMPORTAR

console.log(cursos);
console.log(getTodosCursos());
console.log(getCurso(0));