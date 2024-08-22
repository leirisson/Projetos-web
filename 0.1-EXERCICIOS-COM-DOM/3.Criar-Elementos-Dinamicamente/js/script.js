// selecionando os elemenetos
const campo_input = document.querySelector("#input")
const btn_adcionar = document.querySelector(".plus")
const lis_ul = document.querySelector("#lista")

btn_adcionar.addEventListener("click", () => {
    const li = document.createElement("li")
    li.classList.add("lista-item")
    li.innerText = campo_input.value
    lis_ul.appendChild(li)
    campo_input.value = ""
})