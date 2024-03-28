// APROFUNDAMENTO EM OBJETOS LITERAIS  PT.2

const objetos = document.querySelector("#objetos");

const computador = {
    cpu:"",
    ram:"",
    hd:"",

    info: function(){
        console.log(`CPU: ${this.cpu}`);
        console.log(`RAM: ${this.ram}`);
        console.log(`HD: ${this.hd}`);
    }
};

console.log(computador);
computador["monitor"] = "22pol"; 
computador.placaVideo = "RTX"; 
delete(computador.hd); // DELETAR UM ATRIBUTO DE UM OBJETO

const c1 = Object.assign({},computador); // USE ESSE MÉTODO PARA CLONAR UM OBJETO, NESSE EXEPLO C1 É CÓPIA DO COMPUTADOR
c1.info();

const c2 = Object.create(computador); // ESSE MÉTODO SERVE PARA CRIAR UM OBJETO COM BASE EM OUTRO OBEJTO UM TIPO DE "INSTANCIAÇÃO"
c2.cpu = "i9";
c2.ram = "32gb";
c2.hd = "2tb";
c2.info();


const o1 = {
    obj1: 1
}

const o2 = {
    obj2: 1
}

const o3 = {
    obj3: 1
}

const o4 = Object.assign(o1,o2,o3); // USANDO O MÉTOSO ASSIGN PELA CLASS OBJECT DA PARA MESCLAR DIFRENTES OBJETOS EM APENAS UM

console.log(o4);

const computadores = [
    {
        cpu:"i5",
        ram:"32gb",
        hd:"2tb",
    },
    {
        cpu:"i7",
        ram:"62gb",
        hd:"2tb",
    },
    {
        cpu:"i9",
        ram:"64gb",
        hd:"2tb",
    },
];

computadores.map((comp)=>{
    //console.log(comp);
    const div = document.createElement("div");
    div.innerHTML = `${comp.cpu} <br> ${comp.ram} <br> ${comp.hd}`;
    div.setAttribute("class","computador");
    objetos.appendChild(div);
});

// computador.info();
// objetos.innerHTML = JSON.stringify(computadores);
// console.log(computadores);