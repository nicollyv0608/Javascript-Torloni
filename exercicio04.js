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