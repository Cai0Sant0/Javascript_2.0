// APRENDENDO SOBRE A FUNÇÃO getBoundingClientRect()

const q1 = document.querySelector("#q1");
const q2 = document.querySelector("#q2");
const posx = document.querySelector("#posx");
const posy = document.querySelector("#posy");
const largura = document.querySelector("#largura");
const altura = document.querySelector("#altura");

q1.addEventListener("click",()=>{
    let DOMrect_q1 = q1.getBoundingClientRect();

    posx.innerHTML = `Pos x: ${DOMrect_q1.x}`;
    posy.innerHTML = `Pos y: ${DOMrect_q1.y}`;
    largura.innerHTML = `Largura: ${DOMrect_q1.width}`;
    altura.innerHTML = `Altura: ${DOMrect_q1.height}`;
});

q2.addEventListener("click",()=>{
    let DOMrect_q2 = q2.getBoundingClientRect();

    posx.innerHTML = `Pos x: ${DOMrect_q2.x}`;
    posy.innerHTML = `Pos y: ${DOMrect_q2.y}`;
    largura.innerHTML = `Largura: ${DOMrect_q2.width}`;
    altura.innerHTML = `Altura: ${DOMrect_q2.height}`;
});