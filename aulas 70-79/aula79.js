// CRIANDO UM TIMER COM ALARME

const div_dta = document.querySelector("#div_data");
const div_relogio = document.querySelector("#div_relogio");
const botaoAtivar = document.querySelector("#btn_ativar");
const botaoPara = document.querySelector("#btn_parar");
const tempoAlarme = document.querySelector("#tmp_alarme");
const hora_alarme =  document.querySelector("#hora_alarme");
const timer = document.querySelector("#timer");

const som_alarme2 = new Audio("../audios_alarme/pinkFloyd.mp3");

som_alarme2.loop = -1;  // LOOP INFINITO

let ts_atual = null;
let ts_alarme = null;
let alarme_ativado = false;
let alarme_tocando = false;

botaoAtivar.addEventListener("click",()=>{
    ts_atual = Date.now();
    ts_alarme = ts_atual+(tempoAlarme.value*1000); // USA O TIMESTAMP PRA FAZER O TIMER
    alarme_ativado = true;
    let dt_alarme  = new Date(ts_alarme);

    let hora = dt_alarme.getHours() < 10 ? "0"+dt_alarme.getHours(): dt_alarme.getHours();
    let minutos = dt_alarme.getMinutes() < 10 ? "0"+dt_alarme.getMinutes(): dt_alarme.getMinutes();
    let segundos = dt_alarme.getSeconds() < 10 ? "0"+dt_alarme.getSeconds(): dt_alarme.getSeconds();

    hora_alarme.innerHTML = `Hora do Alarme: ${hora}:${minutos}:${segundos}`;
});

botaoPara.addEventListener("click",()=>{
    alarme_ativado = false;
    alarme_tocando = false;
    hora_alarme.innerHTML = "Hora do Alarme:";
    tempoAlarme.value = 0;
    timer.classList.remove("alarme");
    som_alarme2.pause();
    som_alarme2.currentTime = 0;  // REBOBINANDO O ÁUDIO
});

const data = new Date();
let dia = data.getDate();
dia= dia < 10? "0"+ data.getDate() : data.getDate();

let mes = data.getMonth();
mes = mes < 10? "0"+ data.getMonth() : data.getMonth()

const data_r = `${dia}/${mes==0?"01":data.getMonth()}/${data.getFullYear()}`; 

div_dta.innerHTML = data_r;

const relogio = () =>{
    const data = new Date(); 

    let hora = data.getHours();
    hora = hora < 10 ? "0"+hora : hora;

    let minutos = data.getMinutes();
    minutos = minutos < 10 ? "0"+minutos : minutos;

    let segundos = data.getSeconds();
    segundos = segundos < 10 ? "0"+segundos : segundos;

    const hora_formatada = hora+":"+minutos+":"+segundos;

    div_relogio.innerHTML = hora_formatada;

    if(alarme_ativado && !alarme_tocando){ // SE TIVER ATIVADO E NÃO TOCANDO EXECUTA
        if(data.getTime() > ts_alarme){  // USO ESSE IF PARA O ALARME TOCAR NO MOMENTO EXATO QUE EU ESTIPULEI
            alarme_tocando = true;
            som_alarme2.play();
            timer.classList.add("alarme");
        }
    }
}

const intervalo = setInterval(relogio,1000); 