// APRENDENDO SOBRE ARRAY

let cores = ["azul","verde","vermelho",["claro","escuro","médio"]];
let cursos = ["HTML", "CSS", "javascript",cores];
const caixa = document.querySelector("#caixa");

cursos[0] = 2024;

cursos.push("C++");
cursos.push("Python");      // PUSH SERVE PARA ADICIONAR ELEMENTOS NO FINAL DO ARRAY

cursos.pop();             // O POP É O INVERSO DO PUSH ELE DELETA O ÚLTIMO ELEMENTO DO ARRAY

cursos.unshift(":)")    // UNSHIFT ADICIONA O ELEMENTO NO PRIMEIRO INDICE DO ARRAY

cursos.shift();         // SHIFT DELETA O PRIMEIRO ELEMENTO DO ARRAY


console.log(cursos[3][3][2]);

cursos.map((elemento)=>{
    let p = document.createElement("p");
    p.innerHTML = elemento;
    caixa.appendChild(p);
});