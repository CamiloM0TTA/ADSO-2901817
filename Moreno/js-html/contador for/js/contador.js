/**
 * función saludo
 * auto: Motta
 * fecha: 14 de junio de 2024
*/
function contador5() {
    let numero = document.getElementById('txtSaludo').value;
    let numerosMostrados = '';

    for (let contador = 1; contador <= numero; contador++) {
        numerosMostrados += contador + ' ';
    }

    document.getElementById('conta').innerHTML = `<strong>${numerosMostrados}</strong>`;
    return false;
}


        