/**
 * Created by Stéphanie on 08/11/2015.
 */
console.log("ABC".length);
console.log("Je suis une chaine".length);

var mot = "Kangourou";
var longueurDuMot = mot.length;
console.log(longueurDuMot);

var motInitial = "Voici une chaine de caractere :";
var transformMajuscule = motInitial.toUpperCase();
var transformMinuscule = motInitial.toLowerCase();

console.log(transformMajuscule);
console.log(transformMinuscule);

var chaine = "azerty";

console.log(chaine === "azerty");
console.log(chaine === "querty");

var valeurSaisie = "Quitter";
console.log(valeurSaisie === "quitter");   //false
console.log(valeurSaisie.toLowerCase() === "quitter");  //true

var sport = "Tennis-ballon";
console.log(sport.length);

console.log(sport.charAt(3));
console.log(sport[3]);

for(var i = 0; i < sport.length; i++){
    console.log(sport[i]);
}