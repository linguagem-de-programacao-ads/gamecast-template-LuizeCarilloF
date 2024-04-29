async function buscar() {
    console.log("Passei por aqui")
    const resposta = await fetch("https://660f44ae356b87a55c510d3b.mockapi.io/agendas")
    const respostaDadosAgenda = await resposta.json();
    console.log("Resposta", respostaDadosAgenda)

    const cards = window.document.getElementById("cards_games")

    cards.innerHTML = respostaDadosAgenda.map((itemAgenda) => {
        // var dataAgenda = new Date(itemAgenda.dataJogo)
        return `
    <div class="cardItem">
    <div class="dataGame"> 
        <img src="../imagens/calendar-solid.svg" alt=""> ${itemAgenda.dataJogo}
    </div>
    <img class="img-background" src="${itemAgenda.urlImagem}">
    <div class="descricao">
        <p> <strong>${itemAgenda.name}</strong> </p>
        <p> ${itemAgenda.descricao}</p>
        <p><strong>Gamers: </strong></p>

        <div class="gamers">
        ${
            itemAgenda.gamers.map((gamerItem)=> {
            return `<div class="gamerItem">@${gamerItem}</div>`
        }).join('')
    }
       </div >

      
    </div >
        <div class="assistir">
            <a class="assistirItem"> <img src="../imagens/youtube.svg" alt=""> Assistir </a>
        </div>
</div >
        `
}).join('')
}
console.log("antes de buscar")
buscar();
console.log("depois de buscar")


//codigo assincrono nao bloqueia a execucao do programa enquanto uma tarefa esta sendo realizada
//Promessa  é o que permite tarefas assincronas -- pendente - resolvida ou rejeitada.
