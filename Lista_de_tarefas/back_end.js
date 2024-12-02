const modoBotao = document.querySelector("#modoBotao")
const body = document.querySelector("body")
const botaoImg = document.querySelector("#botaoImg")

modoBotao.addEventListener("click", changebackground)

function changebackground(){
    if(body.style.backgroundImage == 'url("imagens/imagem-fundo.avif")'){
         body.style.backgroundImage = 'url("imagens/back_escuro.png")';
         botaoImg.scr = "https://img.icons8.com/?size=100&id=45474&format=png&color=000000"; 
    } else {
        body.style.backgroundImage = 'url("imagens/imagem-fundo.avif")';
        botaoImg.src = "https://img.icons8.com/?size=100&id=648&format=png&color=000000"; 
    }
    
}

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

const inputTarefa = document.querySelector(".inputTarefa")
const plus = document.querySelector("#plus")
const tarefas = document.querySelector(".tarefas")

plus.addEventListener("click", add_tarefa) 

function add_tarefa(){
    const novaTarefa = inputTarefa.value

    if (!novaTarefa.trim()) {
        alert("Digite uma tarefa");
        return;
    }

    const itemLista = document.createElement("li")
    itemLista.classList.add("item")

    
    const divBotao = document.createElement("div")
    divBotao.classList.add("check")

    const botao = document.createElement("button")
    
    divBotao.appendChild(botao)

    const textoTarefa = document.createElement("p")
    textoTarefa.textContent = novaTarefa

    const icones = document.createElement("div")
    icones.classList.add("image")
    

    const imgCaneta = document.createElement("img")
    imgCaneta.src = "https://img.icons8.com/?size=100&id=sKp0dy2A108d&format=png&color=000000"
    const imgLixo = document.createElement("img")
    imgLixo.src = "https://img.icons8.com/?size=100&id=nerFBdXcYDve&format=png&color=000000"

    icones.appendChild (imgCaneta)
    icones.appendChild (imgLixo)


    itemLista.appendChild(divBotao)
    itemLista.appendChild(textoTarefa)
    itemLista.appendChild(icones)

    tarefas.appendChild(itemLista)

    imgLixo.addEventListener("click", function() {
        itemLista.remove() 
    })

    imgCaneta.addEventListener("click", function () {
        const edicaoTarefa = document.createElement("input");
        edicaoTarefa.value = textoTarefa.textContent; // Preenche o input com o texto atual
        itemLista.replaceChild(edicaoTarefa, textoTarefa); // Substitui o <p> pelo <input>
    
        // Salva a edição ao perder o foco
        edicaoTarefa.addEventListener("blur", function () {
            textoTarefa.textContent = edicaoTarefa.value; // Atualiza o texto com o valor editado
            itemLista.replaceChild(textoTarefa, edicaoTarefa); // Substitui o <input> pelo <p>
        });
    });

    botao.addEventListener("click", function () {
        const imgCheck = botao.querySelector("img");
        if (imgCheck) {
            // Remove o check e o risco no texto
            imgCheck.remove();
            textoTarefa.style.textDecoration = "none";
        } else {
            // Adiciona o check e risca o texto
            const novoImgCheck = document.createElement("img");
            novoImgCheck.src = "check.png";
            botao.appendChild(novoImgCheck);
            textoTarefa.style.textDecoration = "line-through";
        }
    });
    inputTarefa.value = ""
}