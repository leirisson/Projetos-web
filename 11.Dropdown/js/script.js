// adcionando elemento
const voltar = document.querySelector("#voltar")

window.addEventListener("scroll", () => {
    const scrolltop = window.pageYOffset || document.documentElement.scrollTop

    if (scrolltop > 500){
        voltar.style.display = "block"
    } else {
        voltar.style.display = "none"
    }
})

voltar.addEventListener("click", e => {
    e.preventDefault()

    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
})