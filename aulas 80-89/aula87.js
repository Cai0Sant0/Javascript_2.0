//APRENDENDO SOBRE REDIRECIONAMENTO DE PÁGINA E NAVEGAÇÃO NO HISTÓRICO

const url = document.querySelector("#url");
const boatoUrl = document.querySelector("#btn_url");

boatoUrl.addEventListener("click",(evento)=>{
    //window.location = "https://www.google.com.br"; --> ESSE COMANDO SERVE PARA REDIRECIONAR PARA OUTRA PÁGINA
   // window.location.replace("https://www.google.com.br");  -->  DELETA A URL CORRENTE DO HISTÓRICO
   // window.location.assign("https://www.google.com.br");  --> QUASE A MESMA FUNÇÃO QUE O REPLACE MAS NÃO DELETA A URL CORRENTE DO HISTÓRICO
   //window.location.reload();  --> RECARREGA A PÁGINA
   //window.history.back();  --> VOLTAR A PÁGINA ANTERIOR
   //window.history.forward();   --> VAI PARA A PÁGINA SEGUINTE
   //console.log(window.history.length); --> PEGA O TAMANHO DO HISTÓRICO
   //window.history.go(1); --> O GO SERVE PARA NAVEGADOR O NÚMERO DE PÁGINAS SELECIONADAS EXEMPLO 1 ELE ANDA UMA PAG PRA FRENTE 

   window.location = url.value;
});