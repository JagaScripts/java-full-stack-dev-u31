const PATRON_EMAIL = /([-.]|\w)+@([]|\w)+(\.\w{2,3})+/;
const PATRON_FECHA = /(0[1-9]|1\d|2\d|3[0-1])\/(0[1-9]|1[0-2])\/([0-2]\d{3})/;

const PATRON_INVERSION = /(\w+)\s(\w+)/;

const PATRON_PELIGROSO = /<script[\s\S]*?>[\s\S]*?<\/script>/

var cadena = "Nací el 28/5/2022 en Donostia";

validarPatron(cadena,PATRON_FECHA,"fecha");

cadena = "Nací el 28/05/2022 en Donostia";

validarPatron(cadena,PATRON_FECHA,"fecha");

cadena = "jagascripts@gamail.com";

validarPatron(cadena,PATRON_EMAIL,"e-mail");

cadena = "jagascriptsgamail.com";

validarPatron(cadena,PATRON_EMAIL,"e-mail");

cadena = '"Pans &amp; Company tiene un presupuesto &gt; a Taco bels y &lt; McDonals "';

alert(`Cadena a reemplazar: ${cadena}`);

cadena = escapeHTML(cadena);

alert(`Cadena reemplazada: ${cadena}`);

cadena = "John Smith";

invertirOrdenPalabras(cadena,PATRON_INVERSION);

cadena = "<script> dfasdgfas </script>";

validarPatron(cadena,PATRON_PELIGROSO,"script peligroso");

cadena = "<script dfasdgfas </script>";

validarPatron(cadena,PATRON_PELIGROSO,"script peligroso");

function validarPatron(cadena, patron, objetoValidar) {

    let siEsValidaFecha = (cadena.match(patron)) ? 'es válido' : 'no es válido';
    document.body.innerHTML +=  `<p><b>El formato del patron  ${objetoValidar} ${cadena} ${siEsValidaFecha} </b></p>`;

}

/*function escapeHTML(text) {
    var replacements = [["&", "&amp;"], ["\"", "&quot;"],
    ["<", "&lt;"], [">", "&gt;"]];

    forEach(replacements, function (replace) {
        text = text.replace(replace[0], replace[1]);
    });

    return text;
}*/

function escapeHTML(cadena) {
    
    let replacements = [
        ["&", /&amp;/],
        ["\/", /&quot;/],
        ["<", /&lt;/],
        [">", /&gt;/]
    ];
    replacements.forEach(x => {
        
        cadena = cadena.replace(x[1], x[0]);

    });

    return cadena;
    
}

function invertirOrdenPalabras(cadena,patron){
    
    document.body.innerHTML +=  `<p><b>La cadena sin invertir es: ${cadena}</b></p>`;

    cadena = cadena.replace(patron, '$2, $1');

    document.body.innerHTML +=  `<p><b>La cadena invertida es: ${cadena}</b></p>`;

}