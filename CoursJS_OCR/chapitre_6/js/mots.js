/**
 * Created by St�phanie on 08/11/2015.
 */
var mot = prompt("Ecrivez un mot :");

var longueurMot = mot.length;
console.log("Le mot " + mot + " contient " + longueurMot + " caract�res");
console.log("En majuscule, il s'�crit comme cela :" + mot.toUpperCase());
console.log("En minuscule, il s'�crit comme cela :" + mot.toLowerCase());

function compterNbVoyelles(mot){
    mot.toLowerCase()
    var voyelle;
    var consonne;

    if(voyelle === "a" && voyelle === "e" && voyelle === "i" && voyelle === "o" && voyelle === "u" && voyelle === "y"){
        count(voyelle);
    }
    else{
        count(consonne);
    }
    console.log("Le " + mot + " contient " + voyelle + " voyelles, et " + consonnes + " consonnes !");

}
console.log(compterNbVoyelles(mot));