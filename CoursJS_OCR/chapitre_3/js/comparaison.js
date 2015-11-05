nombre1 = Number(prompt("Saisir le nombre 1 :"));
nombre2 = Number(prompt("saisir le nombre 2 :"));

if(nombre1 < nombre2){
    console.log('le '+ nombre1 + ' est plus petit que le ' + nombre2);
}
else if(nombre1 > nombre2){
    console.log('Le '+ nombre1 + ' est plus grand que ' + nombre2);
}
else{
    console.log('Le ' +nombre1 + ' est egal au ' + nombre2);
}