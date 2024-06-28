// con parametros
// salario
function salario(pvdias,pndias) {
    let vdias=pvdias;
    let ndias=pndias;
    let resultado= vdias*ndias;
    return resultado;
} //
// salud
function salud(pvdias,pndias){
    let saludPer;
    let salarioPer=salario(pvdias,pndias);
    saludPer=salarioPer*0.12;
    return saludPer;
}//
// arl
function arl(pvdias,pndias) {
    let arlPer;
    let salarioPer=salario(pvdias,pndias);
    arlPer=salarioPer*0.052;
    return arlPer;
}
//pension
function pension(pvdias,pndias) {
    let pensionPer;
    let salarioPer=salario(pvdias, pndias);
    pensionPer= salarioPer*0.16;
    return pensionPer;
}
// retencion 
function retencion(pvdias, pndias) {
    let retencionPer;
    let salarioPer=salario(pvdias,pndias);
    let salarioMinimo=1300000;
    if (salarioPer>salarioMinimo*4){
        retencionPer=salarioPer*0.04;
    }
    else{
        retencionPer=0;
    }
    return retencionPer;
}
// Subsiodio Transporte
function subtrans(pvdias, pndias) {
    let salarioPer=salario(pvdias,pndias);
    let subsidioT;
    let salarioMinimo=1300000;
    if (salarioPer<=2*salarioMinimo) {
        subsidioT=114000;
    }
    else{
        subsidioT=0;
    }
    return subsidioT;
}
// descuento de sueldo
function deducible(pvdias,pndias) {
    let descunto;
    let dsalud=salud(pvdias,pndias);
    let dpension=pension(pvdias,pndias);
    let darl=arl(pvdias,pndias);
    let dretencion= retencion(pvdias, pndias);
    descunto= parseInt(dsalud)+parseInt(dpension)+parseInt(darl)+parseInt(dretencion);
    return descunto;
}

// pago del sueldo 
function pagoTotal(pvdias,pndias) {
    let salarioPer=salario(pvdias,pndias);
    let subsidioT=subtrans(pvdias,pndias);
    let descunto=deducible(pvdias,pndias);
    let pago;
    pago=(salarioPer+subsidioT)-descunto;
    return pago;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// con expresion
// salario
const salarioEx=function(pvdias,pndias) {
    let vdias=pvdias;
    let ndias=pndias;
    let resultado= vdias*ndias;
    return resultado;
}
// salud
const saludEx=function(pvdias,pndias){
    let saludPer;
    let salarioPer=salario(pvdias,pndias);
    saludPer=salarioPer*0.12;
    return saludPer;
}
// arl
const arlEx=function(pvdias,pndias) {
    let arlPer;
    let salarioPer=salario(pvdias,pndias);
    arlPer=salarioPer*0.052;
    return arlPer;
}
//pension
const pensionEx=function(pvdias,pndias) {
    let pensionPer;
    let salarioPer=salario(pvdias, pndias);
    pensionPer= salarioPer*0.16;
    return pensionPer;
}
// retencion 
const retencionEx=function(pvdias, pndias) {
    let retencionPer;
    let salarioPer=salario(pvdias,pndias);
    let salarioMinimo=1300000;
    if (salarioPer>salarioMinimo*4){
        retencionPer=salarioPer*0.04;
    }
    else{
        retencionPer=0;
    }
    return retencionPer;
}
// Subsiodio Transporte
const subtransEx=function(pvdias, pndias) {
    let salarioPer=salario(pvdias,pndias);
    let subsidioT;
    let salarioMinimo=1300000;
    if (salarioPer<=2*salarioMinimo) {
        subsidioT=114000;
    }
    else{
        subsidioT=0;
    }
    return subsidioT;
}
// descuento de sueldo
const deducibleEx=function(pvdias,pndias) {
    let descunto;
    let dsalud=salud(pvdias,pndias);
    let dpension=pension(pvdias,pndias);
    let darl=arl(pvdias,pndias);
    let dretencion= retencion(pvdias, pndias);
    descunto= parseInt(dsalud)+parseInt(dpension)+parseInt(darl)+parseInt(dretencion);
    return descunto;
}

// pago del sueldo 
const pagoTotalEx=function(pvdias,pndias) {
    let salarioPer=salario(pvdias,pndias);
    let subsidioT=subtrans(pvdias,pndias);
    let descunto=deducible(pvdias,pndias);
    let pago;
    pago=(salarioPer+subsidioT)-descunto;
    return pago;
}