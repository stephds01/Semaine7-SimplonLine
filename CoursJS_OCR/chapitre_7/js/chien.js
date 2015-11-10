/**
 * Created by Stéphanie on 10/11/2015.
 */
// TODO : ajoutez ici la définition de l'objet chien

var chien = {
    nom: "Crockdur",
    race: "Mâtin de Naples",
    taille: 75,
    aboyer: function(){
        return "Grrr ! Grrr !";
    }
};
console.log(chien.nom + " est un " + chien.race + " mesurant " + chien.taille + " cm");
console.log("Tiens, un chat ! " + chien.nom + " aboie : " + chien.aboyer());