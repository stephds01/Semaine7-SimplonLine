/**
 * Created by Stéphanie on 13/11/2015.
 */

//Création de l'objet prototype
var Chien = {
    //Initialise le chien
    init: function(nom, taille, race){
        this.nom = nom;
        this.taille = taille;
        this.race = race;
    },
    //Renvoie l'aboyement du chien
    aboyer: function(){
        var aboiement = "Whoua ! Whoua !";
        if(this.taille<25){
            aboiement = "Kaii ! Kaii !";
        }
        else if(this.taille > 60){
            aboiement = "Grr ! Grr !";
        }
        return aboiement;
    },
    decrire:function(){
        var description = this.nom + " est un " + this.race + " mesurant" + this.taille + " cm. Il aboie : " + this.aboyer();
        return description;
    }
};

//Création de mes chiens
var chien1 = Object.create(Chien);
chien1.init('Crokdur', 75, 'Mâtin de Naples');

var chien2 = Object.create(Chien);
chien2.init('Pupuce', 22, 'Bichon');

var chien3 = Object.create(Chien);
chien3.init('Médor', 58, 'Labrador');


//Je crée un tableau chiens

var chiens = [];


//Je pushe mes chiens dans mon tableau:

chiens.push(chien1);
chiens.push(chien2);
chiens.push(chien3);

//Calcul du nb de chien hebergé
var chienHeberge = chiens.length;

console.log( "Le chenil héberge " + chienHeberge  + " chien(s)");


//Description des particularités des chiens
chiens.forEach(function(chien){
    console.log(chien.decrire());
});

