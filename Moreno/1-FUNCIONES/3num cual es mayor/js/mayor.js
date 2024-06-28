let num1;
let num2;
let num3;
function mayor(pnum1, pnum2, pnum3){ // funcion con parametros 
    num1=pnum1;
    num2=pnum2;
    num3=pnum3;
    let resul;
    if(num1===num2 ^ num2==num3 ^ num1==num3){
        resul="los numeros son igual";
    }
    else if(num1>num2){
        resul="el número uno es mayor";
    }
    else if(num2>num3){
        resul="el número dos es mayor";
    }
    else{
        resul="el número tres es mayor"
    }
    return resul;
}
const mayorExpresion=function(pnum1, pnum2, pnum3){ // funcion con expresion 
    num1=pnum1;
    num2=pnum2;
    num3=pnum3;
    let resul;
    if(num1===num2 ^ num2==num3 ^ num1==num3){
        resul="los numeros son igual";
    }
    else if(num1>num2){
        resul="el número uno es mayor";
    }
    else if(num2>num3){
        resul="el número dos es mayor";
    }
    else{
        resul="el número tres es mayor"
    }
    return resul;
}