//selecionando os elementos do html
const barra_de_progresso = document.querySelector(".progresso")
const btn_voltar = document.querySelector("#previous-btn")
const btn_proximo = document.querySelector("#next-btn")


let progress = 0;

function atualizar_proximo(){
    barra_de_progresso.style.width = progress + "%";
    console.log(barra_de_progresso)

}

function proximo(){
    progress += 10
    if( progress > 100) progress = 100;
    atualizar_proximo();
}


function voltar_passos(){
    progress -= 10
    if (progress < 0) progress =0
    atualizar_proximo()
}
btn_proximo.addEventListener("click", proximo)
btn_voltar.addEventListener("click", voltar_passos)