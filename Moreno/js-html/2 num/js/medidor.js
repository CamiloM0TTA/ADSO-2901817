/**
 * función saludo
 * auto: Andres MC
 * fecha: 14 de junio de 2024
 */

function numMayor(){
    
    let num1=document.getElementById(`txtNumeroUno`).value;
    let num2=document.getElementById(`txtNumeroDos`).value;

    let resul;
    if(num1===num2){
        resul="los numeros son igual= " + num1;
    }
    else if(num1>num2){
        resul="el número uno es mayor= " + num1;
    }
    else{
        resul="el número dos es mayor= " + num2 ;
    }
    document.getElementById('Num').innerHTML = `<strong>${resul}</strong>`;

    return false;
    
}