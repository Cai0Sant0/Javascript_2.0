// CRIANDO CAIXA DE MENSAGEM PERSONALIZADA (PT.01)

const config ={
    titulo :  "teste",
    texto : "CFB Cursos",
    cor : "#48f"
}

const cxmsg =new Cxmsg(config);


const botaoCx = document.querySelector("#btn_caixa");

botaoCx.addEventListener("click",()=>{
    cxmsg.mostrar();
});