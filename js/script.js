function exibirMenu () {
    document.getElementById("header").style.display = "block";
}

function fecharMenu () {
    document.getElementById("header").style.display = "none";
}

function ancora(anchor){
    window.location.href = "#"+anchor;
    fecharMenu();
}

