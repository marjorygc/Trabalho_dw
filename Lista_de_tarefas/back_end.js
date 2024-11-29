const modoBotao = document.querySelector("#modoBotao")
const container = document.querySelector("#container")

modoBotao.addEventListener("click", changebackground)

function changebackground(){
    container.style.backgroundImage = url("https://www.google.com/url?sa=i&url=https%3A%2F%2Fpt.pngtree.com%2Ffree-backgrounds-photos%2Fgradiente-azul-petr%25C3%25B3leo-pictures&psig=AOvVaw0YulLU8FkWvcWULO-TL4Fz&ust=1732967090178000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLiajdi7gYoDFQAAAAAdAAAAABAE")
}