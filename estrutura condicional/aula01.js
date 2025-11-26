// window.alert("minha primeira mensagen")

// window.confirm("hoje e sexta?")

//comentario em linha
/*
comentario varias linhas
*/


// let nome = window.prompt("Qual e o seu nome?")

// window.alert("Bem vindo (a)!"+nome)

// console.log("apresenta mensagem na tela")

// let numero01 = parent(prompt("digite o primeiro numero"))

// let nemero02 = parent(prompt("digite o segundo numero"))

// let soma = numero01 + numero02

// console. log(soma)

// let num01 = parseFloat(prompt("digite algum numero:"))

// let num02 = parseFloat(prompt("digite algum numero:"))

// let resultado = num01 + num02

// console.log(resultado)

// let idade = parseInt(prompt("qual e sua idade?"))

// if (idade >= 18) {
//     console.log("você e maior de idade,da-lhe")
// }
// else{
//     console.log("você e menor de idade,baixinho")
// }

let estacoes = prompt("Digite uma estação do ano:")

switch (estacoes) {
    case "Verão":
        console.log("muito calor e praia")

        break;

    case "Outono":
        console.log("As folhas caem no final")
        break;
    case "inverno":
        console.log("Está muito frio")
        break;
    case "Primavera":
        console.log("Eu vejo flores em você...")
        break;
    default:
        console.log("Não existe essa estação!!!!")
        break;
}