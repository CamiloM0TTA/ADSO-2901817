/**
 * función saludo
 * auto: Motta
 * fecha: 14 de junio de 2024


function contador5(){
    
    let numero= document.getElementById('txtSaludo').value;;
    let contador=0;
    while(contador<numero){
        contador++
        console.log(contador);
    }
    document.getElementById('conta').innerHTML=`<strong>${contador}</strong>`;
    return false;
    
} 
    function contador5() {
        let numero = parseInt(document.getElementById('txtSaludo').value);
        let contador = 0;
    
        function mostrarNumero() {
            if (contador <= numero) {
                document.getElementById('conta').innerHTML = `<strong>${contador}</strong>`;
                contador++;
                setTimeout(mostrarNumero, 1000); // Espera 1 segundo antes de mostrar el siguiente número
            }
        }
    
        mostrarNumero();
        return false;
    }*/
        function contador5() {
            let numero = document.getElementById('txtSaludo').value;
            let contador = 0;
            let numerosMostrados = '';
        
            while (contador < numero) {
                contador++;
                numerosMostrados += contador + ' ';
            }
            document.getElementById('conta').innerHTML = `<strong>${numerosMostrados}</strong>`;
            return false;
        }
        