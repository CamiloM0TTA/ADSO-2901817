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
    let nacimiento1 = document.getElementById('txtFecha1').value;
    let nacimiento2 = document.getElementById('txtFecha2').value;
    let nacimiento3 = document.getElementById('txtFecha3').value;

    const hoy = new Date();
    const fechaNac1 = new Date(nacimiento1);
    const fechaNac2 = new Date(nacimiento2);
    const fechaNac3 = new Date(nacimiento3);

    let years1 = hoy.getFullYear() - fechaNac1.getFullYear();
    let years2 = hoy.getFullYear() - fechaNac2.getFullYear();
    let years3 = hoy.getFullYear() - fechaNac3.getFullYear();

    const mes1 = hoy.getMonth() - fechaNac1.getMonth();
    const mes2 = hoy.getMonth() - fechaNac2.getMonth();
    const mes3 = hoy.getMonth() - fechaNac3.getMonth();

    if (mes1 < 0 || (mes1 === 0 && hoy.getDate() < fechaNac1.getDate())) {
        years1--;
    }
    if (mes2 < 0 || (mes2 === 0 && hoy.getDate() < fechaNac2.getDate())) {
        years2--;
    }
    if (mes3 < 0 || (mes3 === 0 && hoy.getDate() < fechaNac3.getDate())) {
        years3--;
    }

    const totalYears = years1 + years2 + years3;
    const promedioEdades = totalYears / 3;

    if (promedioEdades>17) {
        document.getElementById('edad').innerHTML = `<strong>${promedioEdades}, Sí</strong>, es mayor de edad.`;
    } else {
        document.getElementById('edad').innerHTML = `<strong>${promedioEdades}, No</strong>, no es mayor de edad.`;
    }


    return false;
}