// APRENDENDO MÓDULOS EM JS ---> APRENDENDO SOBRE IMPORTAÇÕES NOMEADAS 

//import getTodosCursos, {cursos as c, getCurso as gc} from "./cursos_modulos/cursos3.js"; --> PARA ALTERAR O NOME DE ALGO IMPORTADO BASTA USAR AS

//NÃO PODE ALTERAR O NOME DA FUNÇÃO PADRÃO!!!

import * as m_cursos from"../cursos_modulos/cursos3.js"; // NESSE EXEMPLO EU IMPORTEI TUDO OQ O MÓDULO POSSUÍA PARA EXPORTAÇÃO E RENOMEEI ESSA IMPORTAÇÃO


console.log(m_cursos.getCurso(1));
console.log(m_cursos.default());
