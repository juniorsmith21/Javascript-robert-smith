let edad=parseInt(prompt("Ingrese su edad"));
if (edad >0 && edad<=12){
    alert("Infantil");
}
else if(edad>=13 && edad<=17){
alert("Adolecente");
}
else if (edad>=18 && edad<=59) {
    alert("Adulto")
}
else if(edad>=60 && edad<=80) {
    alert("Adulto mayor")
}
else {
    alert("Escriba nuevamente el numero")
}
//operador ternario

(edad>0 && edad<=12)? alert("Infantil"):(edad>=13 && edad<=17)?alert("Adolecente"):(edad>=18 && edad<=59)?alert("Adulto"):
(edad>=60 && edad<=80)?alert("Adulto mayor"): alert("Escriba nuevamente el numero");




