const modoBotao = document.querySelector("#modoBotao")
const body = document.querySelector("body")
const botaoImg = document.querySelector("#botaoImg")

const tarefas = document.querySelector(".tarefas")
const plus = document.querySelector("#plus")
plus.onclick = add_tarefa

modoBotao.addEventListener("click", changebackground)


document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.key.toLowerCase() === 'h') {
        e.preventDefault();
        console.log("ok")
        const tela2 = document.querySelector("#tela");
        const tela1 = document.querySelector("#container");
        const tela2Display = window.getComputedStyle(tela2).display;
        if (tela2Display === 'none') {
            tela2.style.display = 'block';
            tela1.style.display = 'none';
        } else {
            tela2.style.display = 'none';
            tela1.style.display = 'block';
        }
        const closeIcon= document.querySelector("#closeIcon")
        closeIcon.addEventListener("click",closeMenu)

        function closeMenu() {
            tela1.style.display = 'block';
            tela2.style.display = 'none';
            
        }
    }
    });

function changebackground(){
    if(body.style.backgroundImage == 'url("imagens/imagem-fundo.avif")'){
         body.style.backgroundImage = 'url("imagens/back_escuro.png")'
         botaoImg.scr = "https://img.icons8.com/?size=100&id=45474&format=png&color=000000"; 
    } else {
        body.style.backgroundImage = 'url("imagens/imagem-fundo.avif")'
        botaoImg.src = "https://img.icons8.com/?size=100&id=648&format=png&color=000000"; 
    }
    
}

function add_tarefa(){

}