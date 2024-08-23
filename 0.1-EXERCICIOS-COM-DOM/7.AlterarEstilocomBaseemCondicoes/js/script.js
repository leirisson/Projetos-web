// const numero = document.querySelector("#numeros")
// const container = document.querySelector(".container")

// for(let i = 0; i<=10; i++){
//     if (i % 2 ==0){
//         const p = document.createElement("p")
//         p.classList.add("numeros_pares")
//         p.innerText += i
//         container.appendChild(p)
//     }else{
//         const p = document.createElement("p")
//         p.classList.add("numeros_impares")
//         p.innerText += i
//         container.appendChild(p)
//     }
// }

// capturando elementos:
const formulario = document.querySelector("form")
const campo_nome = document.querySelector("#nome")
const campo_email = document.querySelector("#email")
const erros = document.querySelector(".error")

formulario.addEventListener("submit", (e) => {
    e.preventDefault()
    validacao()
}
)

function setError(input, msg_error){
    const proximo_tag = input.nextElementSibling; // nextElementSibling => pega o proximo elemento depois do input
    proximo_tag.textContent = msg_error // recebe a menagem de error
    input.classList.add("input-button")
}

function validacao(){
    const nomeValue = campo_nome.value.trim()
    const emailValue = campo_email.value.trim()

    if (nomeValue.length < 3 || nomeValue === ""){
        setError(campo_nome, "Informe um nome valido.")
    }    
    if (emailValue === ""){
        setError(campo_email, "O campo de E-mail tem que ser valido.")
    }
}

