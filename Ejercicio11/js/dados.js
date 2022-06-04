const MINIMO = 1;
const MAXIMO = 6;
const REPETICIONES = 36000;
var array = new Array();

for (let index = 0; index < REPETICIONES; index++) {
    array[index] = sumarLanzamientos(MINIMO,MAXIMO);
}

for (let index = 0; index < 50; index++) {
    document.body.innerHTML += "<p> La suma de los dos números aleatorios entre " + MINIMO + " y " + MAXIMO + " es " + array[index] + "</p>";
    
}
document.body.innerHTML += "<p>Se ha ejecutado " + array.length + " veces</p>";
console.log(array.length);


function obtenerRandom(min, max) {
    max++;
    return Math.floor(Math.random() * (max - min) + min);

}

function sumarLanzamientos(min, max){

    return obtenerRandom(min, max) + obtenerRandom(min, max);

}
