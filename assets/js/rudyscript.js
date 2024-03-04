
const triche = document.getElementById('cheat')
const GifSasuke = document.createElement("img")



function cheateur() {
    console.log('test')
    GifSasuke.src = "../assets/img/itachi.gif";
    GifSasuke.style.position = "absolute";
    GifSasuke.style.top = "0%";
    GifSasuke.style.left = "0%";
    document.body.appendChild(GifSasuke);

    var audio = new Audio("../assets/son/itachi.mp3");
    audio.play();

    setTimeout(function () {
        document.body.removeChild(GifSasuke);
    }, 3200);
}

triche.addEventListener("click", cheateur);