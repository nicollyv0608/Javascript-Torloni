function exibirTabuadaEscollhida(){
    let tabuadaEscolhida = parseInt(prompt("Digite o numero da tabuada desejada: "));

    console.log(` =======TABUADA ${tabuadaEscolhida}=======`)

for( let i = 1;i <= 10; i ++){ 
//.   2x 4 = ?
console.log(tabuadaEscolhida + " x " + i + " = " + (tabuadaEscolhida * i ));
}
}

exibirTabuadaEscollhida();{
//crie uma função para que solicitada o nome e exiba-llo
}
function exibitnomesolicitado(){
let nomesolicitado = prompt("Digite seu nome");

return nomesolicitado;
}

let nome = exibitnomesolicitado();

alert(nome);

function somarDoisNumeros(numero1 ,numero2) {
 console.log(numero1+numero2);   
}
somarDoisnumeros(10, 10);

//crie função para o exercicio 08 de estrutura condicional
//passe via parametro o peso e a altra

function calcularIMC(peso,altura){ 

let imc = peso / (altura * altura);ß

let classificacao = "";

if (imc < 18.5) {
    classificacao = "Abaixo do peso";
} else if (imc >= 18.5 && imc <= 24.9) {
    classificacao = "Peso normal";
} else if (imc >= 25.0 && imc <= 29.9) {
    classificacao = "Sobrepeso";
} else if (imc >= 30.0 && imc <= 34.9) {
    classificacao = "Obesidade grau 1";
} else if (imc >= 35.0 && imc <= 39.9) {
    classificacao = "Obesidade grau 2";
} else {
    classificacao = "Obesidade grau 3";
}
}
let peso = parseFloat(prompt("Digite seu peso em kg:"));
let altura = parseFloat(prompt("Digite sua altura em metros:"));
calcularIMC(pesoDigitado, alturaDigitado);
