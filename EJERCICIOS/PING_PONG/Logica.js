// EJERCICIO NORMAL

let numero1 = (prompt("Digita un numero"));


if (numero1%numero1 !== 0 ){
    console.log("INTENTA DE NUEVO, NO ES ENTERO");
}
 
else{ 

    let r;
for (r = 0; r <= numero1; r ++){
    console.log(r)
    if(r%5 === 0 && r%3 === 0) {
        console.log(`Este ${r} es PING PONG`);
        continue;
    }
    
 else if (r%5 === 0){ 
    console.log(`Este numero ${r} PONG`);
}

else if (r%3 === 0){
    console.log(`Este numero ${r} es PING`);
}
}
}



//------------------------------------------------------------------



// EJERCICIO PING_PONG DO WHILE


let numero;

do{
    numero = prompt("Digita un numero");
    console.log("INTENTA DE NUEVO, NO ES ENTERO");
}
while (numero%numero !== 0 );
 

let i;

for (i = 1; i <= numero; i ++){
    console.log(i)
    if(i%5 === 0 && i%3 === 0) {
        console.log(`Este ${i} es PING PONG`);
        continue;
    }
    
 else if (i%5 === 0){ 
    console.log(`Este numero ${i} PONG`);
}

else if (i%3 === 0){
    console.log(`Este numero ${i} es PING`);
}
}


