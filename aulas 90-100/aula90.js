// APROFUNDAMENTO EM OBJETOS LITERAIS  

const objetos = document.querySelector("#objetos");

const computador = {
    cpu:"i9",
    ram:"64gb",
    hd:"2tb",

    info: function(){
        console.log(`CPU: ${this.cpu}`);
        console.log(`RAM: ${this.ram}`);
        console.log(`HD: ${this.hd}`);
    }
};

computador["monitor"] = "22pol"; // COLOCANDO UM ATRIBUTO DE UM OBJETO LITERAL FORA DELE
computador.placaVideo = "RTX"; // OUTRO MODO DE COLOCAR UM ATRIBUTO FORA DA CHAMADA DO OBJETO

console.log(computador.monitor);
console.log(computador["placaVideo"]); // JEITOS DIFERENTES PARA FAZER A MESMA COISA

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