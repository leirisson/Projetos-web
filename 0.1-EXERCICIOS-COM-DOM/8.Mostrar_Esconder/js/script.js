// selecionando os elementos
const icone = document.querySelector("#icone")
const exibir = document.querySelector(".exibir")
const container = document.querySelector(".container-formulario")

icone.addEventListener("click", ()=>{
    container.style.display = "none"
})

exibir.addEventListener("click", () => {
    container.style.display = "block"
})