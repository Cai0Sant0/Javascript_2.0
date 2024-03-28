//PRATICA COM BIBLIOTECA MATH

const olhos = [...document.querySelectorAll(".olho")];

let posicaoX_mouse = 0;
let posicaoY_mouse = 0;

window.addEventListener("mousemove",(evento)=>{ // WINDOW É A JANELA DO NAVEGADOR E MOUSEMOVE É O EVENTO DE MOVER O MOUSE
    posicaoX_mouse = evento.clientX;
    posicaoY_mouse = evento.clientY;
    console.log(posicaoX_mouse);

    const rot = Math.atan2(posicaoY_mouse,posicaoX_mouse)* 180/Math.PI  ; // ARCO TANGENTE DE DOIS COEFICIENTES, RECEBE X E Y E RETORNA A CIRCUFERÊNCIA EM RADIANOS

    

    olhos.map((o)=>{
        o.style.transform = "rotate("+rot+"deg)";
    });
    
});

