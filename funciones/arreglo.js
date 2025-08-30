function numeros(){
    let numeros=[1,2,7,4]    // creando el arreglo
    console.log(numeros[2])  //mostrar el dato
    console.log(numeros[0])
    console.log(numeros)   // mostrar el arreglo
    numeros[2]=7   // cambiar el dato de la posi
    console.log(numeros)
    numeros[4]=22  //agregar un dato
    console.log(numeros)  //mostrar el dato
    numeros.push(33)   // agregar dato
    console.log(numeros)
}
numeros()