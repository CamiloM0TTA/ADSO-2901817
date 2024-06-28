/**
 * función saludo
 * auto: Motta
 * fecha: 14 de junio de 2024
*/
    function facto(){ 
        let numero = document.getElementById('txtSaludo').value;
        let factorial=1;
        let contador;
        contador=0;
          while (contador<numero){
          contador ++;
          factorial=factorial*contador
         }
    document.getElementById('fac').innerHTML = `<strong>${factorial}</strong>`;
    return false;
        }


        