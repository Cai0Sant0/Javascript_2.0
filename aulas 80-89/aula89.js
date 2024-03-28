//CRIANDO PDF E IMPRIMINDO CONTEÚDO DA PÁG HTML

const imprimir = document.querySelector("#btn_imp");


imprimir.addEventListener("click",(evento)=>{

    const conteudo = document.querySelector("#tabela").innerHTML;

    let estilo = "<style>";
    estilo += "table {width: 100%; font: 25px Calibri;}";
    estilo += "table, th, td {border: solid 2px #888; border-collapse: collapse;";
    estilo += "padding: 4px 8px; text-align: center;}";
    estilo += "</style>";

    const win = window.open('','','height = 700px, width = 700px');


    win.document.write('<html><head>');
    win.document.write('<title>CFB cursos</title>');
    win.document.write(estilo);
    win.document.write('</head>');
    win.document.write('<body>');
    win.document.write(conteudo);
    win.document.write("</body></html>");

    win.print();
    win.close(); // PRA FECHAR A JANELA APÓS IMPRIMIR OU CANCELAR



   // window.print() ---> PARA IMPRIMIR A PÁGINA ATUAL
});