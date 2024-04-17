// O QUE É  LocalStorage E SessionStorage

//Session se a página é fechada limpa os dados já o localStorage salva

const f_texto = document.querySelector("#f_texto");
const  p_texto = document.querySelector("#p_texto");
const btn_texto = document.querySelector("#btn_texto");

// let num = 10;
// window.localStorage.setItem("número",num); //tem que setar chave e valor
// localStorage.setItem("número",18);

localStorage.setItem("nome","caio");
localStorage.setItem("curso","CFB Cursos");

// alert(localStorage.getItem(localStorage.key(1)));
// alert(localStorage.length);



// console.log(localStorage.getItem("número"));

// localStorage.clear(); // Para limpar

localStorage.clear();

sessionStorage.setItem("nome", "Caio");
sessionStorage.setItem("idade", 18);

alert(sessionStorage.key(1));