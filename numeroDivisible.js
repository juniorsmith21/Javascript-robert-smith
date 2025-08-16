let numero=parseFloat(prompt("Ingrese el numero para confirmar si es divisible"))
let divisible=numero%3==0 && numero%5==0;
if (divisible){
    alert("El numero es divisible");
}
else{
    alert("El numero no es divisible");
}
//Ternario
(divisible)?alert("El numero es divisible"):alert("El numero no es divisible");