const modoBotao = document.querySelector("#modoBotao")
const body = document.querySelector("body")
const botaoImg = document.querySelector("#botaoImg")

modoBotao.addEventListener("click", changebackground)

function changebackground(){
    if(body.style.backgroundImage == 'url("imagens/imagem-fundo.avif")'){
         body.style.backgroundImage = 'url("imagens/back_escuro.png")';
         botaoImg.scr = "https://img.icons8.com/?size=100&id=26031&format=png&color=000000"; 
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

    for (let i = 0; i < quant_tarefas; i++){
        const itens = ul.children[i]
        const imgCheck = itens.querySelector("button img");

        if (imgCheck){
            tarefas_feitas += 1
            };
    } 

    const porcentagem = (tarefas_feitas/quant_tarefas) * 100
        console.log(porcentagem)
    
    barra.innerHTML = `<progress value="${tarefas_feitas}" max="${quant_tarefas}"></progress>`;
    let texto_barra = document.createElement("p")
    texto_barra.textContent = `${tarefas_feitas}/${quant_tarefas}`;

    const existingText = document.getElementById("texto-barra");
    if (existingText) {
        existingText.remove(); // Remove o texto anterior, se houver
    }

    // Adiciona o novo texto ao DOM dentro da barra
    texto_barra.id = "texto-barra"; // Atribui um ID para controle
    barra.appendChild(texto_barra);

}


