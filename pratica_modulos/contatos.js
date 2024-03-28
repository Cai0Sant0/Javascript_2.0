// ARQUIVO REFENTE A AULA 96

import { contatos } from "./bancoContatos.js";

let contato = {
    getTodosContatos:function(){
        return contatos;
    },
    getContato:function(i_contato){
        return contatos[i_contato];
    },
    adicionarCont:function(novoContato,destinoDOM){

        const contato = {
            nome: novoContato.nome,
            telefone: novoContato.telefone,
            email: novoContato.email
        }

        contatos.push(contato);

        destinoDOM.innerHTML = "";

        contatos.map((c, indice)=>{
            const div = document.createElement("div");
            div.setAttribute("class","contato");

            const img_lixo = document.createElement("img");
            img_lixo.setAttribute("src", "../img/lixo_aula41.png");
            img_lixo.setAttribute("class", "lixo");

            img_lixo.addEventListener("click",(evento)=>{
                 destinoDOM.removeChild(evento.target.parentElement);
                 
                 contatos.splice(indice,1)
                 this.adicionarCont(contatos,destinoDOM);
                 console.log(contatos);
            });
            
            if(c.nome!= undefined){
                const p_nome = document.createElement("p");
                p_nome.innerHTML = `Nome: ${c.nome}`;
                const p_tel = document.createElement("p");
                p_tel.innerHTML = `Telefone: ${c.telefone}`;
                const p_email = document.createElement("p");
                p_email.innerHTML = `Email: ${c.email}`;

                div.appendChild(p_nome);
                div.appendChild(p_tel);
                div.appendChild(p_email);
                div.appendChild(img_lixo);

                destinoDOM.appendChild(div);
            }
            else{
                contatos.pop()
            }
        }); 
    },
}


export default contato