
function tablass(phasta, pnumero) { //con parametros
    let hasta=phasta;
    let numero=pnumero;
    let multi = 1;
    for (let contador = 1; contador <= hasta; contador++) {
        multi = contador * numero;
        console.log(numero+ "x"+ contador + "="+ multi);
}}
const tablassExpresion=function(phasta, pnumero) { // con expresion
    let hasta=phasta;
    let numero=pnumero;
    let multi = 1;
    for (let contador = 1; contador <= hasta; contador++) {
        multi = contador * numero;
        console.log(numero+ "x"+ contador + "="+ multi);
}}