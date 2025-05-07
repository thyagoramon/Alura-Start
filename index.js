const menuBotao = document.getElementById("botao-menu");
const menuLista = document.getElementById("cabecalho__lista");

menuBotao.addEventListener("click", function (e) {
    e.preventDefault();

    const menuAberto = menuLista.style.maxHeight && menuLista.style.maxHeight !== "0px";

    if (menuAberto) {
        menuBotao.style.transform = "rotate(0deg)";
        menuLista.style.maxHeight = "0px";
    } else {
        menuBotao.style.transform = "rotate(90deg)";
        menuLista.style.maxHeight = menuLista.scrollHeight + "px";
    }
})