// ENTENDENDO O USO DO STATIC EM JS

class Npc{
    static alerta = false;
    constructor(energia){
        this.energia = energia;
    }

    info = function(){
        console.log(`Energia:  ${this.energia}`);
        console.log(`Alerta:  ${(Npc.alerta?"Sim":"Não")}`);
        console.log("----------------------------------------------")
    }

    static Alertar = function(){
        Npc.alerta = true;
    }
}

// O STATIC É USADO PARA CRIAR MÉTODOS E ATRIBUTOS PARA CLASSE NÃO APENAS PARA OS OBJETOS INSTANCIADOS DA MESMA

const npc1 = new Npc(100);
const npc2 = new Npc(40);
const npc3 = new Npc(90);

Npc.Alertar();

npc1.info();
npc2.info();
npc3.info();