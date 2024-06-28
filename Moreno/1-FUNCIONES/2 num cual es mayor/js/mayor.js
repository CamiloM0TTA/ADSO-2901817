let num1;
let num2;
function mayor(pnum1, pnum2){ // funcion con parametros 
    num1=pnum1;
    num2=pnum2;
    let resul;
    if(num1===num2){
        resul="los numeros son igual";
    }
    else if(num1>num2){
        resul="el número uno es mayor";
    }
    else{
        resul="el número dos es mayor";
    }
    return resul;
}
const mayorExpresion=function(pnum1, pnum2){ // funcion con expresion 
    num1=pnum1;
    num2=pnum2;
    let resul;
    if(num1===num2){
        resul="los numeros son igual";
    }
    else if(num1>num2){
        resul="el número uno es mayor";
    }
    else{
        resul="el número dos es mayor";
    }
    return resul;
}
