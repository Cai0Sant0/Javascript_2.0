// ABSTRACT EM JS

class CarroPadrao{
    constructor(){
        if(this.constructor === CarroPadrao){
            throw new TypeError("Esta classe não pode ser instanciada"); // Você torna a classe "abstrata" por meio de um erro
        }
        if(this.ligar === undefined){
            throw new TypeError("É obrigatório a implementação do método ligar"); // Usando esse jeito vc pode obrigar o instanciamento de métodos
        }
        if(this.desligar === undefined){
            throw new TypeError("É obrigatório a implementação do método desligar");
        }
        this.rodas = 4;
        this.portas = 4;
        this.ligado = false;
    }
}

class Carro extends CarroPadrao{
    constructor(tipo,estagioTurbo){
        super();
        this.turbo = new Turbo(estagioTurbo);
        if(tipo == 1){
            this.velMax = 120;
            this.nome = "Normal";
        }
        else if(tipo ==2){
            this.velMax = 160;
            this.nome = "Esportivo";
        }
        else if(tipo ==3){
            this.velMax = 200;
            this.nome = "Super esportivo";
        }
        this.velMax += this.turbo.potencia;
    }

    info(){
        console.log(`Nome: ${this.nome}`);
        console.log(`Velmax: ${this.velMax}`);
        console.log(`Turbo: ${this.turbo.potencia}`);
        console.log(`Portas: ${this.portas}`);
        console.log(`Ligado: ${(this.ligado?"Sim":"Não")}`);
        console.log("------------------------------------------");
    }

    ligar(){
        this.ligado = true;
    }
    desligar(){
        this.ligado = false;
    }
}

class Turbo{
    constructor(estagio){
        if(estagio == 0){
            this.potencia = 0;
        }
        else if(estagio==1){
            this.potencia  = 50;
        }
        else if(estagio == 2){
            this.potencia = 75;
        }
        else if(estagio == 3){
            this.potencia = 100;
        }
    }
}

class CarroEspecial extends Carro{
    constructor(estagioTurbo){
        super(4,estagioTurbo);
        this.TipoInfo = 2;
        this.velMax = 300 + this.turbo.potencia;
        this.nome = "Carro Especial"
    }
    info(){
        // super.info();  -> USE ISSO PARA CHAMAR O MÉTODO DA CLASSE PAI
        if(this.TipoInfo == 1){
            super.info();
        }
        else{
        console.log(`Nome....: ${this.nome}`);
        console.log(`Vel.max: ${this.velMax}`);
        console.log(`Turbo.....: ${this.turbo.potencia}`);
        console.log(`Portas ..: ${this.portas}`);
        console.log(`Ligado...: ${(this.ligado?"Sim":"Não")}`);
        console.log("------------------------------------------");
        }
    }
}

const c1 = new Carro(1,0);
const c2 = new Carro(1,1);
const c3 = new CarroEspecial(3);
// const c4 = new CarroPadrao();

c1.ligar();

c1.info();
c2.info();
c3.info();