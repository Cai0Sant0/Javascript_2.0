//ONDE PONTO E VÍRGULA É OBRIGATÓRIO EM JS (PT.2)

let i = null; i = 0; // TEM QUE COLOCAR PONTO E VIRGULA PARA O INTEPRETADOR ENTENDER QUE A DECLARAÇÃO ACABOU

console.log(i);

let nome = "caio"; // SE NA PRÓXIMA LINHA VEM UM () OU [] O PONTO E VÍRGULA É OBRIGATÓRIO
["c", "a", "i", "O"].forEach(element=> console.log(element));

let n = null;
(n=10);
console.log(n);

let num = {
    n1:10,
    n2:20,
    n3:30
}

let {n1,n2,n3} = num;
console.log(n1);
console.log(n2);
console.log(n3);