//escribe un progrma que muestre por consola los numeros del 1 al 100 sustituyalos segun los siguientes puntos 
//los multiplos de 3 por la palabra fizz
// los multiplos de 5 por la palabra Bus
//los multipllos de 3 y 5 por la plabra fizzbuzz

function fizzbuzz(numero) 
{
    if (numero>0 &&numero<100){
        if(numero%3===0 && numero%5===0){
            alert("fizzbuzz")
        }
        else if(numero %3===0){
            alert("fizz")
        }
        else if(numero%5===0){
            alert("Buzz")
        }
        else {
            alert(numero)
        }
    } 

}

let numero = parseFloat(prompt("Ingrese el numero"))
fizzbuzz(numero)