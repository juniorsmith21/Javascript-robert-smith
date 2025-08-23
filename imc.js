let peso=parseFloat(prompt("Ingrese su peso: "));
let estatura=parseFloat(prompt("Ingrese su estatura: "));

let calculoImc= peso/(estatura*estatura);

if ( calculoImc <18.5) {
    alert("Tienes un peso bajo come: "+ calculoImc)
} else if (calculoImc >=18.5 && calculoImc <25  ) {
    alert("Tienes un peso normal: "+ calculoImc)
} else if (calculoImc >=25 && calculoImc <=30) {
    alert ("Tienes Sobre peso has ejercicio: "+ calculoImc)
} else {
    alert("Estas obeso : "+ calculoImc )
} 