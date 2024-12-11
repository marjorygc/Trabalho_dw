const modoBotao = document.querySelector("#modoBotao");
const body = document.querySelector("body");
const plusid = document.querySelector("#plus");
const input = document.querySelector("input");
const h1 = document.querySelector("h1");

const solSVG = `
   <circle cx="12" cy="12" r="5"/>
   <line x1="12" y1="1" x2="12" y2="3"/>
   <line x1="12" y1="21" x2="12" y2="23"/>
   <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
   <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
   <line x1="1" y1="12" x2="3" y2="12"/>
   <line x1="21" y1="12" x2="23" y2="12"/>
   <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
   <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
`;

const luaSVG = `
   <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
`;

modoBotao.addEventListener("click", changeBackground);


function changeBackground() {
    const iconeSVG = document.querySelector("#iconeSVG");
    const novoSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    novoSVG.setAttribute("id", "iconeSVG");
    novoSVG.setAttribute("width", "25");
    novoSVG.setAttribute("height", "25");
    novoSVG.setAttribute("viewBox", "0 0 25 25");
    novoSVG.setAttribute("fill", "none");
    novoSVG.setAttribute("stroke", "currentColor");
    novoSVG.setAttribute("stroke-width", "2");
    novoSVG.setAttribute("stroke-linecap", "round");
    novoSVG.setAttribute("stroke-linejoin", "round");

    // Alterna entre os modos dia e noite
    if (body.classList.contains("modo-dia")) {
        body.classList.remove("modo-dia");
        body.classList.add("modo-noite");
        h1.style.color = "var(--tema_noite)";
        plusid.style.background = "rgb(15, 72, 119)";
        input.style.background = "rgb(15, 72, 119)";
        input.style.color = "var(--tema_dia)";
        novoSVG.innerHTML = solSVG;
    } else {
        body.classList.remove("modo-noite");
        body.classList.add("modo-dia");
        h1.style.color = "var(--tema_dia)";
        plusid.style.background = "rgb(157, 203, 240)";
        input.style.background = "rgb(157, 203, 240)";
        input.style.color = "rgb(15, 72, 119)";
        novoSVG.innerHTML = luaSVG;
    }
    if (iconeSVG) {
        iconeSVG.parentNode.replaceChild(novoSVG, iconeSVG);
    } else {
        // Caso o ícone SVG não exista ainda, simplesmente adicionamos ele
        modoBotao.appendChild(novoSVG);
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


