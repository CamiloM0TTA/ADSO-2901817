
function tFor(phasta1, phasta2) { // con parametros 
    let tabla;
    let multi;
    let resul;
    let par = 0;
    let impar = 0;
    let hasta1=phasta1;
    let hasta2=phasta2;

for (tabla = 1; tabla <= hasta1; tabla++) {
    for (multi = 1; multi <= hasta2; multi++) {
        resul = tabla * multi;
        console.log(tabla+"x"+multi+"="+resul);
        if (resul % 2 === 0) {
            console.log(resul+ " es par");
            par++;
        } else {
            console.log(resul +" es impar");
            impar++;
        }
    }
}

console.log(`Hay ${impar} impares`);
console.log(`Hay ${par} pares`);
    
}

const tForExpresion=function(phasta1, phasta2) { // con expresion  
    let tabla;
    let multi;
    let resul;
    let par = 0;
    let impar = 0;
    let hasta1=phasta1;
    let hasta2=phasta2;

for (tabla = 1; tabla <= hasta1; tabla++) {
    for (multi = 1; multi <= hasta2; multi++) {
        resul = tabla * multi;
        console.log(tabla+"x"+multi+"="+resul);
        if (resul % 2 === 0) {
            console.log(resul+ " es par");
            par++;
        } else {
            console.log(resul +" es impar");
            impar++;
        }
    }
}

console.log(`Hay ${impar} impares`);
console.log(`Hay ${par} pares`);
    
}