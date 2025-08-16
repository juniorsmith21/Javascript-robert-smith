let compra = parseFloat(prompt("Ingrese el valor de su compra: "))
if (compra>=100&&compra<=199){
    let calculo=compra-(compra*0.10);
    alert("Tu descuento es del: "+ calculo)
}
else if(compra>=200){
    let calculo2=compra-(compra*0.20)
    alert("Tu descuento es del: "+ calculo2)
}
else{
    alert("No tienes descuento")
}

(compra>=100&&compra<=199)?alert("Tu descuento es del: "+ calculo):(compra>=200)?alert("Tu descuento es del: "+ calculo2):alert("No tienes descuento");