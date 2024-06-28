let bingo=[];
let iteracion1;
let iteracion2;
let contador=0;
let tabla;

for (let iteracion1 = 0; iteracion1 < 5; iteracion1++) {
    interno=[];
   for (let iteracion2 = 0; iteracion2 < 5; iteracion2++) {
    
    contador=contador+1;
    tabla= contador*2;
    interno.push(tabla)
    
   }
   bingo.push(interno)
}
console.log(bingo);


console.log("B \n ")
for (let iteracion2 = 0; iteracion2 < 5 ; iteracion2++) {
    console.log(bingo[iteracion2][0]+"")
    
}

console.log("I \n ")
for (let iteracion2 = 0; iteracion2 < 5 ; iteracion2++) {
    console.log(bingo[iteracion2][1]+"")
    
}

console.log("N \n ")
for (let iteracion2 = 0; iteracion2 < 5 ; iteracion2++) {
    console.log(bingo[iteracion2][2]+"")
    
}

console.log("G \n ")
for (let iteracion2 = 0; iteracion2 < 5 ; iteracion2++) {
    console.log(bingo[iteracion2][3]+"")
    
}

console.log("O \n ")
for (let iteracion2 = 0; iteracion2 < 5 ; iteracion2++) {
    console.log(bingo[iteracion2][4]+"")
    
}


// x1
console.log("x1")
for (iteracion1 = 0; iteracion1 < 3; iteracion1++) {
    for ( iteracion2 = 0; iteracion2 < 3; iteracion2++) {
        if (iteracion1%2==0 && iteracion2%2==0) {
            console.log(bingo[iteracion1][iteracion2])
        }
        else if (iteracion1%2==1 && iteracion2%2==1) {
            console.log(bingo[iteracion1][iteracion2])
        }
        else{
            console.log("")
        }
    }
    
}

//x2
console.log("x2")
for (iteracion1 = 0; iteracion1 < 3; iteracion1++) {
    for (iteracion2 = 2; iteracion2 < 5; iteracion2++) {
        if (iteracion1%2==0 && iteracion2%2==0) {
            console.log(bingo[iteracion1][iteracion2])
        }
        else if (iteracion1%2==1 && iteracion2%2==1) {
            console.log(bingo[iteracion1][iteracion2])
        }
        else{
            console.log("")
        }
    }
    
}

//x3
console.log("x3")
for (iteracion1 = 2; iteracion1 < 5; iteracion1++) {
    for (iteracion2 = 1; iteracion2 < 4; iteracion2++) {
        if (iteracion1%2==0 && iteracion2%2==1) {
            console.log(bingo[iteracion1][iteracion2])
        }
        else if (iteracion1%2==1 && iteracion2%2==0) {
            console.log(bingo[iteracion1][iteracion2])
        }
        else{
            console.log("")
        }
    }
    
}

//x grande
console.log("X Grande :");
for(let iteracion1 = 0; iteracion1 < 5; iteracion1++) {
    for(let iteracion2 = 0; iteracion2 < 5; iteracion2++) {
        if(iteracion1 == iteracion2 || iteracion1 + iteracion2 == 4) {
            console.log(bingo[iteracion1][iteracion2]);
        }
    }
}