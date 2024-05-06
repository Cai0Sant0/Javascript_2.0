// EXERCICÍO AULA 133
// CRIANDO HEADER REAPROVEITÁVEL (PT.01)

const head = document.head;
const body = document.body;

const estilo = "<link rel='stylesheet' href='topo133.css'>"; // DA PARA ANEXAR O CSS PELO JS SÓ TRANSFORMAR EM STRING

head.innerHTML+= estilo;

const topo = document.createElement("header");
topo.setAttribute("id","topo");
topo.setAttribute("class","topo");

body.prepend(topo);

// PREPEND --> ANEXA NO INÍCIO
// APPEND OU APPENDCHILD --> ANEXA NO FINAL

const logo = 
    "<div id= 'logo' class= 'logo'>"+ 
"<img src = 'img/calculadora.png' title = 'Logo'/>"+
    "</div>";

topo.innerHTML += logo;

const login =
    "<div id= 'login' class= 'login'>"+
        "<p id = 'matricula'> Matricula: <span></span> </p>"+
        "<p id = 'nome'> Nome: <span></span> </p>"+
    "</div>";

topo.innerHTML += login;