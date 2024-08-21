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
    

    const exibir_gosrjeta = document.querySelector("valor-conta") = `R$ ${tip_pagamento}`
   const total_amount = total_amount
 


}

btn_calcular.addEventListener("click", calcular)
