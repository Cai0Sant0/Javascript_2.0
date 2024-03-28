// APRENDENDO A CONVERTER JSON PARA OBJETO LITERAL

const pessoa= {
    nome: "Caio",
    canal: "CFB cursos",
    curso: "Javascript",
    aulas:{
        aula01: "Introdução",
        aula02: "Variáveis",
        aula03: "Condicional"
    }
}

const string_pessoa = '{"nome":"Caio","canal":"CFB cursos","curso":"Javascript","aulas":{"aula01":"Introdução","aula02":"Variáveis","aula03":"Condicional"}}';

// S_jSON_PESSOA É A MESMA COISA QUE STRING_PESSOA  

const s_json_pessoa  = JSON.stringify(pessoa); // CONVERTE OBJETO EM STRING JSON 
const o_json_pessoa = JSON.parse(string_pessoa); // CONVERTE STRING JSON EM OBJETO

console.log(pessoa);
console.log(s_json_pessoa);
console.log(o_json_pessoa);