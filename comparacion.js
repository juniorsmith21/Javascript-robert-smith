let numero1=parseInt(prompt("Ingrese el numero 1"));
let numero2=parseInt(prompt("Ingrese el numero 2"));
let numero3=parseInt(prompt("Ingrese el numero 3"));

function comparacion (numero1, numero2,numero3) {
    return Math.max(numero1,numero2,numero3);
   
}
alert("el numero mayor es: "+ comparacion(numero1,numero2,numero3))