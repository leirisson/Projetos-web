//selecionando elementos 
const btn_calcular = document.querySelector("#calcular")
const valor_gorjeta = document.querySelector("#gorjeta")

function calcular(){
    const pagamento = parseFloat(document.querySelector("#valor-conta").value)
    const servico = parseFloat(document.querySelector("#qualidade").value)

    if (pagamento  === ""){
        alert("Favor preencha os dados")
    }

    const tip_pagamento = pagamento * servico
    const total = tip_pagamento + pagamento
    

    const exibir_gorjeta = document.querySelector("#gorjeta")
    const total_pagar = document.querySelector("#numer_liquid")


    exibir_gorjeta.value = tip_pagamento.toLocaleString('pt-BR', {style: "currency", currency: "BRL"})
    total_pagar.value = total.toLocaleString('pt-BR', {style: "currency", currency: "BRL"}) 
 
    

}

btn_calcular.addEventListener("click", calcular)
