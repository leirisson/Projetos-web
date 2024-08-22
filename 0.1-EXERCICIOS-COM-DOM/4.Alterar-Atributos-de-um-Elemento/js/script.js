// selecionando os elementos
const img = document.querySelector(".img")
const aparecer = document.querySelector(".btn-aparecer")
const remover = document.querySelector(".btn-remover")
caminho = "./img/img1.jpg"

aparecer.addEventListener("click", () => {
    
    img.setAttribute("src", "./img/img1.jpg")
    img.classList.add("mostrar")
})

remover.addEventListener("click", () => {
    img.classList.add("desaparecer")
    img.setAttribute("src","./img")
})