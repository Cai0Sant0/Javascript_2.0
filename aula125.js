// APRENDENDO SOBRE FETCH PARA CONSUMO DE API's (PT.4) -> ENVIANDO DADOS E PEGANDO COM NODE RED

const p_temp = document.querySelector("#p_temp");
const p_nivel = document.querySelector("#p_nivel");
const p_press = document.querySelector("#p_press");
const botao = document.getElementById("btn_texto");

const endpoint = "http://127.0.0.1:1880/cfbcursos"; // ENDPOINT DO NODE RED

const obterDados=()=>{
    fetch(endpoint,{method:"get"}) // Caminho da "API" e não usa ponto e virgula depois do fetch
    .then(res => res.json()) // RESPOSTA DA "API"
    .then(dados =>{
        console.log(dados);
        p_temp.innerHTML = "Temperatura: "+dados.temperatura;
        p_nivel.innerHTML = "Nível: "+dados.nivel;
        p_press.innerHTML = "Pressão: "+dados.pressao;
    }); // ESSE SEGUNDO THEN JÁ VEM COM OS DADOS MODIFICADOS DO PRIMEIRO THEN
}

    let intervalo = setInterval(obterDados,3000);

    let dados = {
        nome: "Caio",
        idade: "17",
        curso: "JS"
    }

    let cabecalho = { // AQUI PREPARA OS DADOS OS CONVERTENDO EM JSON E OS COLOCANDO NO BODY
        method : "POST", // O MÉTODO É EXTREMAMENTE IMPORTANTE NESSE CASO ELA ESTÁ ENVIANDO "POST", POR PADRÃO É GET (PEGAR)
        body: JSON.stringify(dados)
    }

    const enviarDados = ()=>{
        const endpoint = "http://127.0.0.1:1880/gravar";  // ENDPOINT DO NODE RED
        fetch(endpoint, cabecalho)
        .then(res => res.json())  // TRANSFORMANDO OS DADOS EM JSON
        .then(ret =>{
            console.log(ret);
        })
    }

    botao.addEventListener("click",()=>{
        enviarDados();
    });
