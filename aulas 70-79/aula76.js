// ENTENDENDO PROMISE PT.2

const numero = document.getElementById("numero");
const botaoPromessa = document.getElementById("btn_prome");

botaoPromessa.addEventListener("click",(evento)=>{
    numero.innerHTML = "Processando...";
    console.log(promessa());
    // .then((retorno)=>{
    //     numero.innerHTML = retorno;
    //     numero.classList.remove("erro");
    //     numero.classList.add("ok");
    // })                              // EU POSSO USAR O THEN E O CATCH FORA DA FUNÇÃO PARA PEGAR O RESULTADO(POSITIVO OU NEGATIVO)
    // .catch((retorno)=>{
    //     numero.innerHTML = retorno;
    //     numero.classList.add("erro");
    //     numero.classList.remove("ok");
    // });
});

const promessa = ()=>{ // COLOCANDO A PROMISE DENTRO DE UMA FUNÇÃO PARA CHAMAR ELA A QUALQUER HORA
    let promessa = new Promise((resolvido,rejeitado)=>{
        let resultado = false;
        let tempo = 3000;
    
        setTimeout(()=>{
            if(resultado){
                resolvido("Deu tudo certo");
                numero.innerHTML = "Deu tudo certo";
                numero.classList.remove("erro");
                numero.classList.add("ok");
            }
            else{
                rejeitado("Deu tudo errado")
                numero.innerHTML = "Deu tudo errado";
                numero.classList.add("erro");
                numero.classList.remove("ok");
            }
        }, tempo);
    });
    return promessa;            // EU TENHO QUE POR RETURN QUANDO COLOCAR O THEN E O CATCH FORA DA FUNÇÃO POIS ELES PRECISAM DO VALOR RETORNADO
}

numero.innerHTML = "Esperando...";