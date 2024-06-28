/**
 * función saludo
 * auto: Andres MC
 * fecha: 14 de junio de 2024
 */

function rectaMayor(){
    
    let base1=document.getElementById(`txtBase1`).value;
    let base2=document.getElementById(`txtBase2`).value;
    let altura1=document.getElementById(`txtAltura1`).value;
    let altura2=document.getElementById(`txtAltura2`).value;
    let rectaUno=base1*altura1;
    let rectaDos=base2*altura2;
    let resul;

    if(rectaUno===rectaDos){
        resul="la area de los rectamgulos son iguales"
    }
    else if(rectaUno>rectaDos){
        resul="el area del rectangulo uno es mayor"
    }
    else{
        resul="la area del rectangulo dos es mayor"
    }

    document.getElementById('Num').innerHTML = `<strong>${resul}</strong>`;

    return false;
    
}