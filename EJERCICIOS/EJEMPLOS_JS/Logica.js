// const saludo= prompt("DIGITA TU NOMBRE FIIIR")
// const saludo2= prompt("DIGITA TU APELLIDO")
// document.querySelector('.content').innerHTML = `Bienvenido ${saludo + saludo2} ` 

// alert("BIENVENIDO " +  " " , saludo + " " ,  saludo2);
// console.log(saludo + saludo2)

// let cadena1 = "HOLA";
// let cadena2 = "AMIGO";
// let cadena3 = "DE ADSO";
// let cadena4 = `2556678 ${cadena3}`;

// console.log(cadena1);
// console.log(cadena2);
// console.log(cadena3);
// console.log(cadena4);

// let cadena6 = " Monitor de 20\" ";
// console.log(cadena6.length);

// let depar = "Cau";
// let ciu = "Popa";

// console.log(ciu+depar);


let array = [];

for(let i=1; i<=10; i++){
array.push(i);
}


let array2 = array.slice();
array2.push(20);

console.log("ESTO ES ARRAY 1");
console.log(array);
console.table(array);

console.log("ESTO ES ARRAY 2");
console.log(array2); 
console.table(array2);