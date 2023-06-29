alert("BIENVENIDO AL CASINO ADSOMBROSO");

let saldo = 5000;

while (saldo > 0 && saldo < 10000){
let numero = parseInt(prompt("A que número le quiere apostar del 1 al 10"));
let apuesta = prompt("Cantidad de dinero que deseas apostar");
let aleatorio = Math.floor(Math.random()*10) + 1;

if (apuesta > 5000){
    alert("No puedes apostar más de 5000");
} 

if (saldo == 10000){
    alert("Máximo de saldo alcanzado");
} 


if (numero === aleatorio){ 
    // let ganancia = apuesta * 3;
    totalg = saldo += apuesta * 3;
    console.log(`Ganaste con el numero ${numero}`);
    console.log(`Tu saldo después de ganar es ${totalg}`);
}

else{
    console.log(aleatorio);
    totalp = saldo -= apuesta;
    console.log(`Perdiste con el número ${numero}`);
    console.log(`Tu saldo después de perder es ${saldo}`);
}

}
if (saldo <= 0) {
    console.log("Has perdido todo tu saldo. BYE BYE");
  } else if (saldo >= 10000) {
    console.log("Has alcanzado el máximo de saldo. ¡Felicidades!");
  }


