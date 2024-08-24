const cards = [1, 1, 2, 2, 3, 3, 4, 4];



async function gerarImagens(){
    const imagensPares = {}
    for (let i = 0; i <  cards.length; i++){
        if (!imagensPares[cards[i]]){
            const id = Math.floor(Math.random() *1000) + 1;
            const url = `https://picsum.photos/id/${id}/300/400`
            imagensPares[cards[i]] = [url, url]
        }
    }
    console.log(imagensPares)
    return imagensPares
}

function embaralhar(){
    cards.sort(() => Math.random() - 0.5)
}

async function criaCard() {
    const imagensPares = await gerarImagens()
    embaralhar(cards)
    const cardList = document.querySelector(".container")

    for(let i =0; i< cards.length; i++){
        const card = document.createElement("div")
        const cardFront = document.createElement("div")
        const cardBack = document.createElement("div")

        card.classList.add("card")
        cardFront.classList.add("front")
        cardBack.classList.add("back")

        cardBack.style.backgroundImage = `url('img/img1.png')`

        const cardNumber = card[i]
        const cardImage = imagensPares[cardNumber]

        cardFront.style.backgroundImage = `url(${cardImage})`

        card.setAttribute("dat-card", cardNumber)

        card.appendChild(cardFront)
        card.appendChild(cardBack)
        card.addEventListener("click", flipCard)
        cardList.appendChild(card)

    }

}

let flipCards = 0;
let fristCards, secondCards;
let conatgem = 0;


function flipCard(){
    if(flipCards < 2 && !this.classList.contains("flip")){
        flipCards++;
        this.classList.add("flip")
        if (flipCards === 1){
            fristCards = this
        } else {
            secondCards = this;
            conatgem++;
            atualizarTentativas();
        }
    }
}


function atualizarTentativas(){
    const elementoConatgem = document.querySelector(".attemps")
    elementoConatgem.textContent = `Tentativas ${conatgem}`
}

criaCard()