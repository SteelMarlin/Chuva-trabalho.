function leiaMais() {
    var pontos = document.getElementById("seeMore");
    var maisTexto = document.getElementById("seeLess");
    var btnReadMore = document.getElementById("btnReadMore");

    if (pontos.style.display === "none") {
        pontos.style.display = "inline"
        maisTexto.style.display = "none"
        btnReadMore.innerHTML = "veja mais"
    } else {
        pontos.style.display = "none"
        maisTexto.style.display = "inline"
        btnReadMore.innerHTML = "veja menos"
    }
}

function abreModal() {
    $("#myModal").modal({
        show: true
    });
}

setTimeout(abreModal, 1000);