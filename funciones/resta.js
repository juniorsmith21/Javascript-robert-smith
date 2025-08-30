function resta(num1,num2)
{
    let resultado=num1-num2
alert("Resultado resta: "+resultado)
}
function suma(num1,num2)
{
    let resultado=num1+num2
    alert("Resultado suma: "+resultado)
}
function multiplicacion(num1,num2)
{
    let resultado=num1*num2
    alert("Resultado multiplicacion: "+resultado)
}
function division (num1,num2)
{
    let resultado=num1/num2
    alert("Resultado division: "+resultado)
}
function mod(num1,num2)
{
    let resultado=num1 % num2;
    alert("El resultado del modulo es: "+resultado)
}
let num1=parseInt(prompt("Digite el numero 1"));
let num2=parseInt(prompt("Digite el numero 2"));


resta(num1,num2);
suma(num1,num2);
multiplicacion(num1,num2);
division (num1,num2);
mod(num1,num2);



