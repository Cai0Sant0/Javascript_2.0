// ORIENTAÇÃO A OBJETO EM JS

class Carro{
    constructor(cnome, ctipo){
        this.cnome = cnome;
        if(ctipo == 1){
            this.ctipo = "Esportivo";
            this.velmax = 300;
        }
        else if (ctipo == 2){
            this.ctipo = "Utilitário";
            this.velmax = 100;

        }
        else if(ctipo == 3){
            this.ctipo = "Passeio";
            this.velmax = 160;

        }
        else{
            this.ctipo = "Militar";
            this.velmax = 180;
        }
    }

    getNome(){
        return this.cnome;
    }
    getTipo(){
        return this.ctipo;
    }
    getVelMax(){
        return this.velmax;
    }

    getInfo(){
        return [this.cnome, this.ctipo, this.velmax];
    }

    setNome(nome){
        this.cnome = nome;
    }

    setTipo(tipo){
        this.ctipo = tipo;
    }

    setVelMax(velmax){
        this.velmax = velmax;
    }

    info(){
        console.log(`Nome: ${this.cnome}`);
        console.log(`Tipo: ${this.ctipo}`);
        console.log(`V.Max: ${this.velmax}`);
        console.log("----------------------------------")
    }
}


let c1 = new Carro("Rapidão", 1);
let c2 = new Carro("Super", 2);
let c3 = new Carro("Bombadão", 4);
let c4 = new Carro("Carrego tudo", 3);


// console.log(c1.getInfo()[0]);

c1.setNome("Super Veloz");
c1.setVelMax(500);
c1.info();
