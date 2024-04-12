async function buscar(){
    console.log("Passei por aqui")
    const resposta = await fetch("https://660f44ae356b87a55c510d3b.mockapi.io/agendas")
    const respostaDadosAgenda = await resposta.json();
    console.log("Resposta",respostaDadosAgenda)

const cards = window.document.getElementById("cards_games")

cards.innerHTML = respostaDadosAgenda.map((itemAgenda)=> {
    return "Teste"
})}
console.log("antes de buscar")
buscar();
console.log("depois de buscar")

//codigo assincrono nao bloqueia a execucao do programa enquanto uma tarefa esta sendo realizada
//Promessa  é o que permite tarefas assincronas -- pendente - resolvida ou rejeitada.
