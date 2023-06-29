let numero,j=0;

do{
    alert("Ingresa un número entero & que sea un número par");
    numero = prompt("Digita un numero");
    console.log("INTENTA DE NUEVO");
    j++;
}while (numero/numero !== 0 && numero%2 !== 0 );
 


let i=1;
do {
    console.log(i);

    if(i%5 === 0 && i%3 === 0) {
        console.log(`Este ${i} es PING PONG`);
        continue;
    }

    else if (i%5 === 0){ 
    console.log(`Este numero ${i} PONG`);
    continue;
    }

    else if (i%3 === 0){
    console.log(`Este numero ${i} es PING`);
    continue;
    }

    i++;
}   while (i <= numero);
    


