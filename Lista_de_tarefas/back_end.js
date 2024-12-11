const modoBotao = document.querySelector("#modoBotao")
const body = document.querySelector("body")
//const botaoImg = document.querySelector("#botaoImg")
const h1= document.querySelector("h1")

const solSVG = `
    <path d="M 24.90625 3.96875 C 24.863281 3.976563 24.820313 3.988281 24.78125 4 C 24.316406 4.105469 23.988281 4.523438 24 5 L 24 11 C 23.996094 11.359375 24.183594 11.695313 24.496094 11.878906 C 24.808594 12.058594 25.191406 12.058594 25.503906 11.878906 C 25.816406 11.695313 26.003906 11.359375 26 11 L 26 5 C 26.011719 4.710938 25.894531 4.433594 25.6875 4.238281 C 25.476563 4.039063 25.191406 3.941406 24.90625 3.96875 Z"></path>
`;

const luaSVG = `
    <path d="M 24.90625 3.96875 C 24.863281 3.976563 24.820313 3.988281 24.78125 4 C 24.316406 4.105469 23.988281 4.523438 24 5 L 24 11 C 23.996094 11.359375 24.183594 11.695313 24.496094 11.878906 C 24.808594 12.058594 25.191406 12.058594 25.503906 11.878906 C 25.816406 11.695313 26.003906 11.359375 26 11 L 26 5 C 26.011719 4.710938 25.894531 4.433594 25.6875 4.238281 C 25.476563 4.039063 25.191406 3.941406 24.90625 3.96875 Z"></path>
    <path d="M 30,10 C 28,15 23,12 25,20 C 24,25 29,30 26,35 C 20,38 19,28 17,22 C 12,17 14,13 10,15 C 8,20 12,25 17,25 C 20,25 21,27 22,30 C 28,28 30,22 29,18 C 28,13 28,10 30,10 Z"></path>

`;


modoBotao.addEventListener("click", changebackground)

function changebackground(){

    const iconeSVG = document.querySelector("#iconeSVG")

    while (iconeSVG.firstChild) {
        iconeSVG.removeChild(iconeSVG.firstChild);
    }

    if(body.style.backgroundImage == 'url("imagens/imagem-fundo.avif")'){
         body.style.backgroundImage = 'url("imagens/back_escuro.png")'
         iconeSVG.innerHTML = luaSVG
         h1.style.color = "var(--tema_noite)"
    } else {
        body.style.backgroundImage = 'url("imagens/imagem-fundo.avif")'
        iconeSVG.innerHTML = solSVG 
        h1.style.color= "var(--tema_dia)"

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
// plus.addEventListener("click", function() {
//     add_tarefa();
//     barra_progresso();
// });


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
        barra_progresso()
    })

    imgCaneta.addEventListener("click", function () {
        const edicaoTarefa = document.createElement("input");
        edicaoTarefa.value = textoTarefa.textContent; 
        itemLista.replaceChild(edicaoTarefa, textoTarefa); 
    
        edicaoTarefa.addEventListener("blur", function () {
            textoTarefa.textContent = edicaoTarefa.value;
            itemLista.replaceChild(textoTarefa, edicaoTarefa); 
            barra_progresso()
        });
    });

    botao.addEventListener("click", function () {
        const imgCheck = botao.querySelector("img");
        if (imgCheck) {
            imgCheck.remove();
            textoTarefa.style.textDecoration = "none";
        } else {
            const novoImgCheck = document.createElement("img");
            novoImgCheck.src = "check.png";
            botao.appendChild(novoImgCheck);
            textoTarefa.style.textDecoration = "line-through";
        }
        barra_progresso()    
    });
    inputTarefa.value = ""
    barra_progresso()
}


function barra_progresso(){
    const ul = document.querySelector('ul'); 
    let quant_tarefas = ul.children.length;
    let tarefas_feitas = 0
    const barra = document.getElementById("porcentagem")
    barra.style.display = 'block';

    if(quant_tarefas==0){
        barra.style.display = 'none'
        return;
    }

    for (let i = 0; i < quant_tarefas; i++){
        const itens = ul.children[i]
        const imgCheck = itens.querySelector("button img");

        if (imgCheck){
            tarefas_feitas += 1
            };
    } 

    const porcentagem = (tarefas_feitas/quant_tarefas) * 100
        console.log(porcentagem)
    
        barra.innerHTML = `
        <div class="progress-container">
            <progress class="progresso" value="${tarefas_feitas}" max="${quant_tarefas}"></progress>
            <span class="progress-text">${Math.round(porcentagem)}%</span>
        </div>
    `

    const existingText = document.getElementById("texto-barra");
    if (existingText) {
        existingText.remove(); // Remove o texto anterior, se houver
    }

    // Adiciona o novo texto ao DOM dentro da barra
    texto_barra.id = "texto-barra"; // Atribui um ID para controle
    barra.appendChild(texto_barra);

}


