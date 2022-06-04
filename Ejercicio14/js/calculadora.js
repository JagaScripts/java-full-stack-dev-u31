var botones = document.getElementsByTagName("button");
console.log(botones);

for (const boton of botones) {
    boton.addEventListener("click", function operacion(params) {
        console.log(boton.id);
    });
};
