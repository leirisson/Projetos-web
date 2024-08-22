// selecionando os elementos
const campo_texto = document.querySelector("#input-texto")
const resultado = document.querySelector(".campo")



campo_texto.addEventListener("input", ()=>{
    resultado.textContent = campo_texto.value
} )
