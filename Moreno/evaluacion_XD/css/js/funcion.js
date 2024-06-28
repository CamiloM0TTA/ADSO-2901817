// salario
function salario(pvdias,pndias) {
    let vdias=pvdias;
    let ndias=pndias;
    let resultado= vdias*ndias;
    if(resultado>1200000){
        console.log("Gana más de 1200000")
    }
    else{
        console.log("No gana más de 1200000")
    }
    return resultado;
}
//pension
function pension(pvdias,pndias) {
    let pensionPer;
    let salarioPer=salario(pvdias, pndias);
    pensionPer= salarioPer*0.16;
    return pensionPer;
}
