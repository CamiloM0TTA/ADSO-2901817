/**
 * función saludo
 * auto: Motta
 * fecha: 14 de junio de 2024
}*/
        function contador5() {
            let numero = document.getElementById('txtSaludo').value;
            let contador = 0;
            let numerosMostrados = '';
           
            let multi=1;
            while(contador<5){
            contador++;
            multi=contador*numero;
            console.log(numero + "x" + contador + "=" + multi)
                
            }
            document.getElementById('conta').innerHTML = `<strong>${numerosMostrados}</strong>`;
            return false;
        }
        