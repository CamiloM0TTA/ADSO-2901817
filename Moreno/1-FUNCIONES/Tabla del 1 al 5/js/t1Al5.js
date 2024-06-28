
function t1Al5(phasta1, phasta2){ // con parametros 
    let hasta1=phasta1;
    let hasta2=phasta2;
    let tabla=0;
    let resul;
    let par=0;
    let impar=0;
    let multi;
    
while (tabla < hasta1) {
    tabla++;
    multi = 0;
    while (multi < hasta2) {
        multi++;
        resul = tabla * multi;
        console.log(tabla +"x" +multi +"=" +resul);
        if (resul % 2 === 0) {
            console.log(resul+ " buzz");
            par++;
        } else {
            console.log(resul + " bass");
            impar++;
        }
    }
}

console.log("Hay" + impar + "impares");
console.log("Hay" + par + "pares");
}

const t1Al5Expresion=function(phasta1, phasta2){ //con expresion 
    let hasta1=phasta1;
    let hasta2=phasta2;
    let tabla=0;
    let resul;
    let par=0;
    let impar=0;
    let multi;
    
while (tabla < hasta1) {
    tabla++;
    multi = 0;
    while (multi < hasta2) {
        multi++;
        resul = tabla * multi;
        console.log(tabla +"x" +multi +"=" +resul);
        if (resul % 2 === 0) {
            console.log(resul+ " buzz");
            par++;
        } else {
            console.log(resul + " bass");
            impar++;
        }
    }
}

console.log("Hay" + impar + "impares");
console.log("Hay" + par + "pares");
}