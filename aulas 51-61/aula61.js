// OBJETOS LITERAIS EM JS

const pessoa = {
    nome : "",
    idade : "",
    getNome:function(){
        return this.nome;
    },

    setNome : function(nome){
        this.nome = nome;
    },
    getIdade:function(){
        return this.idade;
    },

    setIdade : function(idade){
        this.idade = idade;
    },

    addPessoa : function(){
        resposta.innerHTML = "";
        pessoas.map((pessoa)=>{
            const div = document.createElement("div");
            div.setAttribute("class", "pessoa");
            div.innerHTML = `Nome: ${this.getNome()} <br> Idade: ${this.getIdade()}`;
            resposta.appendChild(div);
        });
    }
}

let pessoas = [];

const adicionar = document.querySelector("#btn_add");
const resposta = document.querySelector(".res");

adicionar.addEventListener("click",()=>{
    const nome = document.querySelector("#f_nome");
    const idade = document.querySelector("#f_idade");
    pessoa.setNome(nome.value);
    pessoa.setIdade(idade.value);
    pessoas.push(pessoa);

    pessoa.addPessoa();

    nome.value = "";
    idade.value = "";
});