var imagenes = document.getElementsByTagName("img");
var imagen = document.getElementById("imagenCentral");
imagen.src = imagenes[0].src;
imagen.alt = imagenes[0].alt;


for (const imagen of imagenes) {
    imagen.addEventListener("click", function(){intercambiarImagen(imagen.id)});
}

function intercambiarImagen(id){

    imagen = document.getElementById("imagenCentral");
   
    imagen.src = id;
    let imagenMostrada = document.getElementById(id);
    let altImagen = document.getElementById("textotImagen");
 
    altImagen.innerHTML = imagenMostrada.alt;
   
}