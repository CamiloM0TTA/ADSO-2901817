

function facto(pnumero) { //con parametro 
    let numero=pnumero;
    let factorial=1;
    for (let contador = 1; contador <= numero; contador++) {
        factorial = factorial*contador;
    }
    return factorial
    
}

const factoExpresion=function(pnumero) { //con expresion 
    let numero=pnumero;
    let factorial=1;
    for (let contador = 1; contador <= numero; contador++) {
        factorial = factorial*contador;
    }
    return factorial   
}