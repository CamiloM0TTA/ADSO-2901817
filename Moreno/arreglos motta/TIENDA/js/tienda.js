/**
 * crear una tienda con js usando arreglos con no,nre:valor 
 * autor: Camilo Motta 
 * 4 de mayo del 2024
 */
let tienda=[];
let iteracion;
let sumar=0;
let descuento;

tienda = [
    { id: 1, nombreProducto: 'Arroz', tipoProducto: 'granos', tipoUnidad: 'gramos', unidad: 1000, valor: 2400 },
    { id: 2, nombreProducto: 'lentejas', tipoProducto: 'granos', tipoUnidad: 'gramos', unidad: 500, valor: 1300 },
    { id: 3, nombreProducto: 'carne de res', tipoProducto: 'carnes', tipoUnidad: 'gramos', unidad: 500, valor: 13500 },
    { id: 4, nombreProducto: 'pollo entero', tipoProducto: 'carnes', tipoUnidad: 'gramos', unidad: 1000, valor: 12500 },
    { id: 5, nombreProducto: 'cebolla larga', tipoProducto: 'verduras', tipoUnidad: 'gramos', unidad: 500, valor: 1300 },
    { id: 6, nombreProducto: 'mora', tipoProducto: 'frutas', tipoUnidad: 'gramos', unidad: 500, valor: 1200 },
];

// Crear un registro
tienda.push({ id: 7, nombreProducto: 'lulo', tipoProducto: 'frutas', tipoUnidad: 'gramos', unidad: 500, valor: 1600 });
tienda.push({ id: 8, nombreProducto: 'papa', tipoProducto: 'verduras', tipoUnidad: 'gramos', unidad: 500, valor: 1200 });

console.log(tienda);

for (iteracion = 0; iteracion < tienda.length; iteracion++) {
    if (tienda[iteracion].id == 7) {
        tienda[iteracion].valor = 3600;
    } else {
        console.log("No existe el producto con id 7");
    }

    if (tienda[iteracion].tipoProducto === 'carnes') {
        tienda[iteracion].valor = 26600;
    } else {
        console.log("No existe el producto de tipo 'carnes'");
    }

    sumar += tienda[iteracion].valor;
    if(tienda[iteracion].tipoProducto=='frutas'){
        descuento= fdescuentos(tienda[iteracion].valor);
    }
    else{
        descuento=0;
    }
    console.log(descuento);
}

console.log(tienda);
console.log('Suma de todos los valores:');
console.log(sumar);
