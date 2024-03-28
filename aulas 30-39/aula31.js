// DOM (getElementByTagName)

const colecaoHTML =[...document.getElementsByTagName("div")];

console.log(colecaoHTML);

colecaoHTML.map((elemento)=>{
    console.log(elemento);
})