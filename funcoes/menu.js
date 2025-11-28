//1
function conferirisequencia() {
    let n1 = Number ( prompt(" Digite o primeiro número da sua sequência"));
let n2 = Number ( prompt(" Digite o segundo número da sua sequência"));
let n3 = Number ( prompt(" Digite o terceiro número da sua sequência"));


if ( n1 < n2 && n2 < n3 ) {
     alert(" Os números estão em ordem crescente");
}
 else{
     alert(" Os números não estão em ordem crescente");
}
}
//2
function descontodacpmpra() {
    let valorCompra = Number(prompt("Digite o valor total da compra: "));

let desconto = 0;

if (valorCompra <= 100) {
    desconto = 0;
} else if (valorCompra <= 200) {
    desconto = valorCompra * 0.10;
} else {
    desconto = valorCompra * 0.20;
}

let valorFinal = valorCompra - desconto;

alert("Valor da compra: R$ " + valorCompra.toFixed(2) +
    "\nDesconto aplicado: R$ " + desconto.toFixed(2) +
    "\nValor final a pagar: R$ " + valorFinal.toFixed(2))

}

//3
function corretoIncorreto() {
    let usuario = prompt("nome de usuário: ")

switch (usuario) {
    case "admin":
        console.log("usuário correto!")

        break;



    default:
        console.log("usuário incorreto.")

        break;
}

let senha = prompt("insira a senha")

switch (senha) {
    case "senha123":
        console.log("senha correta!")
        break;

    default:
        console.log("senha incorreta.")
        break;
}

window.alert("Login feito com sucesso!")
console.log("Apresenta mensagem na tela") 
}


//4
function NotasEscolares() {
    
    alert("Informe ás notas de 0 á 10")

let nota1 = parseFloat(prompt("Digite a primeira nota:"))
let nota2 = parseFloat(prompt("Digite a segunda nota:"))
let nota3 = parseFloat(prompt("Digite a terceira nota:"))
let nota4 = parseFloat(prompt("Digite a quarta nota:"))

let media = (nota1 + nota2 + nota3 + nota4)/4

console.log("A média do aluno é: " + media)

if(media >= 7){
    console.log("Aprovado")
}
else if(media < 7 && media >= 5){
    console.log("Recuperação")
}
else{
    console.log("Reprovado ;-;")
}


//5
function name(params) {
    
}
}

//5
function ImparouPar() {

    let numero = parseInt(prompt("Digite algum numero"));

if (numero % 2 === 0) {
    alert("O número " + numero + " é PAR.");
} else {
    alert("O número " + numero + " é ÍMPAR.");
}
}