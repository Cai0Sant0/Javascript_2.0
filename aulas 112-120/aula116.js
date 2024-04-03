// APRENDENDO SOBRE GEOLOCALIZAÇÃO NO JAVASCRIPT

const long = document.getElementById("long");
const lati = document.getElementById("lati");

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(mostrarLocalizacao,erroLocalizacao);
}
else{
    console.log("Geolocalização não suportada");
}

function mostrarLocalizacao(pos){
    [long.innerHTML,lati.innerHTML] = [` Longitude: ${pos.coords.longitude}`, ` Latitude: ${pos.coords.latitude}`];
}

function erroLocalizacao(pos){
    console.log("Erro ao obter a localização");
}

