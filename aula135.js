// CRIANDO CAIXA DE MENSAGEM PERSONALIZADA (aulas 135 a 139)

const config ={
    cor : "#48f"
}

const cxmsg =new Cxmsg(config);


const botaoCx01 = document.querySelector("#btn_caixa1");
const botaoCx02 = document.querySelector("#btn_caixa2");
const botaoCx03 = document.querySelector("#btn_caixa3");

botaoCx01.addEventListener("click",()=>{
    cxmsg.mostrar("Caio","Curso JS");
});

botaoCx02.addEventListener("click",()=>{
    cxmsg.mostrar("ba","Testando...");
});

botaoCx03.addEventListener("click",()=>{
    cxmsg.mostrar("600","Deu certo :)");
});