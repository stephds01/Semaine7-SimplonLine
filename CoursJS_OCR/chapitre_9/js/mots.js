/**
 * Created by Stéphanie on 12/11/2015.
 */

//Je crée un tableau MOTS
var mots = [];

//Je crée une variable "mot" vide
var mot = "";

//Tant que mot !== à stop  alors je boucle
while(mot !== "stop"){
    mot = prompt('Veuillez saisir un mot :');
    //si mot !== stop alors je pushe le mot ds tb "mots"
    if(mot !== "stop"){
        mots.push(mot);
    }
}
//Affiche la liste de mot de la tab 'Mots'

mots.forEach(function(mot){
    console.log(mot);
});



