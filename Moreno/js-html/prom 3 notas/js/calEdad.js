/**
 * función saludo
 * auto: Motta
 * fecha: 14 de junio de 2024
*/
function calEdad() {
    let nota1 = document.getElementById('txtNota1').value;
    let nota2 = document.getElementById('txtNota2').value;
    let nota3 = document.getElementById('txtNota3').value;

    let promedioN = (parseInt(nota1)+parseInt(nota2)+parseInt(nota3))/ 3;

    document.getElementById('promedio').innerHTML = `<strong>${promedioN}</strong>`;

    return false;
}