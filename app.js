function moverPosicionRandom(elm) {
    elm.style.position = 'absolute';
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';
    elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + 'px';
}

let btnSi = document.getElementById("btn_si")
let btnNO =document.getElementById("btn_no")
let divModoSexo = document.getElementsByClassName("modo_sexo")[0]

btnNO.addEventListener('mouseenter', function(e) { moverPosicionRandom(e.target)});

btnSi.addEventListener('click', function (e){
    alert('Sabia que dirias que SÍ. Casemonos ya y tengamos hijos. TE AMO!!!❤️')

    divModoSexo.style.display = "block";
    const cancion = new Audio('audioModoSEXO.mp3.mp3');
    cancion.play();
})