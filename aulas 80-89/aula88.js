// APRENDENDO SOBRE CAIXAS DE DIÁLOGO

const alerta = document.querySelector("#btn_alert");
const confirma = document.querySelector("#btn_confirm");
const btn_prompt = document.querySelector("#btn_prompt");

alerta.addEventListener("click",(evento)=>{
    alert(":)");
});

confirma.addEventListener("click",(evento)=>{
     //const retorno = confirm("SE QUER?");
     if(confirm("SE QUER?")){
        console.log("Botão ok pressionado");
     }
     else{
        console.log("Botão cancelar clicado")
     }
});

btn_prompt.addEventListener("click",(evento)=>{
    let c = prompt("Digite algo","escreva aqui");
    if(c==null){
        console.log("Botão CANCELAR pressionado");
    }
    else{
        console.log(`O texto digitado foi: ${c}`)
    }
});