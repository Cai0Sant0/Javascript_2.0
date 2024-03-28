// PRÁTICA COM MÓDULO

import c from "../pratica_modulos/contatos.js";
const listaCont = document.querySelector("#listaContatos");
const btnGravar = document.querySelector("#btn_gravar");

btnGravar.addEventListener("click",(evento)=>{
    const contato = {
        nome: document.querySelector("#f_nome").value,
        telefone: document.querySelector("#f_telefone").value,
        email: document.querySelector("#f_email").value
    }
    c.adicionarCont(contato,listaCont);
    console.log(c.getTodosContatos());
});
