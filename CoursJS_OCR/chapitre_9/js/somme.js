/**
 * Created by Stéphanie on 12/11/2015.
 */


//Addition des valeurs d'un tableau'
var valeurs = [11,3,7,2,9,10];
var montant = 0;
for(var i = 0; i < valeurs.length; i++ ){
    montant += Number(valeurs[i]);
}
console.log("La somme des éléments vaut " + montant);

