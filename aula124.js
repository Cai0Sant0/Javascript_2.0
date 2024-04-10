// APRENDENDO SOBRE FETCH PARA CONSUMO DE API's (PT.3) -> ENVIANDO DADOS PARA UMA API

const p_temp = document.querySelector("#p_temp");
const p_nivel = document.querySelector("#p_nivel");
const p_press = document.querySelector("#p_press");
const botao = document.getElementById("btn_texto");

const endpoint = "https://75711e3d-404a-453c-abdf-3223a84e41a3-00-qqqhyklasa7r.picard.replit.dev/";

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
        const endpoint = "https://75711e3d-404a-453c-abdf-3223a84e41a3-00-qqqhyklasa7r.picard.replit.dev/";
        fetch(endpoint, cabecalho)
        .then(res => res.json())  // TRANSFORMANDO OS DADOS EM JSON
        .then(ret =>{
            console.log(ret);
        })
    }

    botao.addEventListener("click",()=>{
        enviarDados();
    });

//let intervalo = setInterval(obterDados,3000); // QUANDO USA SET INTERVAL NÃO PRECISA COLOCAR () NA FUNÇÃO
