
function tabla5(pnumero) { // con parametro 
    let numero=pnumero;
    let contador=0;
    let multi=1;
    while(contador<5){
    contador++;
    multi=contador*numero;
    console.log(numero + "x" + contador + "=" + multi)
    
}
}

const tabla5Expresion=function(pnumero) { // con expresion
    let numero=pnumero;
    let contador=0;
    let multi=1;
    while(contador<5){
    contador++;
    multi=contador*numero;
    console.log(numero + "x" + contador + "=" + multi)  
}}