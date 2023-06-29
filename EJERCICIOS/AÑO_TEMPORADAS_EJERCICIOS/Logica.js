let mes = (prompt("Digita un número del 1 al 12 "));

let invierno = ("Enero, Febrero, Marzo");
let primavera = ("Abril, Mayo");
let Verano = ("Junio, Julio, Agosto");
let otoño = ("Septiembre, Octubre, Noviembre, Diciembre");

if(mes > 12){
    console.log("Intenta de nuevo, este número es mayor de 12");
}
if(mes==0){
    console.log("Intenta de nuevo, este número debe ser mayor a 0");
}


else if(mes == 1){ 
    console.log(`El mes que corresponde a ${mes} es Enero con 31 días en INVIERNO`);
    console.log(`Estos meses también son de Invierno ${invierno}`);
}

else if (mes == 2){
        console.log(`El mes que corresponde a ${mes} es Febrero con 28 días y es INVIERNO` );
        console.log(`Estos meses también son de Invierno ${invierno}`);
    }

else if (mes == 3){
    console.log(mes);

        console.log(`El mes que corresponde a ${mes} es Marzo con 30 días y es INVIERNO` );
        console.log(`Estos meses también son de Invierno ${invierno}`);

        }

else if (mes == 4){
    console.log(mes);

        console.log(`El mes que corresponde a ${mes} es Abril con 30  días  y es PRIMAVERA` );
        console.log(`Estos meses también son de primavera ${primavera}`);

        }

else if (mes == 5){
        console.log(mes);
        
        console.log(`El mes que corresponde a ${mes} es Mayo con 31 días y es PRIMAVERA` );
        console.log(`Estos meses también son de primavera ${primavera}`);
        
                }
                
else if (mes == 6){
        console.log(mes);
                    
        console.log(`El mes que corresponde a ${mes} es Junio con 30  días y es VERANO` );
        console.log(`Estos meses también son de verano ${Verano}`);
                    
                    } 
                    
else if (mes == 7){
        console.log(mes);
                                    
        console.log(`El mes que corresponde a ${mes} es Julio con 31  días VERANO` );
        console.log(`Estos meses también son de Verano ${Verano}`);
                                    
                    }

else if (mes == 8){
    console.log(mes);
                                                    
    console.log(`El mes que corresponde a ${mes} es Agosto con 31  días VERANO` );
    console.log(`Estos meses también son de verano ${Verano}`);    
                }

else if (mes == 9){
    console.log(mes);
                                                                    
    console.log(`El mes que corresponde a ${mes} es Septiembre con 30  días y es OTOÑO` );
    console.log(`Estos meses también son de Otoño ${otoño}`);
                                                                    
                } 

else if (mes == 10){
    console.log(mes);
                                                                                    
    console.log(`El mes que corresponde a ${mes} es Octubre con 31  días y es OTOÑO` );
    console.log(`Estos meses también son de Otoño ${Otoño}`);
}                                                                     

else if (mes == 11){
                                                                                        
    console.log(`El mes que corresponde a ${mes} es Noviembre con 30  días y es OTOÑO` );
    console.log(`Estos meses también son de otoño ${otoño}`);                                                                  
                 }
                 
    else if (mes == 12){                                                                            
        console.log(`El mes que corresponde a ${mes} es Diciembre con 31  días es OTOÑO, ¡¡¡ FELIZ NAVIDAD !!` );
        console.log(`Estos meses también son de otoño ${otoño}`);
                                                                                            
                }
        

                //50.12
