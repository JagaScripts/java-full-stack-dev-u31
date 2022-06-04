
setInterval(obtenerHora, 1000);

function obtenerHora() {

    let horas = document.getElementById('h');
    let minutos = document.getElementById('min');
    let segundos = document.getElementById('s');

    let date = new Date();

    horas.innerHTML = date.getHours();
    minutos.innerHTML = date.getMinutes();
    segundos.innerHTML = date.getSeconds();

}