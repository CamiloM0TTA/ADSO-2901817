/**
 * función saludo
 * auto: Motta
 * fecha: 14 de junio de 2024
 */
// salario
function salario() {
    let vdias = parseFloat(document.getElementById('txtValorDia').value);
    let ndias = parseInt(document.getElementById('txtDias').value);
    let resultado = vdias * ndias;
    return resultado;
}

function salud() {
    let salarioPer = salario();
    let saludPer = salarioPer * 0.12;
    return saludPer;
}

function arl() {
    let salarioPer = salario();
    let arlPer = salarioPer * 0.052;
    return arlPer;
}

function pension() {
    let salarioPer = salario();
    let pensionPer = salarioPer * 0.16;
    return pensionPer;
}

function retencion() {
    let salarioPer = salario();
    let salarioMinimo = 1300000;
    let retencionPer = 0;

    if (salarioPer > salarioMinimo * 4) {
        retencionPer = salarioPer * 0.04;
    }

    return retencionPer;
}

function subtrans() {
    let salarioPer = salario();
    let salarioMinimo = 1300000;
    let subsidioT = 0;

    if (salarioPer <= 2 * salarioMinimo) {
        subsidioT = 114000;
    }

    return subsidioT;
}

function deducible() {
    let dsalud = salud();
    let dpension = pension();
    let darl = arl();
    let dretencion = retencion();
    let descuento = dsalud + dpension + darl + dretencion;
    return descuento;
}

function pagoTotal() {
    let salarioPer = salario();
    let subsidioT = subtrans();
    let descuento = deducible();
    let pago = salarioPer + subsidioT - descuento;

    document.getElementById('pago').innerHTML = `<strong>${pago}</strong>`;
    return false;
}
