//faça um programa que imprima na tela a tabuafa de um numero
//qualquer escolhoido pelo usuario

let tabuadaEscolhida = parseInt(prompt("Digite o numero da tabuada desejada: "));
//1 numero dentro da condição do for - inicializãoção - variavel
//2 numero dentro da condição do for - condição - verifica a volta da variavel
//3 numero da condição do for - incremento - soma as voltas
// i ++ igual a i = 1+1 

console.log(` =======TABUADA ${tabuadaEscolhida}=======`)

for( let i = 1;i <= 10; i ++){ 
//.   2x 4 = ?
console.log(tabuadaEscolhida + " x " + i + " = " + (tabuadaEscolhida * i ));
}