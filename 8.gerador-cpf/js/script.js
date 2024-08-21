// seleção dos elementos
const cpf_elemento = document.querySelector(".cpf")
const gerar_cpf = document.querySelector("#gerar-cpf")
const copiar_cpf = document.querySelector("#copiar-cpf")

// função para criar cpf
function gerador_cpf(){
    let n = Math.floor(Math.random() * 999999999) + 1
    let nStr = n.toString().padStart(9, "0")
    let dv1 = calcularDV(nStr, 10)
    let dv2 = calcularDV(nStr + dv1,11)

    cpf_elemento.innerText = formatarCPF(nStr + dv1 + dv2)

}

function calcularDV(numero, peso){
    let total = 0
    for( let i = 0; i < numero.length; i++){
        total += parseInt(numero.charAt(i)) * peso--
    }

    let resto = total % 11
    return resto < 2 ? 0 : 11 - resto
}

function formatarCPF(cpf){
    const regex = /^(\d{3})(\d{3})(\d{3})(\d{2})$/
    return cpf.replace(regex, "$1.$2.$3-$4") 
}

function copiarCPF(){
    const cpf = cpf_elemento.innerText
    navigator.clipboard.writeText(cpf).then(
        () => {
            alert(`CPF ${cpf} copiado para a area de transferencia`)
        }, (error) => {
            console.log(`erro ao copiar CPF ${error}`)
        }
    )
}

gerar_cpf.addEventListener("click", gerador_cpf)
copiar_cpf.addEventListener("click", copiarCPF)