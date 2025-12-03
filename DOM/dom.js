/// dom e a arvore /fluxo do meu documento html
//ele serve para que o javascritpt manipular ( vizualizae,editar,criar,excluir)
/// o dom torna os elemntos html em objetos para que p js consiga acessar de fato

let elementoBody = document.getElementsByTagName("Body");

console.log(elementoBody);

let elementoH1 = document.getElementsByTagName("h1");

///acessando o elemento pela a sua posição 
console.log(elementoH1[2]);

//acessando o elemento pela sua posição

elementoH1[0].textcontent = "Oie";
//console.log(

//exibe o id da tenica

//exiba os elemetos que possuem a class jogador
//exiba p item 4 dos elementos que possuem a class jogador
// muda o texto do conteudo do item de 3 posicao dos elementos que posuem a class jogador

//01
let LeandraElemento = document.getElementById("tecnica")

console.log(LeandraElemento)

//02
// *For.js*                                                                              //escrita = escrita do código

// a variavel i vale 0 ou seja essa variavel armazena as voltas
//a condicao verifica o numero que o loop esta

for (let i = 0; i <= 9; i = i + 1) {
    console.log("A volta que for está é: " + i)

}
//utilize o for para exibir do 1 ao 10


//03
let quatroJogadores = document.getElementsByClassName("jogador");

console.log(quatroJogadores[3].textContent);


//04

quatroJogadores[3].textContent = "ruim"

//mudar a estilização
LeandraElemento.style.color = "red";
LeandraElemento.style.fontSize = "20px"

//mude a cor da fonte do idtem da 3 posição dos elementos que possuem a class jogador
// exibeidclass[3].     

exibeidclass[3].style.color = "blue"; 









