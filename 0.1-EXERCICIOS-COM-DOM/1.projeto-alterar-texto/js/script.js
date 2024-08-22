// obtendo campos 
const formulario = document.querySelector("#form")
const btn_pesquisar = document.querySelector("#pesquisar-btn")
const campo_pesquisa = document.querySelector(".pesquisar")
const campo_resultado = document.querySelector("#resultado-span")
const resultado = document.querySelector(".resultado")

formulario.addEventListener("submit", e => {
    e.preventDefault()
    campo_resultado.textContent = campo_pesquisa.value
    resultado.style.display = "flex"
})

