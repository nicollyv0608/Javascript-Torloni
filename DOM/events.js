//eventos sao interacoes do usuario com o website e tambem
//comportamento do website ,por exemplo carregar a tela

let elementobtn = document.getElementById("btn");
let elementoidleandra = document.getElementById("tecnica")
let novoElemento = document.createElement("a")
novoElemento.textContent = "nossa praia e amar 2| jorge e & matheus"
novoElemento.href = "https://www.youtube.com/watch?v=_v0-5QY6y-M&list=RD_v0-5QY6y-M&start_radio=1"

elementobtn.addEventListener("click", () =>{

    // elementobtn.style.backgroundColor = "purple";

    // document.body.appendChild(novoElemento)

    document.body.appendChild(novoElemento);
    // document.body.removeChild(elementoidleandra);
    // console.log(document.body.children);

    document.body.children[2].removeChild(elementoidleandra)

    

})