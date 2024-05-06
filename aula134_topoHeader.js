// EXERCICÍO AULA 134
// CRIANDO HEADER REAPROVEITÁVEL (PT.02)

const body = document.body;

const formatPadrao = 
    "padding: 0px;"+
    "border: none;"+
    "margin: 0px;";

    body.setAttribute("style", formatPadrao);
    
    const estiloTopo =
    "display: flex;"+
    "justify-content: space-evenly;"+
    "align-items: center;"+
    "background-color: #eee; ";
    
    const topo = document.createElement("header");
    topo.setAttribute("id","topo");
    topo.setAttribute("style",estiloTopo); // AQUI INVÉS DE COLOCAR UMA CLASS EU COLOCO STYLE PARA FAZER O ESTILO INLINE
    
    body.prepend(topo);
    
    const estiloLogo =
    "height: 50px;";
    
    const logo = 
    "<div id= 'logo' class= 'logo'>"+ 
    "<img src = 'img/calculadora.png' title = 'Logo' style ='"+estiloLogo+"'/>"+
    "</div>";
    
    topo.innerHTML += logo;
    
const login =
    "<div id= 'login' class= 'login'>"+
        "<p id = 'matricula'> Matricula: <span></span> </p>"+
        "<p id = 'nome'> Nome: <span></span> </p>"+
    "</div>";

topo.innerHTML += login;

//CRIANDO ESTILOS COM JS SEM O USO DE CSS