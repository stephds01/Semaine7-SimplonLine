/**
 * Created by Stéphanie on 06/11/2015.
 */

var compteur = 1;

while(compteur<=5){
    console.log('Nombre : ' + compteur + '\n');
    compteur++;
}

for(compteur1=1; compteur1<=5; compteur1++){
    console.log('Nombre : ' + compteur1);
}


var lettre = "";
    while(lettre !== "X"){
     lettre = prompt('Taper une lettre ou X pour sortir !');
}