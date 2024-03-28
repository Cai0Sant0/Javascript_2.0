//FUNÇÃO GERADORA

/*function* Cores(){
    yield 'Vermelho';
    yield 'Verde';
    yield 'Azul';
}

const itc = Cores();
console.log(itc.next().value);
console.log(itc.next().value);
console.log(itc.next().value);*/

/*function* Perguntas(){
    const nome = yield 'Qual seu nome?';
    const esporte = yield 'Qual seu esporte favorito?';
    return 'Seu nome é '+nome+ ' e seu esporte favorito é '+esporte;
}

const itcp= Perguntas();

console.log(itcp.next().value);
console.log(itcp.next("Caio").value);
console.log(itcp.next("Karate").value);*/

function* Contador(){
    let i = 1;
    while(true){
        yield i++
        if(i>10){
            break;
        }
    }
}

const itc = Contador();
for(let c of itc){
    console.log(c);
}