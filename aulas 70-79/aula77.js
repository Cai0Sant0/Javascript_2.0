// APRENDENDO SOBRE MANIPULAÇÃO DE DATA

const div_dta = document.querySelector("#div_data");
const div_relogio = document.querySelector("#div_relogio");

const data = new Date();
let dia = data.getDate();
dia= dia < 10? "0"+ data.getDate() : data.getDate();

let mes = data.getMonth();
mes = mes < 10? "0"+ data.getMonth() : data.getMonth()

const data_r = `${dia}/${mes==0?"01":data.getMonth()}/${data.getFullYear()}`; 

div_dta.innerHTML = data_r;

const relogio = () =>{
    const data = new Date(); // tem que instaciar ele aqui na função se não da merda :(

    let hora = data.getHours();
    hora = hora < 10 ? "0"+hora : hora;

    let minutos = data.getMinutes();
    minutos = minutos < 10 ? "0"+minutos : minutos;

    let segundos = data.getSeconds();
    segundos = segundos < 10 ? "0"+segundos : segundos;

    const hora_formatada = hora+":"+minutos+":"+segundos;

    div_relogio.innerHTML = hora_formatada;
}

const intervalo = setInterval(relogio,1000); // tempo em milisegundos   1000 milisegundos = 1 segundo 




// getDate() = Dia do mês;
// getDay() = Dia da semana (número);
// getFullYear() = Ano com 4 dígitos;
// getHours() = Horas;
// getMilliseconds() = Milisegundos;
// getMinutes() = Minutos;
// getMonth() = Mês;
// getSeconds() = Segundos;
// getTime() = Timestamp (milisegundos desde 1 de janeiro de 1970, 00:00:00 UTC);
// Date.now() = Timestamp (milisegundos desde 1 de janeiro de 1970, 00:00:00 UTC);
// getTimezoneOffset() = Timezone da localidade;
// setDate() = Define um dia do mês para a data;
// setMonth() = Define um mês para a data;
// setFullYear() = Define um ano para a data;
// setHours() = Define horas;
// setMinutes() = Define minutos;
// setSeconds() = Define segundos;
// setMilliseconds = Define milisegundos;
// toDateString() = Retorna somente a data;
