//selecionando os elementos
const form = document.querySelector("form")
const nome = document.querySelector("#nome")
const email = document.querySelector("#email")
const assunto = document.querySelector("#assunto")
const messagem = document.querySelector("#mensagem")
const erros = document.querySelectorAll(".error-message")

form.addEventListener("submit", (event) => {
    event.preventDefault()
    validacao_input()
    
})

function setErro(input, errorMessage){
    const errorgetElement = input.nextElementSibling;
    errorgetElement.textContent = errorMessage
    errorgetElement.classList.add("aparecer")
    input.parentElement.classList.add("error")

}

function validacao_input(){
    const nomeValue = nome.value.trim()
    const emailValue = email.value.trim()
    const assuntoValue = assunto.value.trim()
    const textAreaValue = messagem.value.trim()


    if (nome === "" || nomeValue.length < 3){
        // erro 
        setErro(nome, "nome não pode ficar em brando ou ter menos de 3 caracteres")
    } 
    if (emailValue === ""){
        setErro(email, "E-mail incorreto ou está em branco")
    }
    if (assuntoValue == ""){
        setErro(assunto, "O assunto da mendagem não pode está em branco")
    }
    if (textAreaValue === "" || textAreaValue.length < 10){
        setErro(messagem, "A mensagem tem que ter no minimo 10 caracteres.")
    }
    
}

