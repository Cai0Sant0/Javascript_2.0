//CAIXA DE MENSAGEM PERSONALIZADA

class Cxmsg{
   static cor = "#888";
   static destino = null;
   static divmsg = null;

   static config = (config)=>{
    this.cor = config.cor
   }
    
   static mostrar=(titulo,texto)=>{
    this.destino = document.body;
    this.titulo = titulo;
    this.texto = texto;
    this.divmsg = document.createElement("div");

    const estilo_divmsg = 
    "display: flex;"+
    "justify-content: center;"+
    "align-items: center;"+
    "position: absolute;"+
    "top: 0px;"+
    "left: 0px;"+
    "width: 100%;"+
    "height: 100vh;"+
    "background-color: rgba(0,0,0,0.7);";

    this.divmsg.setAttribute("id","divmsg");
    this.divmsg.setAttribute("style", estilo_divmsg);
    this.destino.prepend(this.divmsg);

    let areaCaixaMsg = document.createElement("div");

    const estilo_areaCaixaMsg =
    "display: flex;"+
    "justify-content: flex-start;"+
    "align-items: flex-start;"+
    "flex-direction: column;"+
    "width: 300px";

    areaCaixaMsg.setAttribute("style", estilo_areaCaixaMsg);

    this.divmsg.appendChild(areaCaixaMsg);

    let divTitulo = document.createElement("div");

    const estiloTitulo = 
    "display: flex;"+
    "justify-content: flex-start"+
    "align-items: center;"+
    "width: 100%;"+
    "background-color:"+this.cor+";"+
    "color:#fff;"+
    "padding:5px;"+
    "border-radius: 5px 5px 0px 0px;";

    divTitulo.setAttribute("style", estiloTitulo);
    divTitulo.innerHTML = titulo;
    areaCaixaMsg.appendChild(divTitulo);

    let corpoCaixa = document.createElement("div");
    
    const estilocorpoCaixa = 
    "display: flex;"+
    "justify-content: flex-start;"+
    "align-items: center;"+
    "width: 100%;"+
    "background-color: #eee;"+
    "color: #000;"+
    "padding: 30px 5px;";

    corpoCaixa.setAttribute("style",estilocorpoCaixa);
    corpoCaixa.innerHTML = texto;
    areaCaixaMsg.appendChild(corpoCaixa);

    
    
    
    let rodapeCaixa = document.createElement("div");
    
    const estilorodape = 
    "display: flex;"+
    "justify-content: space-around;"+
    "align-items: center;"+
    "width: 100%;"+
    "background-color: #ccc;"+
    "color: #000;"+
    "padding: 5px;"+
    "border-radius: 0px 0px 5px 5px;";
    
    
    rodapeCaixa.setAttribute("style",estilorodape);
    areaCaixaMsg.appendChild(rodapeCaixa);
    
    const btn_ok = document.createElement("button");
    
    const estilo_btn =
    "background-color:"+this.cor+";"+
    "color:#fff;"+
    "padding: 10px 50px;"+
    "border-radius: 5px;"+
    "cursor: pointer;"+
    "text-transform: uppercase;";

    btn_ok.setAttribute("style", estilo_btn);
    btn_ok.innerHTML = "Ok";

    btn_ok.addEventListener("click",(evt)=>{
        this.ocultar();
    });

    rodapeCaixa.appendChild(btn_ok);
    
};

   static ocultar=()=>{
      this.divmsg.remove();
   }
}

export {Cxmsg}