/**
 * Created by Stéphanie on 10/11/2015.
 */
// TODO : ajoutez ici la définition de l'objet Chien
var Chien = {
    init: function(nom, race, taille, aboyer){
        this.nom = nom;
        this.race = race;
        this.taille = taille;
        this.aboyer();
    }


};



var crokdur = Object.create(Chien);
crokdur.init("Crokdur", "mâtin de Naples", 75);
crokdur.aboyer("Grrr ! Grrr !");
console.log(crokdur.nom + " est un " + crokdur.race + " mesurant " + crokdur.taille + " cm");
console.log("Tiens, un chat ! " + crokdur.nom + " aboie : " + crokdur.aboyer());

var pupuce = Object.create(Chien);
pupuce.init("Pupuce", "bichon", 22);
pupuce.aboyer("Kaii ! Kaii !");
console.log(pupuce.nom + " est un " + pupuce.race + " mesurant " + pupuce.taille + " cm");
console.log("Tiens, un chat ! " + pupuce.nom + " aboie : " + pupuce.aboyer());