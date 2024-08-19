// SELECIONAR  OS ELEMENTOS 
const elemento_input = document.querySelector("#input");
const from_elemento = document.querySelector("#from");
const to_elemento = document.querySelector("#to")
const btn_elemento = document.querySelector("#convert-btn")
const saida = document.querySelector("#saida")
const msg = document.querySelector(".message")


function convertendo_para_metros(valor) {
    // converter entrada para metros 
    let meters
    switch (valor) {
        case "m":
            meters = elemento_input.value;

            break
        case "km":
            meters = elemento_input.value * 1000;
            // msg.classList.add('aparecer');

            break
        case "cm":
            meters = elemento_input.value / 100;

            break
        case "mm":
            meters = elemento_input.value / 1000;

            break
    }
    return meters
}

function convertendo_metro_para_unidades_de_saida(valor, value) {
    let resultado
    switch (value) {
        case "m":
            resultado = valor;
            break
        case "km":
            resultado = valor / 1000;
            // msg.classList.add('aparecer');

            break
        case "cm":
            resultado = valor *  100;

            break
        case "mm":
            resultado = valor *  1000;
            break
    }
    return resultado
}

// Criando uma função para converter as unidades
function conversao() {
    const from_value = from_elemento.value
    const to_value = to_elemento.value

    if (from_value === to_value) {
        saida.value = elemento_input.value;
        msg.classList.add('sumir')
        return;
    }

    const metters = convertendo_para_metros(from_value)
    const resultado  = convertendo_metro_para_unidades_de_saida(metters, to_value)

    // exibir resultado no imput 
    saida.value = resultado

    // exibir resultado na mensgaem
    const exibir_from_elemento = from_elemento.options[from_elemento.selectedIndex].text;
    const exibir_to_elemento = to_elemento.options[to_elemento.selectedIndex].text
    msg.classList.add('aparecer');
    msg.textContent = `Convertido ${metters} ${exibir_from_elemento} para ${resultado} ${exibir_to_elemento} `


}


btn_elemento.addEventListener("click", conversao);