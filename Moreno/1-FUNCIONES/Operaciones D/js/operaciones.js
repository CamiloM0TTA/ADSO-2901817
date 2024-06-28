/**
 * Operaciones
 * Autor: Camilo Motta
 * Fecha: 30 de Marzo del 2024
 * Versión 1.0
 * :D
 */
//suma
function sumar(numeroUno, numeroDos){ // funcion con parametros
    let numeroOne= numeroUno;
    let numeroTwo=numeroDos;
    let resultado= numeroUno + numeroDos;
    return resultado;

}
//suma
const sumarExpresion=function(numeroUno, numeroDos){ // funcion con expresión 
    let numeroOne= numeroUno;
    let numeroTwo=numeroDos;
    let resultado= numeroUno + numeroDos;
    return resultado;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// resta
function restas(numeroUno, numeroDos){ // funcion con parametros
    let numeroOne= numeroUno;
    let numeroTwo=numeroDos;
    let resultado= numeroUno - numeroDos;
    return resultado;
}
// resta
const restaExpresion=function(numeroUno,numeroDos){ // funcion con expresión 
    let numeroOne= numeroUno;
    let numeroTwo=numeroDos;
    let resultado= numeroUno - numeroDos;
    return resultado;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// multiplicación
function multi(numeroUno, numeroDos){ // funcion con parametros
    let numeroOne= numeroUno;
    let numeroTwo=numeroDos;
    let resultado= numeroUno * numeroDos;
    return resultado;
}
// multiplicación
const multiExpresion=function(numeroUno,numeroDos){ // funcion con expresión 
    let numeroOne= numeroUno;
    let numeroTwo=numeroDos;
    let resultado= numeroUno * numeroDos;
    return resultado;
}
//suma 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// división
function divi(numeroUno, numeroDos){ // funcion con parametros
    let numeroOne= numeroUno;
    let numeroTwo=numeroDos;
    let resultado= numeroUno / numeroDos;
    return resultado;
}
// división 
const diviExpresion=function(numeroUno,numeroDos){ // funcion con expresión 
    let numeroOne= numeroUno;
    let numeroTwo=numeroDos;
    let resultado= numeroUno / numeroDos;
    return resultado;
} 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// opoeraciones
const Operaciones= function( poperar, numeroUno, numeroDos){
    let operar=poperar;
    let operacion;
    if(operar==="sumar"){
        operacion=sumar(numeroUno, numeroDos)
    }
    else if(operar=="restas"){
        operacion=restas(numeroUno, numeroDos)
    }
    else if(operar=="multi"){
        operacion=multi(numeroUno,numeroDos)
    }
    else if(operar=="divi"){
        operacion=divi(numeroUno,numeroDos)
    }
    else{
        operacion="¡¡¡¡¡¡¡¡error!!!!!!!!! no hay operación"
        return operacion;
    }
   
}