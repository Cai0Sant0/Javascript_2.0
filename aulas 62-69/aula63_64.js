// PRÁTICA COM OBJETOS EM JS


const nome = document.querySelector("#f_nome")
const portas = document.querySelector("#f_portas")
const blindagem = document.querySelector("#f_blindagem");
const municao = document.querySelector("#f_municao");
const tipoMilitar = document.querySelector("#f_tipoMilitar");
const tipoNormal = document.querySelector("#f_tipoNormal");
const carros = document.querySelector(".carros");
const btnAddCarro = document.querySelector("#btn_addCarro");
const cor  = document.querySelector("#f_cor");

let veiculos = [];

const removerCarro = (quem) =>{
   veiculos = veiculos.filter((elemento)=>{
    return elemento.nome != quem;
  });
}

const gerenciarCarros = ()=>{
    carros.innerHTML = "";
    veiculos.map((c)=>{
        const div = document.createElement("div");
        const btn = document.createElement("button");
        
        div.setAttribute("class","carro");
        div.setAttribute("data-nome",c.getNome());
        
        btn.innerHTML = "Remover";
        btn.setAttribute("class","remover");

        btn.addEventListener("click",(evento)=>{
            const quemRemover = evento.target.parentNode.dataset.nome;
            removerCarro(quemRemover);
            gerenciarCarros();
        });

        div.innerHTML = `Nome: ${c.getNome()} </br>`;
        div.innerHTML+= `Portas: ${c.getPortas()} </br>`;
        div.innerHTML+= `Cor: ${c.getCor()} </br>`;
        div.innerHTML+= `Blindagem: ${c.blindagem} </br>`;
        div.innerHTML+= `Munição: ${c.municao} </br>`;
        div.appendChild(btn);

        carros.appendChild(div);
    });
}

tipoMilitar.addEventListener("click",(evt)=>{
    blindagem.removeAttribute("disabled");
    municao.removeAttribute("disabled");

    nome.value = "";
    cor.value = "";
    portas.value = "";
    blindagem.value = "";
    municao.value = "";

});

tipoNormal.addEventListener("click",(evt)=>{
    blindagem.setAttribute("disabled","disabled");
    municao.setAttribute("disabled","disabled");

    nome.value = "";
    cor.value = "";
    portas.value = "";
    blindagem.value = "";
    municao.value = "";
});

btnAddCarro.addEventListener("click",(evt)=>{
    if(tipoNormal.checked){
        let n1 = new Carro(nome.value,portas.value);
        n1.setCor(cor.value);
        veiculos.push(n1);
    }
    else{
        let m1 = new Militar(nome.value, portas.value, blindagem.value, municao.value);
        m1.setCor(cor.value);
        veiculos.push(m1);
    }
    gerenciarCarros();
});

class Carro{ // CLASSE PAI
    constructor(nome,portas){
        this.nome = nome;
        this.portas = portas;
        this.ligado = false;
        this.velocidade = 0;
        this.cor = undefined;
    }

    ligar = function(){
        this.ligado = true;
    }

    desligar = function(){
        this.ligado = false;
    }

    getNome = function(){
        return this.nome;
    }

    setNome = function(nome){
        this.nome = nome;
    }
    getPortas = function(){
        return this.portas;
    }

    setPortas = function(portas){
        this.portas = portas;
    }
    getVel = function(){
        return this.velocidade;
    }

    setVel= function(velocidade){
        if(this.ligado == false){
            console.log("Impossivel setar velocidade com o veiculo desligado");
        }
        else{
            this.velocidade = velocidade;
        }
    }

    getCor = function(){
        return this.cor;
    }

    setCor = function(cor){
        this.cor = cor;
    }

    getLigado = function(){
        return this.ligado;
    }
}

class Militar extends Carro{
    constructor(nome, portas,blindagem,municao){
        super(nome,portas); // Tem q usar esse super pra pegar os atributos da classe pai 
        this.blindagem = blindagem;
        this.municao = municao;
        this.setCor("Verde");
    }

    atirar = function(){
        if(this.municao > 0){
            this.municao--;
        }
    }

    getBlindagem = function(){
        return this.blindagem;
    }

    setBlindagem = function(blindagem){
        this.blindagem = blindagem;
    }

    getMunicao = function(){
        return this.municao;
    }

    setMunicao = function(municao){
        this.municao = municao;
    }
}