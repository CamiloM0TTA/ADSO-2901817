/**
 * Primer ejercicio de arreglos 
 * autor= Camilo Motta 
 * 26 de abril del 2024
 */
let arrayNumeros =[];
let arrayFruit=[];
let iteracion;
let consecutivo=0;

arrayNumeros= [1,2,3,4,5,6];
arrayFruit= ["banano" , "borojo" , "chontauro", "fresa", "aguacate"];

let sizeArrayNum=arrayNumeros.length;
let sizeArrayFruit=arrayFruit.length;

console.log("Cantidad de numeros " +sizeArrayNum);
console.log("Cantidad de frutas " +sizeArrayFruit);

console.log(arrayFruit)
console.log(arrayFruit[1])

arrayFruit.push("manzana")
sizeArrayFruit=arrayFruit.length;
console.log("Cantidad de frutas " +sizeArrayFruit);

console.log(arrayFruit)
console.log(arrayFruit[5])

for (iteracion = 0; iteracion < sizeArrayFruit; iteracion++) {
    consecutivo=consecutivo+1;
    console.log( consecutivo + ": " +arrayFruit[iteracion]);
}
