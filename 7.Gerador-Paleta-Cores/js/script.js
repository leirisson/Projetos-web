// selecionar os elementos
const btn_gerar_cores = document.querySelector("#gerar-cores")
const div_cores = document.querySelector(".colors")



// fução para disparar os eventos
function gerar_cores(){
    div_cores.innerHTML = ""
    for (let i= 0; i<5; i++){
        const colors = gerar_cores_aleatorias()
        const cor_div = document.createElement("div")
        cor_div.style.backgroundColor = colors
        const cor_nome = document.createElement("p")
        cor_nome.style.color = colors
        cor_nome.textContent =colors
        cor_div.appendChild(cor_nome)
        div_cores.appendChild(cor_div)
    }
}

function gerar_cores_aleatorias(){
    const letras = "0123456789ABCDEF"; 
    let cor = "#"

    for (let i = 0; i < 6; i++){
        let index = Math.floor(Math.random() * letras.length)
        cor += letras[index]
    }

    return cor
}


btn_gerar_cores.addEventListener("click", gerar_cores)