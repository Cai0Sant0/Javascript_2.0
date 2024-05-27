// SIMULANDO EVENTOS EM VARIÁVEIS COM GET E SET

const p_temp = document.querySelector("#p_temp");
const p_nivel = document.querySelector("#p_nivel");
const p_press = document.querySelector("#p_press");

let dados = {
    _temperatura: 0,
    _pressao: 0,
    _nivel: 0,
    set valores(val){
        this._temperatura = val.temperatura;
        this._nivel = val.nivel;
        this._pressao = val.pressao;

        p_nivel.innerHTML = `Nivel: ${this.valores[1]}`;////////
        p_temp.innerHTML = `Temperatura: ${this.valores[0]}`; // Pegando os valores do get Valores, ele retorna uma Array 
        p_press.innerHTML = `Pressão: ${this.valores[2]}`;//////
    },
    get valores(){
        return [this._temperatura, this._nivel, this._pressao];
    }
}



const endpoint = "https://75711e3d-404a-453c-abdf-3223a84e41a3-00-qqqhyklasa7r.picard.replit.dev/";
const obterDados=()=>{
    fetch(endpoint) 
    .then(res => res.json()) 
    .then(res =>{
       dados.valores = res; // O FETCH NÃO ESTÁ ALTERANDO OS VALORES NO DOM E SIM O OBJETO DADOS
    });
}

//let intervalo = setInterval(obterDados,3000);