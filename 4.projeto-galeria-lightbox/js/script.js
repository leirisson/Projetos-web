// selecionando os items
const galeria = document.querySelectorAll(".galeria-item")
const ligth_box = document.querySelector(".lightbox")
const light_img = document.querySelector(".lightbox-image")
const light_fechar = document.querySelector(".lightbox-close")


// função de abrir o llightbox
galeria.forEach((item)=> {
    item.addEventListener("click", () => {
        const img_url = item.querySelector(".galeria-img").getAttribute("data-src")
        light_img.setAttribute("src", img_url)
        ligth_box.style.display = "flex"
    })
})

light_fechar.addEventListener("click", () => {
    ligth_box.style.display = "none"
})