var botones = document.getElementsByTagName("button");
var input = document.getElementById("resultado");
var p = document.getElementsByTagName("p");
input.disabled = true;
var masMenos = true;
var inverso = false;

for (const boton of botones) {
    boton.addEventListener("click", function operacion(params) {
        
        if(boton.innerHTML === "="){

            try {

                input.value = eval(input.value);

            } catch (error) {
                
                p.innerHTML = error;

            }

        } else if(boton.id === "Raiz"){

            input.value = Math.sqrt(input.value);

        } else if(boton.innerHTML === "%"){

            input.value = input.value/100;

        } else if(boton.innerHTML === "+/-"){

            if (masMenos == true) {
                
                masMenos = false;
                input.value = `-${input.value}`;

            } else {
                
                masMenos = true;
                input.value = input.value.replace(/^-/, '');

            }

        } else if(boton.innerHTML === "C"){
            
            input.value = "";
            p.innerHTML = "";

        } else if(boton.innerHTML === "1/x"){
            
            if (inverso == false) {
                
                inverso = true;
                input.value = `1/${input.value}`;

            } else {
                
                inverso = false;
                input.value = input.value.replace(/^1\//, '');

            }
        
        }else if(boton.innerHTML === "."){

            input.value += `${input.value}.`;

        } else {

            input.value += boton.innerHTML;

        }
        
    });
};
