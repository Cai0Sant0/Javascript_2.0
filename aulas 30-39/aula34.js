// AddEventListener (EVENTOS EM JS)

// const c1 = document.querySelector("#c1");

const cursos = [...document.querySelectorAll("div")];

cursos.map((elemento)=>{
    elemento.addEventListener("click",(evento)=>{
        const el = evento.target;
        el.classList.add("destaque");
        console.log(el.innerHTML + " foi clicado");
    })
})

// const msg = ()=>{
//     alert("Olá mundo");
// }

// c1.addEventListener("click",(evt)=>{
//     const elemento  = evt.target;
//     elemento.classList.add("destaque");
// });
