//selecionando os elementos 
const adionar_classe = document.querySelector("#classe1")
const remover_classe = document.querySelector("#classe2")
const container_geral = document.querySelector(".container")


adionar_classe.addEventListener("click", () => {
    container_geral.classList.add("adcionar_classe")

})

remover_classe.addEventListener("click", () => {
    container_geral.classList.remove("adcionar_classe")
    
    
})
