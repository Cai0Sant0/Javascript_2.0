// ENTENDENDO PROMISE

const numero = document.getElementById("numero");

let promessa = new Promise((resolvido,rejeitado)=>{
    let resultado = true;
    let tempo = 3000;

    setTimeout(()=>{
        if(resultado){
            resolvido("Deu tudo certo");
        }
        else{
            rejeitado("Deu tudo errado");
        }
    }, tempo);
});

promessa.then((retorno)=>{  //Para chamar a promessa caso de certo e retornar o valor do resolvido
    numero.innerHTML = retorno;
    numero.classList.remove("erro");
    numero.classList.add("ok");
});         
promessa.catch((retorno)=>{  //Para chamar a promessa caso de errado e retornar o valor do rejeitado
    numero.innerHTML = retorno
    numero.classList.add("erro");
    numero.classList.remove("ok");
});                             

numero.innerHTML = "Processando...";