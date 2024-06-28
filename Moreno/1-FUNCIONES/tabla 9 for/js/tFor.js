
function tFor(ptabla) { // con parametros
    let tabla=ptabla;
    let multi;
    let par = 0;
    let impar = 0;
    let numero = 5;
    
    for (let contador = 1; contador <= numero; contador++) {
    multi = contador * tabla;
    console.log(tabla+"x"+contador+"="+multi);
    if (multi % 2 === 0) {
        console.log(multi+ "es par");
        par++;
    } else {
        console.log(multi+ "es impar");
        impar++;
    }
}
console.log("Hay " +par + " números pares");
console.log("Hay " +impar+  " números impares");
}

const tForExpresion=function(ptabla) { // con expresion 
    let tabla=ptabla;
    let multi;
    let par = 0;
    let impar = 0;
    let numero = 5;
    
    for (let contador = 1; contador <= numero; contador++) {
    multi = contador * tabla;
    console.log(tabla+"x"+contador+"="+multi);
    if (multi % 2 === 0) {
        console.log(multi+ "es par");
        par++;
    } else {
        console.log(multi+ "es impar");
        impar++;
    }
}
console.log("Hay " +par + " números pares");
console.log("Hay " +impar+  " números impares");
}