// APRENDENDO SOBRE FETCH PARA CONSUMO DE API's (PT.5) -> Lendo arquivos

const texto = document.getElementById("texto");

const endpoint = "arquivo_txt_aula127/127.txt";

fetch(endpoint) // AQUI JÁ LEU O ARQUIVO
.then(res=> res.text())
.then(res => {
    res = JSON.parse(res);
    console.log(res);
    console.log(res.canal);
    console.log(res.curso);
})