const modoBotao = document.querySelector("#modoBotao")
const container = document.querySelector("#container")
const botaoImg = document.querySelector("#botaoImg")

const tarefas = document.querySelector(".tarefas")
const plus = document.querySelector("#plus")
plus.onclick = add_tarefa

modoBotao.addEventListener("click", changebackground)

function changebackground(){
    if(container.style.backgroundImage == 'url("imagens/imagem-fundo.avif")'){
         container.style.backgroundImage = 'url("imagens/back_escuro.png")'
         botaoImg.src = "https://img.icons8.com/?size=100&id=45474&format=png&color=000000"; 
    } else {
        container.style.backgroundImage = 'url("imagens/imagem-fundo.avif")'
        botaoImg.src = "https://img.icons8.com/?size=100&id=648&format=png&color=000000"; 
    }
    
}

function add_tarefa(){

}