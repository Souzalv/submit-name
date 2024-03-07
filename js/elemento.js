// let paragrafo = document.createElement("p")
// paragrafo.innerText= "Isso é um parágrafo"

// document.body.appendChild(paragrafo)

// // <p> </p>

// function registrarNome(){
//     let nome = document.getElementById("nomeInput").value;
//     let nomeRegistrado = document.getElementById("nomeRegistrado");


//     nomeRegistrado.textContent = nome

// }

function registrarNome(){
    let input= document.querySelector('input')
    let nome = input.value
    input.value= ""
    
    let nomeUsuario = document.createElement ('p')
    nomeUsuario.innerText = nome

    document.body.appendChild(nomeUsuario)


}


