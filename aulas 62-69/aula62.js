// HERANÇA EM JS

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

const c1 = new Carro("Normal",4);
const c2 = new Militar("Tanque",1,100,50);

c1.ligar();
c1.setCor("preto");

for(let c = 0; c<10; c++){
    c2.atirar(); // Vai tirar muniçao
}


console.log(`Nome do carro: ${ c1.getNome()}`);
console.log(`Quantidade de portas: ${ c1.getPortas()}`);
console.log(`Ligado: ${ (c1.getLigado()?"sim":"não")}`);
console.log(`Velocidade: ${ c1.getVel()}`);
console.log(`Cor: ${ c1.getCor()}`);
console.log("------------------------------------------------");

console.log(`Nome do carro: ${ c2.getNome()}`);
console.log(`Quantidade de portas: ${ c2.getPortas()}`);
console.log(`Ligado: ${ (c2.getLigado()?"sim":"não")}`);
console.log(`Velocidade: ${ c2.getVel()}`);
console.log(`Cor: ${ c2.getCor()}`);
console.log(`Blindagem: ${c2.getBlindagem()}`);
console.log(`Munição: ${c2.getMunicao()}`);
console.log("------------------------------------------------");

