//  selecionando elementos 
const div_resultado = document.querySelector("#resultado")
const btn_mais = document.querySelector("#plus")
const btn_menos = document.querySelector("#menos")
const p = document.querySelector(".numero")

let contador = 0 


btn_mais.addEventListener("click", ()=> {
    
    p.textContent = contador += 1
    div_resultado.appendChild(p)
})

btn_menos.addEventListener("click", ()=>{
    p.textContent = contador -= 1
    if (contador <= 0){
        contador = 0
        p.textContent = contador
    } 
    div_resultado.appendChild(p)
})