function nombre(){
    let nombre=[];
    nombre.push("Ana");
    nombre.push("Luis");
    nombre.push("Junior");
    nombre.splice(1,0,"maria");
   

    console.log(nombre[0]);
    console.log(nombre[1]);
    console.log(nombre[2]);
    console.log(nombre[3]);
    
}
nombre();