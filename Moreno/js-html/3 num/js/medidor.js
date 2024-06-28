/**
 * función saludo
 * auto: Andres MC
 * fecha: 14 de junio de 2024
 */

function numMayor(){
    
    let num1=document.getElementById(`txtNumeroUno`).value;
    let num2=document.getElementById(`txtNumeroDos`).value;
    let num3=document.getElementById(`txtNumeroTres`).value;
    let resul;
    
    if(num1===num2 ^ num2==num3 ^ num1==num3){
        resul="los numeros son igual= " +num1;
    }
    else if(num1>num2){
        resul="el número uno es mayor= "+ num1;
    }
    else if(num2>num3){
        resul="el número dos es mayor= "+ num2;
    }
    else{
        resul="el número tres es mayor= "+ num3
    }

    document.getElementById('Num').innerHTML = `<strong>${resul}</strong>`;

    return false;
    
}