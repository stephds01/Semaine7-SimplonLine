/**
 * Created by Stéphanie on 10/11/2015.
 */
// Prototype simple

//var personnage = {
//    nom: "",
//    sante: 0,
//    force: 0,
//    xp: 0,
//
//    decrire: function(){
//        var description = this.nom + " a " + this.sante + " points de vie "+ this.force + " en force et " + this.xp + " point d'expérience";
//        return description;
//    }
//};
//
//var perso1 = Object.create(personnage);
//perso1.nom = "Aurora";
//perso1.sante = 150;
//perso1.force = 25;
//
//var perso2 = Object.create(personnage);
//perso2.nom= "Glacius";
//perso2.sante = 130;
//perso2.force =35;
//
//
//console.log(perso1.decrire());
//console.log(perso2.decrire());


//Prototype plus poussé mais plus court

//var Personnage = {
//    init: function(nom,sante,force){
//        this.nom = nom;
//        this.sante =  sante;
//        this.force = force;
//        this.xp= 0;
//    },
//    decrire: function(){
//        var description = this.nom + " a " + this.sante + " points de vie "+ this.force + " en force et " + this.xp + " point d'expérience";
//        return description;
//    }
//};
//
//var perso1 = Object.create(Personnage);
//perso1.init("Aurora", 150, 25);
//
//var perso2 = Object.create(Personnage);
//perso2.init("Glacius", 130, 30);
//
//console.log(perso1.decrire());
//console.log(perso2.decrire());



//Creation des joueurs et Adversaires

var Personnage = {
    initPerso: function(nom,sante,force){
        this.nom = nom;
        this.sante =  sante;
        this.force = force;
        this.xp= 0;
    },
    decrire: function(){
        var description = this.nom + " a " + this.sante + " points de vie "+ this.force + " en force et " + this.xp + " point d'expérience";
        return description;
    }
};



var Joueur = Object.create(Personnage);

// INITIALISE LE JOUEUR
   Joueur.initJoueur = function(nom, sante, force){
       this.initPerso(nom,sante, force);
       this.xp = 0;
   };

//Renvoie la description du joueur
Joueur.decrire = function(){
    var description = this.nom + " a " + this.sante + " points de vie "+ this.force + " en force et " + this.xp + " point d'expérience";
    return description;
};

var Adversaire = Object.create(Personnage);
Adversaire.initAdversaire = function(nom, sante, force, race, valeur){
  this.initPerso(nom, sante, force);
    this.race = race;
    this.valeur = valeur;
};

// Création des joueurs
var Joueur1= Object.create(Joueur);
Joueur1.initJoueur("Aurore", 150,25);


var Joueur2 = Object.create(Joueur);
Joueur2.initJoueur("Glacius", 130, 30);



//Création du monstre

var Monstre = Object.create(Adversaire);
Monstre.initAdversaire("ZogZog", 40, 20, "orc", 10);



console.log("Bienvenue dans ce jeu d'aventure ! Voici nos courageux Héros");
console.log(Joueur1.decrire());
console.log(Joueur2.decrire());
console.log("Un affreux monstre arrive : c'est un " + Monstre.race + " nommé " + Monstre.nom);



















