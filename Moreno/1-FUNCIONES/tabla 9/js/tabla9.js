
function tablaDel9(ptabla, phasta) { // con parametros
    let tabla=ptabla;
    let numero=phasta;
    let contador=0;
    let multi=1;
    let par=0;
    let impar=0;
    
while(contador<numero){
    contador++;
    multi=contador*tabla;
    console.log(tabla + "x" + contador + "=" + multi)
    if((multi%2)==0){
        console.log(multi +" es par")
        par++;
    }
    else{
        console.log(multi+ " es impar")
        impar++;
    }
}
console.log("hay "+ par +" Número pares")
console.log("hay "+ impar + " Números impares")   
}

const tablaDel9Expresion=function(ptabla, pnumero) { // con expresion
    let tabla=ptabla;
    let numero=pnumero;
    let contador=0;
    let multi=1;
    let par=0;
    let impar=0;
    
while(contador<numero){
    contador++;
    multi=contador*tabla;
    console.log(tabla + "x" + contador + "=" + multi)
    if((multi%2)==0){
        console.log(multi +" es par")
        par++;
    }
    else{
        console.log(multi+ " es impar")
        impar++;
    }
}
console.log("hay "+ par +" Número pares")
console.log("hay "+ impar + " Números impares")   
}