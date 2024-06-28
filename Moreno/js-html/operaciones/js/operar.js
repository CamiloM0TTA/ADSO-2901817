/**
 * función saludo
 * auto: Andres MC
 * fecha: 14 de junio de 2024
 */
function operar() {

    let numeroUno = parseInt(document.getElementById('txtNumeroUno').value);
    let numeroDos = parseInt(document.getElementById('txtNumeroDos').value);
    
    let suma = numeroUno + numeroDos;
    let resta=numeroUno-numeroDos;
    let multiplicar=numeroUno*numeroDos;
    let dividir=numeroUno/numeroDos;
    
    document.getElementById('uwu').innerHTML = `<strong>${suma}</strong>`;
    document.getElementById('resta').innerHTML = `<strong>${resta}</strong>`;
    document.getElementById('multi').innerHTML = `<strong>${multiplicar}</strong>`;
    document.getElementById('divi').innerHTML = `<strong>${dividir}</strong>`;

    return false;
}