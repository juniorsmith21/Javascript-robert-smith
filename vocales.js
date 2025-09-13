function buscar(vocalB){
let vocales = ["a","e","i","o","u",]
for(let i=0;i<vocales.length;i++){
    if(vocalB==vocales[i]){
        alert("Vocal encontrada "+ vocalB);
    }
    else{
    }
    alert("No existe")
}
}
let B = prompt("Digite la palabra a buscar");

buscar(B);

