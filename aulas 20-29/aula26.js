// FUNÇÕES ANINHADAS (UMA DENTRO DA OUTRA)

const Somar =val=>{
    let res = 0;
    for(c of val){
        res+=c
    }
    return res;
}
const Soma =(...valores)=>{
    return Somar(valores);
}


console.log(Soma(10,5,15));