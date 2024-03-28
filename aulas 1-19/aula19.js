// BREAK E CONTINUE

let n = 0;
let max = 1000;
let pares = 0;

/*while(n<max){
    console.log(n);
    if(n>=10){
        break;
    }
    n++
}*/

for(let i = n; i<max; i++){
    if(i%2!=0){
        continue;
    }
    pares++;;
}
console.log("Números pares: "+pares);