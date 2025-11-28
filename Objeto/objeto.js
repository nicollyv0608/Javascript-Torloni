let mercedes = {
    nome: "G63",//caracteristicas -propiedade 
    ano: 2025,
    fabricante: "mercedes",
    cor: "preto fosco",
    acelerar() { //comportamentos- metodos
        console.log("Acelerar...vrum..vrum...");
    },
    frear() {
        console.log("freiando....");
    }
};

console.log(mercedes.modelo);
console.log(mercedes.acelerar());

///criar um objeto professor
/// 3 propiedades,nomes,nif,salario
///2 comportamentoatribuir nota e bater ponto
/// alem disso , escolha mais uma propiedade e mais um computador

let professor = {
    nome: "Felipe tadeu neves",
    dataNasc: new Date(1999),
    Raça: "Branco",
    Salario: 20.000,
    nif: 5834082,
    cidade: "Diadema -sp",
    hobbies: ["jogar videogame", "jogar valorant"],

    atribuirNota() { },

    baterponto() {
        let horarioBatido = new Date(2025, 10, 28, 17, 5)
        console.log(horarioBatido)
    }
}

console.log(professorfelipe.hobbies);
console.log(professorfelipe.ataNasc);
console.log(professorfelipe.baterponto());