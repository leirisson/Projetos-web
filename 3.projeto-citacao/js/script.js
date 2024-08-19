// ar
const citacoes = [
    { area: "Filosofia", quote: "A vida deve ser vivida como uma obra de arte.", author: "Friedrich Nietzsche" },
    { area: "Ciência", quote: "A ciência é uma forma de pensar muito mais do que um corpo de conhecimentos.", author: "Carl Sagan" },
    { area: "Literatura", quote: "A leitura é para a mente o que o exercício é para o corpo.", author: "Joseph Addison" },
    { area: "Educação", quote: "A educação é a arma mais poderosa que você pode usar para mudar o mundo.", author: "Nelson Mandela" },
    { area: "Tecnologia", quote: "A tecnologia é melhor quando reúne as pessoas.", author: "Matt Mullenweg" },
    { area: "Empreendedorismo", quote: "O sucesso não é o fim, o fracasso não é fatal: é a coragem de continuar que conta.", author: "Winston Churchill" },
    { area: "Psicologia", quote: "O inconsciente é a verdadeira psique do ser humano.", author: "Carl Jung" },
    { area: "Música", quote: "A música pode mudar o mundo porque pode mudar as pessoas.", author: "Bono Vox" },
    { area: "Arte", quote: "A arte é a mentira que nos permite compreender a verdade.", author: "Pablo Picasso" },
    { area: "Política", quote: "A política é a arte do possível.", author: "Otto von Bismarck" },
    { area: "Economia", quote: "A economia é uma ciência social, não uma ciência exata.", author: "Paul Samuelson" },
    { area: "História", quote: "Aqueles que não conseguem lembrar o passado estão condenados a repeti-lo.", author: "George Santayana" },
    { area: "Medicina", quote: "Onde quer que a arte da medicina seja amada, há também um amor pela humanidade.", author: "Hipócrates" },
    { area: "Direito", quote: "A injustiça em qualquer lugar é uma ameaça à justiça em todo lugar.", author: "Martin Luther King Jr." },
    { area: "Filosofia", quote: "Penso, logo existo.", author: "René Descartes" },
    { area: "Sociologia", quote: "O homem é, por natureza, um animal social.", author: "Aristóteles" },
    { area: "Ética", quote: "A moral é a ciência que nos ensina, não como sermos felizes, mas como merecer a felicidade.", author: "Immanuel Kant" },
    { area: "Religião", quote: "A fé é a certeza daquilo que esperamos e a prova das coisas que não vemos.", author: "Hebreus 11:1" },
    { area: "Esportes", quote: "O talento vence jogos, mas só o trabalho em equipe ganha campeonatos.", author: "Michael Jordan" },
    { area: "Motivação", quote: "O único lugar onde o sucesso vem antes do trabalho é no dicionário.", author: "Vidal Sassoon" }
];

// SELECIONANDO OS ELEMENTOS 
const citacao =  document.querySelector("#quote")
const texto = document.querySelector("#text")
const autor = document.querySelector("#autor")
const btn = document.querySelector("#quoteBtn")

function getcitacao(){
    const index = Math.floor(Math.random() * citacoes.length)
    const citacao_ = citacoes[index].quote;
    const autor_ = citacoes[index].author;

    texto.textContent = citacao_;
    autor.textContent = autor_;
}


btn.addEventListener("click", getcitacao)