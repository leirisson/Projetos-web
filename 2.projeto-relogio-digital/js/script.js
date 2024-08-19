
// função para atualizar os elementos do relogio
function atualizar_relogio() {
    // Selecionando os elementos

    const horas_elemento = document.querySelector(".horas");
    const minutos_elementos = document.querySelector(".minutos");
    const segundos_elementos = document.querySelector(".segundos");



    // capiturando date e hora atuais
    const tempo_agora = new Date();

    // capiturando horas, minutos e segundos
    // toString => converte as horas minutos e segundos para strings
    // padStart => para sempre mostrar 2 dois digitos
    const horas = tempo_agora.getHours().toString().padStart(2, "0");
    const minutos = tempo_agora.getMinutes().toString().padStart(2, "0")
    const segundos = tempo_agora.getSeconds().toString().padStart(2, "0")


    horas_elemento.textContent = horas
    minutos_elementos.textContent = minutos
    segundos_elementos.textContent = segundos


};


// o setInveral => é responsavel por chamar a função atualizar_relogio a cada 1 segundo 
// fazendo com que os segundos passe na tela do cliente.
setInterval(atualizar_relogio, 1000) 
