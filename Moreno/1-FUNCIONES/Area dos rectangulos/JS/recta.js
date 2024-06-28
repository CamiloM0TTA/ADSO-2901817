let rectaUno;
let rectaDos;

function area(pbase1,paltura1,pbase2,paltura2){ // con parametros
    let base1=pbase1;
    let base2=pbase2;
    let altura1=paltura1;
    let altura2=paltura2;
    let resul;
    rectaUno=base1*altura1;
    rectaDos=base2*altura2;
    if(rectaUno===rectaDos){
        resul="la area de los rectamgulos son iguales"
    }
    else if(rectaUno>rectaDos){
        resul="el area del rectangulo uno es mayor"
    }
    else{
        resul="la area del rectangulo dos es mayor"
    }
    return resul
}
const areaExpresion=function (pbase1,paltura1,pbase2,paltura2){ // con expresión 
    let base1=pbase1;
    let base2=pbase2;
    let altura1=paltura1;
    let altura2=paltura2;
    let resul;
    rectaUno=base1*altura1;
    rectaDos=base2*altura2;
    if(rectaUno===rectaDos){
        resul="la area de los rectamgulos son iguales"
    }
    else if(rectaUno>rectaDos){
        resul="el area del rectangulo uno es mayor"
    }
    else{
        resul="la area del rectangulo dos es mayor"
    }
    return resul
}
