/**
 * función saludo
 * auto: Motta
 * fecha: 14 de junio de 2024


function calEdad() {
    let nacimiento=document.getElementById(`txtFecha`).Value;
    const fechaNac= new Date(nacimiento);
    const hoy= new Date();
    let years= hoy.getFullYear()- fechaNac.getFullYear();
    const mes= hoy.getFullYear()-fechaNac.getFullYear();
    if(mes<0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())){
        years--;
    }
    document.getElementById(`edad`).innerHTML= `<strong>${years}</strong>`;
    return false
}
 */
function calEdad() {
    let nacimiento = document.getElementById('txtFecha').value;
    const fechaNac = new Date(nacimiento);
    const hoy = new Date();
    let years = hoy.getFullYear() - fechaNac.getFullYear();
    const mes = hoy.getMonth() - fechaNac.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
        years--;
    }

    if (years>17) {
        document.getElementById('edad').innerHTML = `<strong>${years}, Sí</strong>, es mayor de edad.`;
    } else {
        document.getElementById('edad').innerHTML = `<strong>${years}, No</strong>, no es mayor de edad.`;
    }

    return false;
}
