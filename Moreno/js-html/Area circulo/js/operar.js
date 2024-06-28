/**
 * función saludo
 * auto: Camilo Motta
 * fecha: 14 de junio de 2024
 */
function Radi() {

    let area;
    const pi=3.1416;
    let radio=document.getElementById(`radio`).value;
    area= pi *(radio*radio)
    
    document.getElementById('uwu').innerHTML = `<strong>${area}</strong>`;
    
    return false;
}