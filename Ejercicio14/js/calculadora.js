var botones = document.getElementsByTagName("button");
var input = document.getElementById("resultado");
var p = document.getElementsByTagName("p")[0];
input.disabled = true;
var masMenos = true;
var inverso = false;

for (const params of botones) {
    params.addEventListener("click", function(){operacion(params)});
};

function operacion(params) {

    if(params.innerHTML === "=" || params.code === "NumpadEnter" || params.code === "Enter"){

        try {

            input.value = eval(input.value);

        } catch (error) {
            
            p.innerHTML = `La expresión introducida no se puede evaluar, intentalo de nuevo pulsa el boton C`;

        }

    } else if(params.id === "Raiz"){

        input.value = Math.sqrt(input.value);

    } else if(params.innerHTML === "%"){

        input.value = input.value/100;

    } else if(params.innerHTML === "+/-"){

       
        if (masMenos == true) {
            
            masMenos = false;
            input.value = `-${input.value}`;

        } else {
            
            masMenos = true;
            input.value = input.value.replace(/^-/, '');

        }

    } else if(params.innerHTML === "C" || params.code === "Delete"){
        
        input.value = "";
        p.innerHTML = "";

    } else if(params.innerHTML === "1/x"){
        
        if (inverso == false) {
            
            inverso = true;
            input.value = `1/${input.value}`;

        } else {
            
            inverso = false;
            input.value = input.value.replace(/^1\//, '');

        }
    
    }else if(params.innerHTML === "."){

        input.value += `${input.value}.`;

    } else {

       
        if (params.innerHTML != undefined) {

            input.value += params.innerHTML;
            
        } else if (params.code.substring(0, 4) === "Digi" || params.code.substring(0, 6) === "Numpad") {

            input.value += params.key;

        } 

    }
    
}
document.addEventListener('keydown',(event) => {operacion(event)},false);