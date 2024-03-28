// ORIENTAÇÃO A OBJETO EM JS

function Pessoa(Nome,Idade){
        this.nome = Nome,
        this.idade = Idade,         // USANDO FUNCTION TEM Q USAR EM VEZ DE CLASS TEM Q COLOCAR THIS. EM TODO OS METODOS E ATRIBUTOS

    this.getNome = function(){
        return this.nome;
    },

    this.getIdade = function(){
        return this.idade;
    },

    this.setNome = function(Nome){
        this.nome = Nome;
    },

    this.setIdade = function(Idade){
        this.idade = Idade;
    },

    this.info = function(){
        console.log(`Nome: ${this.getNome()}`);
        console.log(`Idade: ${this.getIdade()}`);
        console.log("----------------------------------")
    }
}

let pessoas = [];

const adicionar = document.querySelector("#btn_add");
const resposta = document.querySelector(".res");

const addPessoa = ()=>{
    resposta.innerHTML = "";
    pessoas.map((pessoa)=>{
        const div = document.createElement("div");
        div.setAttribute("class", "pessoa");
        div.innerHTML = `Nome: ${ pessoa.getNome()} <br> Idade: ${ pessoa.getIdade()}`;
        resposta.appendChild(div);
    });
}

adicionar.addEventListener("click",()=>{
    const nome = document.querySelector("#f_nome");
    const idade = document.querySelector("#f_idade");
   const p  = new Pessoa(nome.value, idade.value);
   pessoas.push(p);
   nome.value = "";
   idade.value = "";
   nome.focus();
   addPessoa();
});





