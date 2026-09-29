const fotos = [
    "img/bordado-gato.jpeg",
    "img/bordado-2.jpeg",
    "img/rezando.jpeg",
    
];

let indice = 0;

setInterval(() => {
    indice++;

    if (indice >= fotos.length) {
        indice = 0;
    }

    

    document.getElementById("fotoGaleria").src = fotos[indice];
}, 4000);