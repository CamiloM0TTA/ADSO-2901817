
function facto(pnumero){ // con parametros
    let factorial=1;
    let contador;
    let numero=pnumero;
    contador=0;
      while (contador<numero){
      contador ++;
      factorial=factorial*contador
     }
     return factorial
     
}
const factoExpresion=function(pnumero){ //con expresión 
    let factorial=1;
    let contador;
    let numero=pnumero;
    contador=0;
      while (contador<numero){
      contador ++;
      factorial=factorial*contador
     }
     return factorial
     
}