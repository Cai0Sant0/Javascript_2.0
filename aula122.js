// APRENDENDO SOBRE FETCH PARA CONSUMO DE API's

const endpoint = "https://75711e3d-404a-453c-abdf-3223a84e41a3-00-qqqhyklasa7r.picard.replit.dev/";

fetch(endpoint) // Caminho da "API" e não usa ponto e virgula depois do fetch
.then(res => res.json()) // RESPOSTA DA "API"
.then(dados => console.log(dados)); // ESSE SEGUNDO THEN JÁ VEM COM OS DADOS MODIFICADOS DO PRIMEIRO THEN
