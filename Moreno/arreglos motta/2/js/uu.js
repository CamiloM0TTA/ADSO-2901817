/**
 * segundo ejercicio de arreglos 
 * autor: camilo motta 
 * 16 de abril del 2024
 */
let matriz=[]
let interacion1;
let interacion2;

matriz=[

    ["fresa", "coco", "chulupa"],
    ["ajo", "cebolla larga", "brocoli", "tomate"],
    ["papa sabanera", "papa pastusa", "papa criolla"],
]
console.log(matriz);
console.log(matriz[1][3]);
console.log(matriz.length)

for(interacion1=0; interacion1<matriz.length; interacion1++){
    for(interacion2=0; interacion2<matriz[interacion1].length; interacion2){
        console.log(matriz[interacion1][interacion2]);
    }
}